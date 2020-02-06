const chai = require('chai');
const expect = chai.expect;

const Activity = require('../src/Acticity')

describe('User', function() {

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
      "userID": 2,
      "date": "2019/06/15",
      "numSteps": 4294,
      "minutesActive": 138,
      "flightsOfStairs": 10
    },
    {
      "userID": 3,
      "date": "2019/06/15",
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
    expect(activity).to.be.an.instanceof(Hydration);
  });
});