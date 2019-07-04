const chai = require('chai');
const expect = chai.expect;
const activityData = require('../data/activity-test-data');
const activityData2 = require('../data/activity-test-data-2');
const userData1 = require('../data/user-test-data')
const UserRepository = require('../src/user-repository');
const Activity = require('../src/activity');
const ActivityRepository = require('../src/activity-repository')
console.log(userData1)


describe("Activity", () => {
  let userRepository
  let activityRepository
  let activity1
  beforeEach(function() {
    userRepository = new UserRepository(userData1)
    activityRepository = new ActivityRepository(activityData);
    activity1 = new Activity(userRepository.returnUserData(1), activityRepository.returnUserActivityData(1));

  });

  it("should be a function", () => {
    expect(Activity).to.be.a("function")

  });

  it("should be an instance", () => {
    expect(activity1).to.be.an.instanceof(Activity)
  });

  it("should return miles walked based on day", () => {
    expect(activity1.milesWalked("2019/06/15")).to.eql("2.91")
  });

  it("should, return how many average minutes active for a given week 7 days?", () => {
    userRepository2 = new UserRepository(userData1)
    activityRepository2 = new ActivityRepository(activityData2);
    activity1 = new Activity(userRepository2.returnUserData(1), activityRepository2.returnUserActivityData(1));
    expect(activity1.weeklyAverageMinActive("2019/06/15")).to.eql(171.1)
  });

  it("should return if a user has met their step goal for a given date", () => {
    userRepository2 = new UserRepository(userData1)
    activityRepository2 = new ActivityRepository(activityData2);
    activity1 = new Activity(userRepository2.returnUserData(1), activityRepository2.returnUserActivityData(1));
    expect(activity1.stepGoalMet("2019/06/15")).to.eql(false)
    expect(activity1.stepGoalMet("2019/06/20")).to.eql(true)
  });

  it("should return all days for a user that exceeded step goal", () => {
    userRepository2 = new UserRepository(userData1)
    activityRepository2 = new ActivityRepository(activityData2);
    activity1 = new Activity(userRepository2.returnUserData(1), activityRepository2.returnUserActivityData(1));
    expect(activity1.allDaysStepGoalMet()).to.eql([ '2019/06/17', '2019/06/20', '2019/06/22' ])
  });

  it.skip("should return a users all time stair climbing record", () => {
    expect(activity1.allTimeStairClimbRecord()).to.eql()
  });



});
