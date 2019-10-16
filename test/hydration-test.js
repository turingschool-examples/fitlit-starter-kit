const chai = require('chai');
const expect = chai.expect;

const Hydration = require('../src/Hydration');
const UserRepository = require('../src/UserRepository');


describe('Hydration', function() {
  const mockData = {
    hydration: [{
      "userID": 1,
      "date": "2019/04/15",
      "numOunces": 37
    },
    {
      "userID": 1,
      "date": "2019/06/10",
      "numOunces": 36
    },
    {
      "userID": 1,
      "date": "2019/06/11",
      "numOunces": 36
    },
    {
      "userID": 1,
      "date": "2019/06/12",
      "numOunces": 36
    },
    {
      "userID": 1,
      "date": "2019/06/13",
      "numOunces": 36
    },
    {
      "userID": 1,
      "date": "2019/06/14",
      "numOunces": 36
    },
    {
      "userID": 1,
      "date": "2019/06/15",
      "numOunces": 36
    },
    {
      "userID": 1,
      "date": "2019/07/15",
      "numOunces": 35
    }]
  };

  const mockUserRepo = {
    "currentUserId": 1,
    "day": "2019/06/15",
    "numOunces": 37
  }

  it('should be a function', function() {
    expect(Hydration).to.be.a('function');
  })

  it('should be an instance of Hydration', function() {
    const hydration = new Hydration(mockUserRepo);

    expect(hydration).to.be.an.instanceOf(Hydration);
  })

  it('should store a user ID', function() {
    const hydration = new Hydration(mockUserRepo);

    expect(hydration.userId).to.equal(1);
  })

  it('should store a date', function() {
    const hydration = new Hydration(mockUserRepo);

    expect(hydration.date).to.equal('2019/06/15');
  })

  it('should store an ounce amount for the date', function() {
    const hydration = new Hydration (mockUserRepo);

    hydration.findDayFluid(mockData.hydration);
    expect(hydration.numOunces).to.equal(36);
  })

  it('should calculate a persons average fluids over time', function() {
    const hydration = new Hydration(mockUserRepo);

    expect(hydration.calcAvgFluidConsumption(mockData.hydration)).to.equal(36);
  })

  it('should show last 7 days of fluid consumption', function() {
    const hydration = new Hydration(mockUserRepo);

    expect(hydration.findWeeksFluid(mockData.hydration)).to.have.lengthOf(7);
  })

  it("should show highest number of ounces", () => {
    const hydration = new Hydration(mockUserRepo);
    const ounces = hydration.findHighestFluid(mockData.hydration);
    expect(ounces).to.equal(37);
  })
})
