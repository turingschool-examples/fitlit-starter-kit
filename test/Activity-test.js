const chai = require('chai');
const expect = chai.expect;

const Activity = require('../src/Activity');
const sampleActivity = require('../data/sample-activity');
const sampleActivityData = sampleActivity.sampleActivityData;

const ActivityRepo = require('../src/ActivityRepo');

const UserRepo = require('../src/UserRepo');
const sampleData = require('../data/sample-users');
const sampleUserData = sampleData.sampleUserData;


describe('Activity', () => {

  let userRepo, user, activityRepo, userActivity, activity;
  beforeEach(() => {
    userRepo = new UserRepo(sampleUserData);
    user = userRepo.returnUserData(2);
    activityRepo = new ActivityRepo(sampleActivityData);
    activity = new Activity(activityRepo.returnUserActivityData(2), user);
  });

  it('should be a function', () => {
    expect(Activity).to.be.a('function');
  });

  it('should be an instance of Activity', () => {
    expect(activity).to.be.an.instanceOf(Activity);
  });

  it('should return the miles walked for a given user and day', () => {
    const miles = activity.returnMilesWalkedForDate("2019/06/23");
    expect(miles).to.equal(8.52);
  });

  it('should return the minutes active for given day', () => {
    const minutes = activity.returnMinutesActiveGivenDate("2019/06/23");
    expect(minutes).to.equal(200)
  });

  it('should return the avg num min active in a given week', () => {
    const avgMinutesActive = activity.returnAvgMinActiveGivenWeek("2019/06/23");
    expect(avgMinutesActive).to.equal(157.14);
  });

  it('should tell user if they reached step goal for given day', () => {
    const wasStepGoalReached = activity.wasStepGoalAchieved("2019/06/23");
    expect(wasStepGoalReached).to.equal(true);
  });

  it('should return all days user exceeds their step goal', () => {
    const daysStepGoalExceeded = activity.daysStepGoalExceeded();
    expect(daysStepGoalExceeded.length).to.equal(5);
  });

  it('should return user\'s stair climbing record', () => {
    const stairClimbingRecord = activity.stairClimbingRecord();
    expect(stairClimbingRecord).to.equal(25);
  });

  it('should return user\'s all-time steps total', () => {
    const usersTotalSteps = activity.returnUsersStepTotal(2);
    expect(usersTotalSteps).to.equal(54000);
  });

})