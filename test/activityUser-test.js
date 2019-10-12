const chai = require('chai');
const expect = chai.expect;
const ActivityUser = require('../src/activityUser');
const activitySampleData = require('../data/activity-sample');
const ActivityRepo = require('../src/activityRepo');
const UserRepo = require('../src/userRepo');
const User = require('../src/user');
const usersSampleData = require('../data/users-sample');


describe('activityUser', () => {

  let activityUser;
  let activityRepo;
  let userActivityData;
  let userRepo;
  let user;
  let userData;
  let email = "Diana.Hayes1@hotmail.com";

  beforeEach(() => {
    userRepo = new UserRepo(usersSampleData);
    userData = userRepo.getUserData(email);
    user = new User(userData);
    activityRepo = new ActivityRepo(activitySampleData);
    userActivityData = activityRepo.getUserActivityData(1);
    activityUser = new ActivityUser(userActivityData, userData);
  });

  it('should be a function', () => {
    expect(ActivityUser).to.be.a('function');
  });

  it('should be an instance of UserActivity', () => {
    expect(activityUser).to.be.an.instanceOf(ActivityUser);
  });

  it('should have a single user\'s activity data', () => {
    expect(activityUser.activityData).to.deep.equal(userActivityData);
  });

  it('should know how many miles user walked on a given day', () => {
    expect(activityUser.calcMilesByDay("2019/06/15")).to.equal(3);
  });
});
