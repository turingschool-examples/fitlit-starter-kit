const chai = require('chai');
const expect = chai.expect;


const Activity = require('../src/Activity');
const activityData = require('../test-data/activity-fixtures');
const User = require('../src/User');
const userData = require('../test-data/users-fixtures')

describe('Activity', function() {

  it('should be a function', function() {
    const activity = new Activity();
    expect(Activity).to.be.a('function');
  });

  it('should store user information', function() {
    const activity = new Activity(activityData);
    expect(activityData).to.be.a('array')
  });

  it('should be able to find a user by their id', function() {
    const activity = new Activity(activityData);
    expect(activity.findIdHelper(1)).to.be.a('array')
  });

  it('should calculate miles walked for a user on a specific day', function() {
    const activity = new Activity(activityData);
    expect(activity.calculateMilesWalked(1, '2019/06/15', 3577)).to.equal(2.91)
  });

  it('should display how many active minutes per day for a user based on a specific date', function() {
    const activity = new Activity(activityData);
    expect(activity.displayActiveMinutes(1, '2019/06/15')).to.equal(140)
  });

  it('should display average active minutes per week for a user', function() {
    const activity = new Activity(activityData);
    expect(activity.displayWeeklyActiveMinutes(1)).to.deep.eql([140, 292, 168, 140, 119])
  });

  it('should compare a users step goal with their actual steps for a given day', function() {
    const activity = new Activity(activityData);
    expect(activity.compareStepGoal(1, '2019/06/15')).to.equal(false)
  });

  it('should find days where the user exceeded their step goal', function() {
    const activity = new Activity(activityData);
    expect(activity.findExceededStepGoal(1)).to.deep.eql(['2019/06/17', '2019/06/20', '2019/06/22'])
  });

  
});