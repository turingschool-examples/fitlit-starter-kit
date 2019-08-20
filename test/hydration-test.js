const chai = require('chai');
const assert = require('chai').assert;

const Hydration = require('../src/hydrationClass.js')

describe('Hydration', () => {
  let day1, day2, day3, day4, day5;
  beforeEach( () => {
    day1 = new Hydration({
      "userID": 17,
      "date": "2019/06/15",
      "numOunces": 60
    });

    day2 = new Hydration({
      "userID": 17,
      "date": "2019/06/16",
      "numOunces": 43
    });

    day3 = new Hydration({
      "userID": 17,
      "date": "2019/06/17",
      "numOunces": 59
    })

    day4 = new Hydration({
      "userID": 17,
      "date": "2019/06/18",
      "numOunces": 52
    });

    day5 = new Hydration({
      "userID": 17,
      "date": "2019/06/19",
      "numOunces": 50
    });
  });

  it('should be a function', () => {
    assert.isFunction(Hydration);
  });

  it('should be an instance of the Hydration class', () => {
    assert.equal(day1 instanceof Hydration, true)
  })

});