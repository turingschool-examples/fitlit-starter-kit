const chai = require('chai');
const expect = chai.expect;

const Activity = require('../src/Activity-Repository');
const User = require('../src/User');
const UserRepository = require('../src/User-Repository');
const activityTestData = require('../test-data/activity-test-data');
const userTestData = require('../test-data/user-test-data.js')

describe('Activity', () => {
  let activity, user1, user2, user3, userID1;
  beforeEach(() => {
    activity = new Activity(activityTestData);
    user1 = new User(userTestData[0]);
    user2 = new User(userTestData[1]);
    user3 = new User(userTestData[2]);
    userID1 = 1;
  });

  it('should be a function', function () {
    expect(Activity).to.be.a('function');
  });

  it('should calculate stairs climbed for all users on a given day', function () {
    expect(activity.returnStairsClimbedAllUsersByDate('2019/06/15')).to.equal(59);
  });

  it('should return how many minutes active a specified user was on a specific date', () => {
    expect(activity.returnActiveMinutesByDate(2, '2019/06/16')).to.equal(220);
  })

  it('should return a boolean based on whether a user achieved their step goal an a specific day', () => {
    expect(activity.checkStepGoalMetByDate(user3, '2019/06/15')).to.equal(true);
  })

  it('should return for a specific user their all time stair climbing record', () => {
    expect(activity.returnStairClimbingRecord(2)).to.equal(44)
  })
  
  it('should calculate steps taken for all users on a given day', function () {
    expect(activity.returnStepsTakenAllUsersByDate('2019/06/16')).to.equal(23053);
  });

  it('should calculate minutes active for all users on a given day', function () {
    expect(activity.returnActiveMinutesAllUsersByDate('2019/06/16')).to.equal(547);
  });

  it('should find all of the days the user met their step goal', function () {
    let days = ['2019/06/17', '2019/06/20']
    expect(activity.returnAllDaysStepGoalExceeded(user1, '2019/06/16')).to.deep.eql(days);
  });

  it('should calculate a user\'s miles walked on a given day', function () {
    expect(activity.returnMilesWalkedByDate(user1, '2019/06/16')).to.equal(5);
  });

  it('should calculate a user\'s average active minutes per week', function () { 
  expect(activity.returnAvgActiveMinutesByWeek(1, '2019/06/15')).to.equal(171);
  });
});