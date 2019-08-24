const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User');
// const UserRepository = require('../src/UserRepository');
const Activity = require('../src/Activity');
const userData = require('../data-subsets/users-subset')
const activityData = require('../data-subsets/activity-subset');

describe('Activity', () => {

  let activity;
  beforeEach( () => {
    activity = new Activity(activityData);
    // user = new User(userData);
    // userRepository = new UserRepository(userData);
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

  it('shoud be able know if a user met thier step goal for a specified day', () =>{
    expect(activity.stepGoalMet(1, '2019/06/15', userData)).to.equal(false);
  });

  it.skip('shoud find all the days the user exceeded thier step goal', () =>{
    expect(activity.overStepGoal(id, userData)).to.equal();
  });

  it.skip('shoud find the users all-time stair climbing record', () =>{
    expect(activity.stairClimbRecord()).to.equal();
  });

});  