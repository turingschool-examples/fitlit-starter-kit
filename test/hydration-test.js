const chai = require('chai');
const expect = chai.expect;

const Hydration = require('../src/Hydration')

describe('User', function() {

  let hydration, hydrationData;

  beforeEach(() => {
    hydrationData = [
    {
      "userID": 1,
      "date": "2019/06/15",
      "numOunces": 37
    },
    {
      "userID": 1,
      "date": "2019/07/16",
      "numOunces": 75
    },
    {
      "userID": 3,
      "date": "2019/06/17",
      "numOunces": 47
    }
  ]
  hydration = new Hydration(hydrationData);
});

  it('should be a function', function() {
    expect(Hydration).to.be.a('function');
  });

  it('should be an instance of user', function() {
    expect(hydration).to.be.an.instanceof(Hydration);
  });

  it('should calculate the average fluid ounces conusmed per day for all time', function() {
    expect(hydration.calculateAverageFluidsConsumed(1)).to.equal(56);
  });

  it('should show how many fluid ounces conusmed that day', function() {
    expect(hydration.calculateAverageFluidsConsumed(1)).to.equal(37);
  });
});