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

  it('should hold userId property', function() {
    expect(activity.userID).to.equal(1)
  });

  it('should hold date property', function() {
    expect(activity.date).to.equal('2019/06/15')
  });

  it('should hold number of steps property', function() {
    expect(activity.numSteps).to.equal(3577)
  });

  it('should hold minutes active property', function() {
    expect(activity.minutesActive).to.equal(140)
  });

  it('should hold flights of stairs climbed property', function() {
    expect(activity.stairsClimbed).to.equal(16)
  });

  it('should verify if step goal has been met', function() {
    expect(activity.verifyIfStepGoal()).to.equal(false)
  })

  it('should return miles user has walked based on steps', function() {
    expect(activity.getStepMiles().to.equal(2.91))
  })
});
