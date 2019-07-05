const chai = require("chai")
const expect = chai.expect;
const ActivityRepository = require("../src/activity-repository");
const Activity = require("../src/activity")
const activityData = require("../data/activity");
const activityTestData = activityData.filter(data => data.userID === 1 || data.userID === 2).filter(data => data.date === '2019/06/16' || data.date === '2019/06/17' || data.date === '2019/06/19' || data.date === '2019/06/18' || data.date === '2019/06/20' || data.date === '2019/06/21' || data.date === '2019/06/22' || data.date === '2019/06/23' )
const weeklyActivityTestData = activityTestData.filter(user => user.userID === 1).slice(-7);
const testActivityUserData = activityTestData.filter(user => user.userID === 1);
const userTestRepository = require("../data/users-test-data");
const UserRepository = require("../src/user-repository");
const userDataRepo = require("../data/users")
// console.log(testActivityUserData)
// const usersTestData = userTestRepository.usersTestData;
var activity, userRepository;

describe('Activity', function() {

  beforeEach(function() {
    activity = new Activity(activityTestData, 1);
    userRepository = new UserRepository(userDataRepo);
    // console.log(activity)
  });

  it('should be a function', function() {
    expect(Activity).to.be.a('function');
  });

  it('should hold on to user activity data', function() {
    expect(activity.data).to.deep.equal(testActivityUserData)
  });

  it('should return user data for a given day', function() {
    expect(activity.returnDay('2019/06/23')).to.deep.equal( {
        userID: 1,
        date: '2019/06/23',
        numSteps: 13928,
        minutesActive: 218,
        flightsOfStairs: 21
      })
  });

  it.only('should return the miles a user has walked in a day, based on their steps and stride length', function() {
    expect(activity.returnDailyMiles('2019/06/23')).to.equal(11.3)
  });

  it('should return the users activity for the day', function() {
    expect(activity.returnDailyMinutesActive('2019/06/23')).to.equal()
  });

  it('should return the weekly average of a users minutes active', function() {
    expect(activity.returnWeeklyAvgActivity('2019/06/23')).to.equal()
  });

  it('should determine if the user met their step goal for a specific day', function() {
    expect(activity.returnDailyStepGoal('2019/06/23')).to.equal()
  });

  it('should return all days the user met their step goal', function() {
    expect(activity.returnAllTimeStepGoals()).to.equal()
  });

  it('should return users highest step count', function() {
    expect(activity.returnHighestStairClimb()).to.equal()
  });

  it('should return how many times a user has climbed the empire state building (102 flors)', function() {
    expect(activity.returnEmpireCount()).to.equal()
  });

});