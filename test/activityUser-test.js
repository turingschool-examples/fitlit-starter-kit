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

  it('should find flights of stairs climbed for a given day', () => {
    expect(activityUser.getFlightsClimbedByDay("2019/06/15")).to.equal(16);
  });

  it('should get weekly activity data', () => {
    expect(activityUser.getDailyActivityByWeek("2019/07/22")).to.deep.equal([{ userID: 1,
      date: '2019/07/15',
      numSteps: 4861,
      minutesActive: 54,
      flightsOfStairs: 49 },
    { userID: 1,
      date: '2019/07/16',
      numSteps: 3917,
      minutesActive: 188,
      flightsOfStairs: 7 },
    { userID: 1,
      date: '2019/07/17',
      numSteps: 8162,
      minutesActive: 258,
      flightsOfStairs: 8 },
    { userID: 1,
      date: '2019/07/18',
      numSteps: 6920,
      minutesActive: 190,
      flightsOfStairs: 44 },
    { userID: 1,
      date: '2019/07/19',
      numSteps: 4634,
      minutesActive: 30,
      flightsOfStairs: 12 },
    { userID: 1,
      date: '2019/07/20',
      numSteps: 12434,
      minutesActive: 211,
      flightsOfStairs: 48 },
    { userID: 1,
      date: '2019/07/21',
      numSteps: 12821,
      minutesActive: 281,
      flightsOfStairs: 28 },
    { userID: 1,
      date: '2019/07/22',
      numSteps: 14625,
      minutesActive: 268,
      flightsOfStairs: 46 }]);
  });

});
