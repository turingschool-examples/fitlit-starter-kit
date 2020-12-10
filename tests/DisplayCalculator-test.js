const chai = require('chai');
const expect = chai.expect;

const DisplayCalculator = require('../src/DisplayCalculator');

describe('DisplayCalculator', () => {
  let displayCalculator;
  let hydrationStats;

  beforeEach(() => {
    displayCalculator = new DisplayCalculator;
    hydrationStats = [
    {"userID": 2, "date": "2019/04/15", "numOunces": 28},
    {"userID": 2, "date": "2019/04/16", "numOunces": 40},
    {"userID": 2, "date": "2019/04/17", "numOunces": 45},
    {"userID": 2, "date": "2019/04/18", "numOunces": 23},
    {"userID": 2, "date": "2019/04/19", "numOunces": 80},
    {"userID": 2, "date": "2019/04/20", "numOunces": 49},
    {"userID": 2, "date": "2019/04/21", "numOunces": 88},
    {"userID": 2, "date": "2019/04/22", "numOunces": 75},
    {"userID": 2, "date": "2019/04/23", "numOunces": 31},
    {"userID": 15, "date": "2019/02/25", "numOunces": 10},
    {"userID": 15, "date": "2019/02/26", "numOunces": 100},
    {"userID": 15, "date": "2019/02/27", "numOunces": 45},
    {"userID": 15, "date": "2019/02/28", "numOunces": 60},
    {"userID": 15, "date": "2019/03/01", "numOunces": 70},
    {"userID": 15, "date": "2019/03/02", "numOunces": 82},
    {"userID": 15, "date": "2019/03/03", "numOunces": 25},
    {"userID": 20, "date": "2019/12/02", "numOunces": 100}
    ];
  })
  it('should be able to calculate the average fluid ounces consumed per day for all time for the given userID', () => {
    expect(displayCalculator.calculateAvgPerDay(2, hydrationStats)).to.equal(51);
    expect(displayCalculator.calculateAvgPerDay(15, hydrationStats)).to.equal(56);
  })
  it('should be able to calculate how many fluid ounces were consumed on a given day', () => {
    //.find date and return numOunces
  })
  it('should be able to calculate how many fluid ounces were consumed each day over the course of 7days and return the amount', () => {
    //.find date and add 1 to each day? to create a new array? or sort?
    //add numOunces and divide by 7
  })
})
