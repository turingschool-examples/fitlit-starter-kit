const chai = require('chai');
const expect = chai.expect;

const Activity = require('../src/Activity');

describe('Activity', () => {
  let data, activity;

  beforeEach(() => {
    data = {
      "userID": 4,
      "date": "2019/06/15",
      "numSteps": 3486,
      "minutesActive": 114,
      "flightsOfStairs": 32
    };

    activity = new Activity(data);
  });

  it.skip('should have an appropriate constructor', () => {
    expect(activity.id).to.equal(data.userID);
    expect(activity.date).to.equal(data.date);
    expect(activity.steps).to.equal(data.numSteps);
    expect(activitiy.minActive).to.equal(data.minutesActive);
    expect(activity.flightsOfStairs).to.equal(data.flightsOfStairs);
  });
});