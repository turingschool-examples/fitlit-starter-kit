const chai = require('chai');
const expect = chai.expect;

const data1 = require('./data/activity.js');
const activityData = data1.activityData;
const Activity = require('../src/Activity.js');
const data2 = require('./data/users.js');
const userData = data2.testData;
const UserRepository = require('../src/UserRepository.js');


describe('Activity', function() {
  let activity, userRepo;
  beforeEach(function() {
    activity = new Activity(activityData);
    userRepo = new UserRepository(userData);
  });

  it('Should be a function', function() {
    expect(Activity).to.be.a('function');
  });

  it('Should be an instance of Activity', function() {
    expect(activity).to.be.an.instanceof(Activity);
  });

  it('Should be able to return the number of steps in a week', function() {
    expect(activity.getStepsByWeek(1, '2020/02/08')).to.equal(51116);
  });

  it('Should be able to return miles walked for a given day', function(){
    expect(activity.getMilesByDay(1, '2020/02/02', userRepo)).to.equal(2.3);
  });

  it('Should be able to return miles walked each day in a week', function(){
    expect(activity.getMilesByWeek(1, '2020/02/08', userRepo)).to.deep.equal([2.3, 2.6, 7.7, 6.8, 5.3, 7, 4.1]);
  });

  it('Should be able to return minutes active for a given day', function() {
    expect(activity.getMinutesByDay(1, '2020/02/02')).to.equal(14);
  });

  it('Should be able to return a weekly average of minutes active', function(){
    expect(activity.getAverageMinutesByWeek(1, '2020/02/08')).to.equal(93);
  });

  it('Should tell a user that they\'ve reached a step goal', function(){
    expect(activity.checkStepGoal(11, '2020/02/04', userRepo)).to.equal(true);
  });

  it('Should tell a user that they haven\'t reached a step goal', function(){
    expect(activity.checkStepGoal(11, '2020/02/02', userRepo)).to.equal(false);
  });

  it('Should be able to find all the days where the step goal was exceeded', function() {
    let goalDays = activityData.slice(19);
    expect(activity.getGoalDays(111, userRepo)).to.deep.equal(goalDays);
  });

  it('Should find a user\'s all-time stair climbing record', function() {
    expect(activity.getStairRecord(1)).to.equal(49);
  });

  it('Should find the average stairs climbed among all users for a given date', function() {
    expect(activity.getAverageStairsByDay('2020/02/02')).to.equal(23);
  });

  it('Should find the average steps taken among all users for a given date', function() {
    expect(activity.getAverageStepsByDay('2020/02/02')).to.equal(5194);
  });

  it('Should find the average minutes active among all users for a given date', function() {
    expect(activity.getAverageMinutesByDay('2020/02/02')).to.equal(169);
  });

  it('Should find days where the steps were increasing for three days', function() {
    let streakDays = activityData.slice(19);
    expect(activity.getStepsTrend(111)).to.deep.equal(streakDays);
  });

  it('Should find days where minutes active were increasing for three days', function() {
    let streakDays = [activityData[18]];
    expect(activity.getMinutesTrend(111)).to.deep.equal(streakDays);
  });

  it('Should be able to return an array of ids ordered by steps taken in a week', function() {
    expect(activity.challengeFriends(1, '2020/02/08', userRepo)).to.deep.equal([11, 1, 111]);
  });
});
