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
let userRepo = new UserRepository(userDataRepo);
let stepGoal = userRepo.returnUser(1).dailyStepGoal;

let allDayGoals = testActivityUserData.reduce((acc, day) => {
    if(day.numSteps >= stepGoal) {
        acc.push(day)
    }
    return acc;
}, [])
// console.log(allDayGoals);

let activity1 = new Activity(activityTestData, 1);
let totalFlights = activity1.data.reduce((acc, day) => {
        acc += day.flightsOfStairs
    return acc;
},0)

console.log(parseFloat((totalFlights / 102).toFixed(1)))

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

  it('should return the miles a user has walked in a day, based on their steps and stride length', function() {
    expect(activity.returnDailyMiles('2019/06/23')).to.equal(11.3)
  });

  it('should return the users minutes active for the day', function() {
    expect(activity.returnDailyMinutesActive('2019/06/23')).to.equal(218)
  });

  it('should return the weekly average of a users minutes active', function() {
    expect(activity.returnWeeklyAvgActivity('2019/06/23')).to.equal(174)
  });

  it('should determine if the user met their step goal for a specific day', function() {
    expect(activity.checkDailyStepGoal('2019/06/23')).to.equal(true)
  });

  it('should return all days the user met their step goal', function() {
    expect(activity.returnDaysStepGoalMet()).to.deep.equal(allDayGoals)
  });

  it('should return users highest step count', function() {
    expect(activity.returnHighestStairClimb()).to.equal(36)
  });

  it.only('should return how many times a user has climbed the empire state building (102 flors)', function() {
    expect(activity.returnEmpireCount()).to.equal(1.3)
  });

});