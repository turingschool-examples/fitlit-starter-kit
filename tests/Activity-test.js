const chai = require('chai');
const expect = chai.expect;
const Activity = require('../src/Activity');

describe('Activity', function() {
  let activity;

  beforeEach(function() {
    activity = new Activity({
      "userID": 1,
      "date": "2019/06/15",
      "numSteps": 3577,
      "minutesActive": 140,
      "flightsOfStairs": 16
    });
  });

  it('should hold activity properties', function() {
    expect(activity.userID).to.equal(1)
    expect(activity.date).to.equal('2019/06/15')
    expect(activity.numSteps).to.equal(3577)
    expect(activity.minutesActive).to.equal(140)
    expect(activity.flightOfStairs).to.equal(16)
    expect(activity.isSuccessfulStepGoal).to.equal(false)
  })

  it('should return miles user has walked based on steps', function() {
    expect(activity.getStepMiles().to.equal(2.91))
  })



});
