const chai = require("chai");
const expect = chai.expect;

const Activity = require("../src/Activity");

describe("activity", () => {
  let activity;
  let user;
  let userRepo;

  beforeEach(() => {
    activity = new Activity(1);
  });

  it.only("should be a function", () => {
    expect(Activity).to.be.a("function");
  });

  it.only("should be an instance of Activity", () => {
    expect(activity).to.be.a.instanceOf(Activity);
  });

  it.only("should find the user's activity data", () => {
    expect(activity.findActivityData(1).length).to.equal(12);
  });

  it.only("should find the user's identity data", () => {
    expect(activity.findUserData(1)).to.eql({
      id: 1,
      name: "Luisa Hane",
      address: "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
      email: "Diana.Hayes1@hotmail.com",
      strideLength: 4.3,
      dailyStepGoal: 10000,
      friends: [2, 3, 4]
    });
  });

  it.only("should find the user's active minutes for a specified date", () => {
    expect(activity.findActiveMinutesForDay(1, "2019/06/23")).to.equal(218);
  });

  it.only("should find the user's active minutes for a specified week", () => {
    expect(activity.findActiveMinutesForWeek(1, "2019/06/23")).to.equal(174);
  });

  it.only("should let a user know when they have achieved their step goal", () => {
    expect(activity.compareNumStepsToStepGoal(1, "2019/06/23")).to.equal(
      "Great job at meeting your Daily Step Goal!"
    );
  });

  it.only("should let a user know when they have not achieved their step goal", () => {
    expect(activity.compareNumStepsToStepGoal(1, "2019/06/15")).to.equal(
      "Keep twerking hunty!"
    );
  });

  it.only("should let a user know all days they have achieved their step goal", () => {
    expect(activity.daysExceedStepGoal(1).length).to.equal(3);
  });

  it.only("should return all time stair record ", () => {
    expect(activity.allTimeStairRecord(1)).to.equal(36);
  });

  it.only("should should compare user against friends to determine step challenge winner ", () => {
    expect(activity.compareFriends("2019/06/15", 1)).to.eql({
      id: 5,
      name: "Erick Schaden",
      steps: 11374
    });

    it.only("should show a user's step streak if it is 3 days or over", () => {
      expect(activity.threeDayStepStreak(1)).to.eql([
        "2019/06/15",
        "2019/06/16",
        "2019/06/17"
      ]);
    });

    it.only("should show a user's stair climbing streak if it is 3 days or over", () => {
      expect(activity.threeDayStairStreak(1)).to.eql([
        "2019/06/18",
        "2019/06/19",
        "2019/06/20"
      ]);
    });
  });
});
