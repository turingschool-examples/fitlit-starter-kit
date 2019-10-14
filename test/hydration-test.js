const chai = require('chai');
const expect = chai.expect;

const Hydration = require('../src/Hydration');
const UserRepository = require('../src/UserRepository');


describe.only('Hydration', function() {
  const mockData = {
    users: [],
    hydration: [{
      "currentUserId": 1,
      "day": "2019/04/15",
      "numOunces": 37
    }, 
    {
      "currentUserId": 1,
      "day": "2019/06/10",
      "numOunces": 36
    },
    {
      "currentUserId": 1,
      "day": "2019/06/11",
      "numOunces": 36
    },
    {
      "currentUserId": 1,
      "day": "2019/06/12",
      "numOunces": 36
    },
    {
      "currentUserId": 1,
      "day": "2019/06/13",
      "numOunces": 36
    },
    {
      "currentUserId": 1,
      "day": "2019/06/14",
      "numOunces": 36
    },
    {
      "currentUserId": 1,
      "day": "2019/06/15",
      "numOunces": 36
    },
    {
      "currentUserId": 1,
      "day": "2019/07/15",
      "numOunces": 35
    }]
  };

  it('should be a function', function() {
    expect(Hydration).to.be.a('function');
  })

  it('should be an instance of Hydration', function() {
    const hydration = new Hydration({
      "currentUserId": 1,
      "day": "2019/06/15",
      "numOunces": 37
    });

    expect(hydration).to.be.an.instanceOf(Hydration);
  })

  it('should store a user ID', function() {
    const hydration = new Hydration({
      "currentUserId": 1,
      "day": "2019/06/15",
      "numOunces": 37
    });

    expect(hydration.userId).to.equal(1);
  })

  it('should store a day', function() {
    const hydration = new Hydration({
      "currentUserId": 1,
      "day": "2019/06/15",
      "numOunces": 37
    });

    expect(hydration.date).to.equal('2019/06/15');
  })

  it('should store an ounce amount for the day', function() {
    const hydration = new Hydration ({
      "currentUserId": 1,
      "day": "2019/06/15",
      "numOunces": 37
    });

    hydration.findDayFluid(mockData.hydration);
    expect(hydration.numOunces).to.equal(36);
  })

  it('should calculate a persons average fluids over time', function() {
    new Hydration({
      "currentUserId": 1,
      "day": "2019/04/15",
      "numOunces": 37
    });

    new Hydration({
      "currentUserId": 1,
      "day": "2019/06/15",
      "numOunces": 36
    });

    const hydrationThree = new Hydration({
      "currentUserId": 1,
      "day": "2019/05/15",
      "numOunces": 35
    });

    expect(hydrationThree.calcAvgFluidConsumption(mockData.hydration)).to.equal(36);
  })

  it('should show last 7 days of fluid consumption', function() {
    const hydrationThree = new Hydration({
      "currentUserId": 1,
      "day": "2019/06/15",
      "numOunces": 35
    });

    expect(hydrationThree.findWeeksFluid(mockData.hydration)).to.have.lengthOf(7);
  })
})