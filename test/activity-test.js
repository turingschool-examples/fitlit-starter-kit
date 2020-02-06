const chai = require('chai');
const expect = chai.expect;

const Activity = require('../src/Activity')

describe('Activity', function() {

  let activity, activityData;

  beforeEach(() => {
    activityData = [
    {
      "userID": 1,
      "date": "2019/06/15",
      "numSteps": 3577,
      "minutesActive": 140,
      "flightsOfStairs": 16
    },
    {
      "userID": 1,
      "date": "2019/06/16",
      "numSteps": 4294,
      "minutesActive": 138,
      "flightsOfStairs": 10
    },
    {
      "userID": 3,
      "date": "2019/06/17",
      "numSteps": 7402,
      "minutesActive": 116,
      "flightsOfStairs": 33
    }
  ]
  activity = new Activity(activityData);
});

  it('should be a function', function() {
    expect(Activity).to.be.a('function');
  });

  it('should be an instance of acitivty', function() {
    expect(activity).to.be.an.instanceof(Activity);
  });

  it('should calculate miles walked today', function() {
    expect(activity.calculateMilesToday(1, "2019/06/15", 4.3)).to.equal(2.91);
  });

  it('should calculate miles walked today', function() {
    expect(activity.getMinutesActive(1, "2019/06/16")).to.equal(138);
  });
});