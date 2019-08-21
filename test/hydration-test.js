const chai = require('chai');
const assert = require('chai').assert;

const Hydration = require('../src/hydrationClass.js')

describe('Hydration', () => {
  let day1, day2, day3, day4, day5, day6, day7, hydrationData;
  beforeEach( () => {
    day1 = {
      "userID": 17,
      "date": "2019/06/15",
      "numOunces": 60
    };

    day2 = {
      "userID": 17,
      "date": "2019/06/16",
      "numOunces": 43
    };

    day3 = {
      "userID": 17,
      "date": "2019/06/17",
      "numOunces": 59
    };

    day4 = {
      "userID": 17,
      "date": "2019/06/18",
      "numOunces": 52
    };

    day5 = {
      "userID": 17,
      "date": "2019/06/19",
      "numOunces": 50
    };

    day6 = {
      "userID": 17,
      "date": "2019/06/20",
      "numOunces": 24
    };

    day7 = {
      "userID": 17,
      "date": "2019/06/21",
      "numOunces": 99
    };

    hydrationData = new Hydration([day1, day2, day3, day4, day5, day6, day7], 17);
  });

  it('should be a function', () => {
    assert.isFunction(Hydration);
  });

  it('should be an instance of the Hydration class', () => {
    assert.equal(hydrationData instanceof Hydration, true)
  });

  it('should identify user by user ID', () => {
    assert.equal(hydrationData.userID, 17)
  });

  it('should calculate average fluid oz intake per day for the whole', () => {
    assert.equal(hydrationData.calculateAverageWaterIntake(), 55)
  })

  it('should return number of fluid ounces consumed for a specific day', () => {
    assert.equal(hydrationData.hydrationData[0].date, "2019/06/15");
    var date = hydrationData.hydrationData[0].date
    assert.equal(hydrationData.waterConsumedThatDay(date), 60)
  })

});