const chai = require('chai');
const expect = chai.expect;

const Activity = require('../src/Activity-Repository');
const User = require('../src/User');
const activityTestData = require('../test-data/activity-test-data');
const userTestData = require('../test-data/user-test-data.js')

describe('Activity', () => {
  let activity, user1, user3;
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

  it('should calculate average stairs climbed for all users on a given day', function () {
    expect(activity.returnAvgStairsClimbedAllUsersByDate('2019/06/15')).to.equal(19);
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
  
  it('should calculate average steps taken for all users on a given day', function () {
    expect(activity.returnAvgStepsTakenAllUsersByDate('2019/06/16')).to.equal(7684);
  });

  it('should calculate average minutes active for all users on a given day', function () {
    expect(activity.returnAvgActiveMinutesAllUsersByDate('2019/06/16')).to.equal(182);
  });

  it('should find all of the days the user met their step goal', function () {
    let days = ['2019/06/17', '2019/06/20']
    expect(activity.returnAllDaysStepGoalExceeded(user1, '2019/06/16')).to.deep.eql(days);
  });

  it('should calculate a user\'s miles walked on a given day', function () {
    expect(activity.returnMilesWalkedByDate(user1, '2019/06/16')).to.equal(5);
  });

  it('should calculate a user\'s average active minutes per week', function () {
    expect(activity.returnAvgActiveMinutesByWeek(1, '2019/06/15')).to.equal(151);
  });

  it('should calculate a user\'s active minutes per week', function () { 
    expect(activity.returnActiveMinutesByWeek(1, '2019/06/21')).to.deep.eql([140, 175, 168, 165, 275, 140, 135]);
  });

  it('should calculate a user\'s number of steps per week', function () {
    expect(activity.returnNumberOfStepsByWeek(1, '2019/06/21')).to.deep.eql([3577, 6637, 14329, 4419, 8429, 14478, 6760]);
  });

  it('should calculate a user\'s stairs climbed per week', function () {
    expect(activity.returnStairsClimbedByWeek(1, '2019/06/21')).to.deep.eql([16, 36, 18, 33, 2, 12, 6]);
  });

  it('should determine a user\'s activity status for a given day', function () {
    expect(activity.checkUserActivityStatusByDate(1, '2019/06/15')).to.equal(true);
  });

  it('should calculate a user\'s number of steps for a given day', function () {
    expect(activity.returnNumberOfStepsByDate(1, '2019/06/15')).to.equal(3577);
  });

  it('should calculate a user\'s flights of stairs for a given day', function () {
    expect(activity.returnStairsClimbedByDate(1, '2019/06/15')).to.equal(16);
  });

  it('should be able to find streaks of three days where steps increased for each day', () => {
    expect(activity.returnThreeDayStepStreak(1)).to.eql([{
      "2019/06/15": 3577,
      "2019/06/16": 6637,
      "2019/06/17": 14329
    },
    {
      "2019/06/18": 4419,
      "2019/06/19": 8429,
      "2019/06/20": 14478
    }
    ]);
  });

  it('should return the number of times the user has climbed the equivelant of Republic Plaza', () => {
    expect(activity.republicPlazaChallenge(1)).to.equal(2);
  })

});