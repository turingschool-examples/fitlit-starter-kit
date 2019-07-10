const chai = require('chai');
const expect = chai.expect;

const Activity = require('../src/Activity');
const activitySub = require('../data/activitySub2');

describe("Activity", function() {
  it("should be a function", function() {
    expect(Activity).to.be.a("function");
  });

  it("should be an instance of Activity", function() {
    const activity = new Activity();
    expect(activity).to.be.an.instanceof(Activity);
  });

  it("should return the miles a user has walked", function() {
    const activity = new Activity(1);
    expect(activity.returnMilesWalked("2019/06/15")).to.equal(2.91);
  });

  it("should return steps for a given day", function() {
    const activity = new Activity(1);
    expect(activity.returnSteps("2019/06/15")).to.equal(3577);
  });

  it("should return flights of stairs climbed on a day", function() {
    const activity = new Activity(1);
    expect(activity.returnFlightsOfStairs("2019/06/15")).to.equal(16);
  });

  it("should return the minutes active on a given day", function() {
    const activity = new Activity(1);
    expect(activity.returnMinutesActive("2019/06/15")).to.equal(140);
  });

  it("should return the active minutes for a given week", function() {
    const activity = new Activity(1);
    expect(activity.returnMinutesActiveForWeek()).to.equal(125.57);
  });

  it("should let the user know if they reached their step goal on a specific day", function() {
    const activity = new Activity(1);
    expect(activity.metStepGoalForDay("2019/06/15")).to.equal(false);
  });

  it("return all days the user exceeded their step goal", function() {
    const activity = new Activity(1);
    expect(activity.daysExceededStepGoal()).to.eql(["2019/06/16", "2019/06/17"]);
  });

  it("return their all-time stair climbing record", function() {
    const activity = new Activity(1);
    expect(activity.allTimeClimbRecord()).to.eql(34);
  });

  it.only("should return an array of their friends", function() {
    const activity = new Activity(1);
    expect(activity.returnFriends("2019/06/15", "2019/06/22").length).to.eql(3);
  });

  it("should return a week of steps for a user", function() {
    const activity = new Activity(1);
    expect(activity.returnWeeklySteps("2019/06/15", "2019/06/22").length).to.eql(7);
  });

  it('should return all dates a user increased step count for 3 consecutive days', function() {
    const activity = new Activity(1);
    expect(activity.getThreeDayIncreasingSteps()).to.eql(["2019/06/22", "2019/06/26"]); 
  })

  it('should return a week of active minutes for a user', function() {
    const activity = new Activity(1);
    expect(activity.getWeeklyMins("2019/06/15", "2019/06/22").length).to.eql(3); 
  })

  it('should return a week of flights climbed for a user', function() {
    const activity = new Activity(1);
    expect(activity.getWeeklyFlights("2019/06/15", "2019/06/22").length).to.eql(3); 
  })

  it('should return total active minutes for a week', function() {
    const activity = new Activity(1);
    expect(activity.returnTotalWeeklyMinutes("2019/06/15", "2019/06/22")).to.eql(879); 
  })

});