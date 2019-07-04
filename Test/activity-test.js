const chai = require('chai');
const expect = chai.expect;
const activityData = require('../data/activity-test-data');
// const activityData2 = require('../data/sleep-test-data-2');
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

  it.skip("should return how many minutes active for a given day, identified by ID", () => {
    expect(activity1.minutesActiveForUser("2019/06/15", 1)).to.eql(140)
  });

  it.skip("should, return how many average minutes active for a given week 7 days?", () => {
    expect(activity1.weeklyAverageMinActive("2019/06/15")).to.eql()
  });

  it.skip("should return if a user has met their step goal for a given date", () => {
    expect(activity1.stepGoalMet("2019/06/15")).to.eql(false)
  });

  it.skip("should return all days for a user that exceeded step goal", () => {
    expect(activity1.allDaysStepGoalMet()).to.eql()
  });

  it.skip("should return a users all time stair climbing record", () => {
    expect(activity1.allTimeStairClimbRecord()).to.eql()
  });





});
