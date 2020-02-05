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
    expect(hydration. getFluidConsumedDay(1, "2019/06/15")).to.equal(37);
  });

  it('should show the fluids consumed in the past 7 days', function() {
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
        "userID": 1,
        "date": "2019/06/17",
        "numOunces": 42
      },
      {
        "userID": 1,
        "date": "2019/07/18",
        "numOunces": 10
      },
      {
        "userID": 1,
        "date": "2019/06/19",
        "numOunces": 31
      },
      {
        "userID": 1,
        "date": "2019/07/20",
        "numOunces": 58
      },
      {
        "userID": 1,
        "date": "2019/07/21",
        "numOunces": 64
      },
      {
        "userID": 3,
        "date": "2019/06/17",
        "numOunces": 47
      }
    ]
    expect(hydration.getFluidConsumedSevenDay()).to.deep.equal([37, 75, 42, 10, 31, 58, 64, 47]);
  });
});