const chai = require('chai');
const expect = chai.expect;

const CommunityHydration = require('../src/CommunityHydration');

describe('CommunityHydration', () => {
  let communityhydration;
  let hydrations;

  beforeEach(() => {
    communityhydration = new DisplayCalculator;
    hydrations = [
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
    {"userID": 20, "date": "2019/12/26", "numOunces": 100}
    ];
  })
  it('should be able to calculate the average fluid ounces consumed per day for all time for the given userID', () => {
    expect(communityhydration.calculateAvgWaterPerDay(2, hydrations)).to.equal(51);
    expect(communityhydration.calculateAvgWaterPerDay(15, hydrations)).to.equal(56);
  })
  it('should be able to calculate how many fluid ounces were consumed on a given day', () => {
    expect(communityhydration.calculateTotalWaterPerDay(hydrations, 2, "2019/04/22")).to.equal(75);
    expect(communityhydration.calculateTotalWaterPerDay(hydrations, 20, "2019/12/26")).to.equal(100);
  })
  it('should be able to calculate how many fluid ounces were consumed each day over the course of 7days and return the amount', () => {
    //.find date and add 1 to each day? to create a new array? or sort?
    //what if the year runs out or dates run into next month?
    //add numOunces and divide by 7
    //.getDate()? ++
    expect(communityhydration.calculateTotalWeek("2019/04/17")).to.deep.equal([45, 23, 80, 49, 88, 75, 31]);
    expect(communityhydration.calculateTotalWeek("2019/02/25")).to.deep.equal([10, 100, 45, 60, 70, 82, 25]);
    expect(communityhydration.calculateTotalWeek("2019/12/26")).to.deep.equal([]);
  })
})
