const chai = require('chai');
const expect = chai.expect;
const Hydration = require('../src/Hydration');
const testHydrationData = [{
  "userID": 1,
  "date": "2019/06/15",
  "numOunces": 37
},
{
  "userID": 2,
  "date": "2019/06/15",
  "numOunces": 75
},
{
  "userID": 3,
  "date": "2019/06/15",
  "numOunces": 47
},
{
  "userID": 1,
  "date": "2019/06/16",
  "numOunces": 69
}];

describe('Hydration', function() {

  it('should calculate the average number of ounces a user has drunk across the entire dataset', function() {
    const userHydration = new Hydration(testHydrationData);

    userHydration.calculateAverageOunces(1);

    expect(userHydration.calculateAverageOunces(1)).to.eql(53)
  });

  it('should return the number of ounces a user drank on a specific day', function() {
    const userHydration = new Hydration(testHydrationData);

    userHydration.calculateDailyOunces(2, "2019/06/15");

    expect(userHydration.calculateDailyOunces(2, "2019/06/15")).to.eql(75)
  });

  it.skip('should return a list of the past 7 days and how many ounces of water was drunk per day', function() {
    const hydrationDataWeekTest = [{
      "userID": 1,
      "date": "2019/06/15",
      "numOunces": 37
    },
    {
      "userID": 2,
      "date": "2019/06/15",
      "numOunces": 75
    },
    {
      "userID": 3,
      "date": "2019/06/15",
      "numOunces": 47
    },
    {
      "userID": 1,
      "date": "2019/06/16",
      "numOunces": 69
    },
    {
      "userID": 1,
      "date": "2019/06/17",
      "numOunces": 96
    },
    {
      "userID": 1,
      "date": "2019/06/18",
      "numOunces": 61
    },
    {
      "userID": 1,
      "date": "2019/06/19",
      "numOunces": 91
    },
    {
      "userID": 1,
      "date": "2019/06/20",
      "numOunces": 50
    },
    {
      "userID": 1,
      "date": "2019/06/21",
      "numOunces": 50
    }];
    const userHydration = new Hydration(testHydrationData);

    userHydration.calculateWeeklyOunces();

    expect(userHydration.calculateWeeklyOunces()).to.eql();
  });
})
