const chai = require('chai');
const expect = chai.expect;

const activityData = require('../data/activity-test-data');
const userData = require('../data/users-test-data');

const Activity = require('../src/Activity');
const User = require('../src/User');


describe('Activity', () => {
  let user;
  let activity;

  beforeEach(() => {
    user = new User(userData[0])
    activity = new Activity(activityData, user)
  });

  it('should be a function', () => {
    expect(Activity).to.be.a('function');
  });

  it('should have access to userData', () => {
    expect(activity.user).to.eql(userData[0]);
  });

  it('should have access to activityData', () => {
    expect(activity.activityData).to.eql(activityData);
  });

  it('should return the number of steps for specific user for a specific day', () => {
    expect(activity.returnNumStepsDay("2019/06/17")).to.equal(14329);
  });

  it('should return the miles walked by a specific user for a specific day', () => {
    expect(activity.returnMilesWalked()).to.equal(6.60);
  });

  it('should return number of flights of stairs climbed by a specific user for a specific day', () => {
    expect(activity.returnFlightsOfStairs("2019/06/17")).to.equal(18);
  });

  it('should return the minutes active for a day', () => {
    expect(activity.returnMinutesActive("2019/06/26")).to.equal(219);
  });

  it('should return the average minutes active for a week', () => {
    expect(activity.returnAverageMinutesActiveForWeek(1)).to.equal(148);
  });

  it('should return the average steps for a week', () => {
    expect(activity.returnAverageStepsForWeek(1)).to.equal(7908);
  });

  it('should return the average steps for a week', () => {
    expect(activity.returnAverageStairsForWeek(1)).to.equal(19);
  });

  it('should return false if they did not meet their step goal for a date', () => {
    expect(activity.metStepGoal('2019/06/15')).to.equal(false);
  });


  it('should return true if they did  meet their step goal for a date', () => {
    expect(activity.metStepGoal("2019/06/17")).to.equal(true);
  });

  it('should return all days where exceeded step goal ', () => {
    expect(activity.returnAllStepGoalDays()).to.eql(['2019/06/17', '2019/06/22', '2019/06/23']);
  });

  it('should return alltime stair climbing record ', () => {
    expect(activity.returnStepRecord()).to.equal(36);
  });

  it('should return all friends\' step count for the week ', () => {
    expect(activity.returnFriendsStepCount()[0]).to.eql({
      '2': 56526,
      '3': 46615,
      '4': 63243
    });
  });

  it('should return friend with most steps ', () => {
    expect(activity.returnFriendsStepCount()[1]).to.equal(4);
  });

  it('should return back the dates of what days had increasing steps for 3 or more days', () => {
    expect(activity.returnThreeDayStepStreak()).to.eql(['2019/06/25', '2019/06/24', '2019/06/23']);
  });

  it('should return back the dates of what days had increasing floors climbed for 2 or more days', () => {
    expect(activity.returnTwoDayStairStreak()).to.eql(['2019/06/26', '2019/06/25']);
  });

});