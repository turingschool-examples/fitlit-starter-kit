const chai = require('chai');
const expect = chai.expect;

const CommunityHydration = require('../src/CommunityHydration');
const Hydration = require('../src/Hydration');

describe('CommunityHydration', function() {
  let communityHydration, hydration;

  beforeEach(function() {
    communityHydration = new CommunityHydration([
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
      {"userID": 20, "date": "2019/12/26", "numOunces": 100},
      {"userID": 20, "date": "2019/12/27", "numOunces": 102},
      {"userID": 20, "date": "2019/12/28", "numOunces": 98},
      {"userID": 20, "date": "2019/12/29", "numOunces": 100},
      {"userID": 20, "date": "2019/12/30", "numOunces": 106},
      {"userID": 20, "date": "2019/12/31", "numOunces": 94},
      {"userID": 20, "date": "2020/01/01", "numOunces": 100}
    ]);
  });

  it('should be able to calculate the average fluid ounces consumed per day for all time for the given userID', () => {
    expect(communityHydration.calculateAvgWaterPerDay(2)).to.equal(51);
    expect(communityHydration.calculateAvgWaterPerDay(15)).to.equal(56);
  })
  it('should be able to calculate how many fluid ounces were consumed on a given day', () => {
    expect(communityHydration.calculateTotalWaterPerDay(2, "2019/04/22")).to.equal(75);
    expect(communityHydration.calculateTotalWaterPerDay(20, "2019/12/26")).to.equal(100);
  })
  it('should be able to calculate how many fluid ounces were consumed each day over the course of 7days and return the amount', () => {
    expect(communityHydration.calculateTotalWeek(2, "2019/04/17", "2019/04/23")).to.deep.equal([45, 23, 80, 49, 88, 75, 31]);
    expect(communityHydration.calculateTotalWeek(15, "2019/02/25", "2019/03/03")).to.deep.equal([10, 100, 45, 60, 70, 82, 25]);
    expect(communityHydration.calculateTotalWeek(20, "2019/12/26", "2020/01/01")).to.deep.equal([100, 102, 98, 100, 106, 94, 100]);
  })
})
