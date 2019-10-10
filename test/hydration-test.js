const chai = require('chai');
const expect = chai.expect;

const Hydration = require('../src/Hydration');
// const User = require('../src/User');
describe('Hydration', function() {
  let hydrationData;
  let hydration;

  beforeEach(function() {
    hydrationData = [{
      "userID": 1,
      "date": "2019/06/15",
      "numOunces": 37
    },
    {
      "userID": 2,
      "date": "2019/06/15",
      "numOunces": 38
    },
    {
      "userID": 3,
      "date": "2019/05/09",
      "numOunces": 1
    },
    {
      "userID": 4,
      "date": "2019/04/15",
      "numOunces": 36
    },
    {
      "userID": 2,
      "date": "2018/10/23",
      "numOunces": 34
    },
    {
      "userID": 1,
      "date": "2018/06/16",
      "numOunces": 39
    },
    {
      "userID": 3,
      "date": "2018/03/30",
      "numOunces": 2
    },
    {
      "userID": 4,
      "date": "2018/02/01",
      "numOunces": 28
    },
    {
      "userID": 1,
      "date": "2016/08/22",
      "numOunces": 30
    },
    {
      "userID": 3,
      "date": "2016/05/14",
      "numOunces": 3
    },
    {
      "userID": 2,
      "date": "2016/04/27",
      "numOunces": 40
    },
    {
      "userID": 4,
      "date": "2016/03/15",
      "numOunces": 35

    },
    {
      "userID": 4,
      "date": "2015/09/20",
      "numOunces": 40

    },
    {
      "userID": 4,
      "date": "2015/09/19",
      "numOunces": 30

    },
    {
      "userID": 4,
      "date": "2015/09/18",
      "numOunces": 40

    },
    {
      "userID": 4,
      "date": "2015/09/17",
      "numOunces": 40

    },
    {
      "userID": 4,
      "date": "2015/09/16",
      "numOunces": 30

    },
    {
      "userID": 4,
      "date": "2015/09/15",
      "numOunces": 30

    },]

    hydration = new Hydration(hydrationData);
  });

  it('should take in a list of data', function() {
    expect(hydration.hydrationData[0].userID).to.equal(1);
    expect(hydration.hydrationData[2].numOunces).to.equal(1);
    expect(hydration.hydrationData[4].date).to.equal('2018/10/23');
  });

  it('should find the average water intake per day for a user', function() {
    expect(hydration.calculateAverageOunces(3)).to.equal(2);
  });

  it('should find the water intake for a user on a specified date', function() {
    expect(hydration.calculateDailyOunces(1, "2019/06/15")).to.equal(37);
    expect(hydration.calculateDailyOunces(4, "2019/04/15")).to.equal(36);
  });

  //day of hydration should not include user 2 or user 1 on August 22
  //week of hydration should not include user 4 not during the week

});
