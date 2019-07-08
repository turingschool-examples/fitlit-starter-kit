const chai = require('chai');
const expect = chai.expect;

const activityData = require('../data/practice-activity');
const Activity = require('../src/Activity');
const userData = require('../data/users');

describe('Activity', function() {

  let activity;
  beforeEach(() => {
    activity = new Activity(activityData);
  });

  it('should be a function', function() {
    expect(Activity).to.be.a('function');
  });
    
  it('should be an instance of Activity', function() {
    expect(activity).to.be.an.instanceof(Activity);
  });

  it('should return number of steps for a user given the date', function() {
    expect(activity.totalUserStepsDaily(3, "2019/06/15")).to.eql(7402);
  });

  it('should return miles a user has walked ', function() {
    expect(activity.milesWalkedInDay("2019/06/15", userData)).to.equal(6); 
  });

  it('should return flights of stairs a user has completed in a day', function() {
    expect(activity.stairFlightsInDay("2019/06/15", 3)).to.equal(33); 
  });

  it('should return the amount of minutes they were active for a given day', function() {
    expect(activity.minutesActive(3, '2019/06/15')).to.equal(116);
  });

  it('should return minutes active the user averaged for a given week', function() {
    expect(activity.minutesAveragedByWeek(3, '2019/06/16')).to.equal(156);
  });

  it('should return if they met their step goal for a given day', function() {
    expect(activity.stepGoalDay(3, '2019/06/17', userData)).to.equal(false);
  });

  it('should return all the days where user exceeded their step goal', function() {
    expect(activity.exceededStepGoal(3, userData)).to.eql(['2019/06/15', '2019/06/16', '2019/06/19', '2019/06/20', '2019/06/21', '2019/06/22']);
  });

  it('should find users all-time stair climbing record', function() {
    expect(activity.climbingRecord(3)).to.equal(46);
  });

  it('should return average number of stairs climbed specific date', function() {
    expect(activity.averageActivity('2019/06/15', 'flightsOfStairs')).to.equal(35);
  });

  it('should return average number of steps taken specific date', function() {
    expect(activity.averageActivity('2019/06/15', 'numSteps')).to.equal(7309);
  });

  it('should return average number of minutes active specific date', function() {
    expect(activity.averageActivity('2019/06/15', 'minutesActive')).to.equal(145);
  });
});