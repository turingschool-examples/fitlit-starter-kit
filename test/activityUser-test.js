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
    activityUser = new ActivityUser(userActivityData);
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
    expect(activityUser.calcMilesByDay("2019/06/15", user.strideLength)).to.equal(3);
  });

  it('should get minutes active for user on a given day', () => {
    expect(activityUser.getMinutesActiveByDay("2019/06/15")).to.equal(140);
  });

  it('should calculate avg minutes active per week', () => {
    expect(activityUser.calcAvgMinutesByWeek("2019/07/03")).to.equal(117);
  });

  it('should calculate if the user reached their step goal on a given day', () => {
    expect(activityUser.evalReachStepGoal("2019/07/03", user.dailyStepGoal)).to.equal(false);
  });

  it('should find all days user step goal was exceeded', () => {
    expect(activityUser.getDaysBeatStepGoal(user.dailyStepGoal)).to.deep.equal([ '2019/06/17',
    '2019/06/20',
    '2019/06/22',
    '2019/06/23',
    '2019/06/28',
    '2019/06/30',
    '2019/07/05',
    '2019/07/07',
    '2019/07/08',
    '2019/07/09',
    '2019/07/14',
    '2019/07/20',
    '2019/07/21',
    '2019/07/22',
    '2019/07/26',
    '2019/07/31',
    '2019/08/01',
    '2019/08/08',
    '2019/08/10',
    '2019/08/15',
    '2019/08/17' ]);
  });

  it('should find their all time stair climbing record', () => {
    expect(activityUser.getStairClimbingRecord()).to.equal(49);
  });  

  it('should find their all time minutes active record', () => {
    expect(activityUser.getMinutesActiveRecord()).to.equal(296);
  });  

  it('should find number of steps for a given day', () => {
    expect(activityUser.getNumStepsByDay("2019/06/15")).to.equal(3577);
  });  

});
