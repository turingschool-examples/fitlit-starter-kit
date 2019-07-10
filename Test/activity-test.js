const chai = require('chai');
const expect = chai.expect;
const activityData = require('../data/activity-test-data');
const activityData2 = require('../data/activity-test-data-2');
const userData1 = require('../data/user-test-data')
const UserRepository = require('../src/user-repository');
const Activity = require('../src/activity');
const ActivityRepository = require('../src/activity-repository')


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

  it("should return how many average minutes active for a given week 7 days?", () => {
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

  it("should return a users all time stair climbing record", () => {
    expect(activity1.allTimeStairClimbRecord()).to.eql(36)
  });

  it("should return the user's number of steps for the latest day", () => {
    expect(activity1.returnNumOfStepsForDate("2019/06/15")).to.eql(3577)
  });

  it("should return the user's flights of stairs climbed for the latest day", () => {
    expect(activity1.returnFlightsClimbedForDate("2019/06/15")).to.eql(16)
  });

  it("should return a weekly view of their step count", () => {
    userRepository2 = new UserRepository(userData1)
    activityRepository2 = new ActivityRepository(activityData2);
    activity1 = new Activity(userRepository2.returnUserData(1), activityRepository2.returnUserActivityData(1));
    expect(activity1.returnWeekViewOfSteps("2019/06/15")).to.eql([3577, 6637, 14329, 4419, 8429, 14478, 6760])
  });

  it("should return a weekly view of flights of stairs climbed", () => {
    userRepository2 = new UserRepository(userData1)
    activityRepository2 = new ActivityRepository(activityData2);
    activity1 = new Activity(userRepository2.returnUserData(1), activityRepository2.returnUserActivityData(1));
    expect(activity1.returnWeekViewOfFlightsClimbed("2019/06/15")).to.eql([16, 36, 18, 33, 2, 12, 6])
  });

  it("should return a weekly view of minutes active", () => {
    userRepository2 = new UserRepository(userData1)
    activityRepository2 = new ActivityRepository(activityData2);
    activity1 = new Activity(userRepository2.returnUserData(1), activityRepository2.returnUserActivityData(1));
    expect(activity1.returnWeekViewOfMinsActive("2019/06/15")).to.eql([140, 175, 168, 165, 275, 140, 135])
  });

  it("should return percentage of the US walked", () => {
    expect(activity1.milesWalkedUS()).to.eql(0.31)
  })

});
