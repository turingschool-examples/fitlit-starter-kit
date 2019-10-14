const chai = require('chai');
const expect = chai.expect;

const Hydration = require('../src/Hydration');
const UserRepository = require('../src/UserRepository');


describe.only('Hydration', function() {
  const mockData = {
    users: [],
    hydration: [{
      "userID": 1,
      "date": "2019/04/15",
      "numOunces": 37
    }, 
    {
      "userID": 1,
      "date": "2019/06/15",
      "numOunces": 36
    },
    {
      "userID": 1,
      "date": "2019/05/15",
      "numOunces": 35
    }]
  };

  it('should be a function', function() {
    expect(Hydration).to.be.a('function');
  })

  it('should be an instance of Hydration', function() {
    const hydration = new Hydration ({
      "userID": 1,
      "date": "2019/06/15",
      "numOunces": 37
    });

    expect(hydration).to.be.an.instanceOf(Hydration);
  })

  it('should store a user ID', function() {
    const hydration = new Hydration ({
      "userID": 1,
      "date": "2019/06/15",
      "numOunces": 37
    });

    expect(hydration.userId).to.equal(1);
  })

  it('should store a date', function() {
    const hydration = new Hydration ({
      "userID": 1,
      "date": "2019/06/15",
      "numOunces": 37
    });

    expect(hydration.date).to.equal('2019/06/15');
  })

  it('should store an ounce amount for the day', function() {
    const hydration = new Hydration ({
      "userID": 1,
      "date": "2019/06/15",
      "numOunces": 37
    });

    expect(hydration.numOunces).to.equal(37);
  })

  it('should calculate a persons average fluids over time', function() {
    new Hydration({
      "userID": 1,
      "date": "2019/04/15",
      "numOunces": 37
    });

    new Hydration({
      "userID": 1,
      "date": "2019/06/15",
      "numOunces": 36
    });

    const hydrationThree = new Hydration({
      "userID": 1,
      "date": "2019/05/15",
      "numOunces": 35
    });

    expect(hydrationThree.calcAvgFluidConsumption(1, mockData.hydration)).to.equal(36);
  })

  
})