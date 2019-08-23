const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User');
const UserRepository = require('../src/UserRepository');
const Activity = require('../src/Activity');
const userData = require('../data-subsets/users-subset')
const ActivityData = require('../data-subsets/activity-subset');

describe('Activity', () => {

  let activity, user;

  beforeEach( () => {
    activity = new Activity(userData,ActivityData);
    user = new User(userData);
    // userRepository = new UserRepository(userData);
  });

  it('should be a function', () => {
    expect(Activity).to.be.a('function');
  });

  it('should be an instance of Activity', () => {
    expect(activity).to.be.an.instanceof(Activity);
  });

  it('shoud be able to tell how many miles user walked based on steps taken on a specific day', () =>{
    expect(activity.milesUserWalked('2019/06/15')).to.equal(2.9);
  });

  it.skip('shoud be know how minutes a user was active, based on their id, on a specified', () =>{
    expect(activity.minsUserActive('2019/06/15')).to.equal();

  });

  it.skip('shoud now how many minutes active was their average for a given week', () =>{
    expect(activity.weeklyAvgMins()).to.equal();

  });

  it.skip('shoud be able know if a user met thier step goal for a specified day', () =>{
    expect(activity.stepGoalMet('2019/06/15')).to.equal();
  });

  it.skip('shoud find all the days the user exceeded thier step goal', () =>{
    expect(activity.overStepGoal()).to.equal();
  });

  it.skip('shoud fin the users all-time stair climbing record', () =>{
    expect(activity.stairClimbRecord()).to.equal();
  });

});  