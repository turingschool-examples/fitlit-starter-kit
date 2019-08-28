const chai = require('chai');
const expect = chai.expect;

// const User = require('../src/User');
const Activity = require('../src/Activity');
const userData = require('../data-subsets/users-subset')
const activityData = require('../data-subsets/activity-subset');
const ActivityRepository = require('../src/ActivityRepository');

describe('Activity', () => {

  let activity;
  beforeEach( () => {
    activity = new Activity(activityData);
  });

  it('should be a function', () => {
    expect(Activity).to.be.a('function');
  });

  it('should be an instance of Activity', () => {
    expect(activity).to.be.an.instanceof(Activity);
  });

  it('shoud be able to tell how many steps taken on a specific day', () =>{
    expect(activity.userStepsPerDay(1, '2019/06/15')).to.equal(3577);
  });

  it('shoud be able to tell how many miles user walked based on steps taken on a specific day', () =>{
    expect(activity.milesUserWalked(1, '2019/06/15', userData)).to.equal(2.9);
  });

  it('shoud be know how minutes a user was active, based on their id, on a specified', () =>{
    expect(activity.minsUserActive(1, '2019/06/15')).to.equal(140);
  });

  it('shoud now how many minutes active was their average for a given week', () =>{
    expect(activity.weeklyAvgMins(1, '2019/06/15')).to.equal(171.2);
  });

  it('shoud be able know if a user met their step goal for a specified day', () =>{
    expect(activity.stepGoalMet(1, '2019/06/15', userData)).to.equal(false);
  });

  it('shoud find all the days the user exceeded thier step goal', () =>{
    expect(activity.overStepGoal(1, userData)).to.deep.equal(['2019/06/17', '2019/06/20', '2019/06/22', '2019/06/23']);
  });

  it('shoud find the users all-time stair climbing record', () =>{
    expect(activity.stairClimbRecord(1)).to.equal(36);
  });
  
  it('shoud test my methods', () =>{
    expect(activity.gatherFriends('2019/06/15', 1)).to.equal(36);
  });

  it('should should compare user\'s steps against their friends', () => {
    expect(activity.compareFriends("2019/06/15", 1)).to.equal({
      id: 5,
      name: "Erick Schaden",
      steps: 11374
    });
    
  it('should tell the user how close to meeting thier step goal for the day', () => {
    expect(activity.giveUserStepsFeedback(1, '2019/06/15', userData)).to.equal('Almost there! You have 6423 steps until you have met your step goal');
  });
    
});  