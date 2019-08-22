const chai = require('chai');
const expect = chai.expect;

const Activity = require('../src/Activity-Repository');
const activityTestData = require('../test-data/activity-test-data');
const userTestData = require('../test-data/user-test-data.js')

describe('Activity', () => {
  let activity;
  beforeEach(() => {
    activity = new Activity(activityTestData, userTestData);
  });

  it('should be a function', function () {
    expect(Activity).to.be.a('function');
  });

  it('should calculate stairs climbed for all users', function () {
    expect(activity.returnStairsClimbedAllUsersByDate('2019/06/15')).to.equal(59);
  });

  it('should return how many minutes active a specified user was on a specific date', () => {
    expect(activity.returnActiveMinutesByDate(2, '2019/06/16')).to.equal(220);
  })

  it('should return a boolean based on whether a user achieved their step goal an a specific day', () => {
    expect(activity.returnStepGoalMetByDate(3, '2019/06/15')).to.equal(true);
  })

  it('should return for a specific user their all time stair climbing record', () => {
    expect(activity.returnStairClimbingRecord(2)).to.equal(44)
  })



});