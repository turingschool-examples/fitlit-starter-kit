import { expect } from "chai";
import Activity from "../src/Activity";
import UserRepository from "../src/UserRepository";
import activityData from "../src/data/activityData";
import userData from "../src/data/users"

describe("Activity Repository", () => {
  let activity = new Activity(activityData);
  let userRepo = new UserRepository(userData)

  it('should be a instance of Activity', () => {
    expect(activity).to.be.an.instanceOf(Activity);
  });

  it("should be a function", function () {
    expect(Activity).to.be.a("function");
  });

  it("should return error message if user does not exist", function () {
    expect(activity.findUser(52)).to.equal("User does not exist");
  });

  it("should have a method that returns how many active minutes in a given day", function () {
    expect(activity.activeMinutesDay(1, "2019/06/15")).to.equal(140)
  });

  it("should have a method that finds all days where step goal was exceeded", function () {
    expect(activity.allDaysStepGoal(1)).to.deep.equal(["2019/06/17", "2019/06/20", "2019/06/22"])
  });

  it("should have a method that lists number of flights for a week", function () {
    expect(activity.activityFlightsPerWeek(1)).to.deep.equal([
      36, 18, 33, 2,
      12,  6,  6
    ])
  });

  it("should have a method that lists number of steps for a week", function () {
    expect(activity.activityStepsForWeek(1)).to.deep.equal([
      6637, 14329,
      4419,  8429,
     14478,  6760,
     10289
   ])
  });

  it("should have a method that finds step climbing record", function () {
    expect(activity.stairClimbRecord(1)).to.equal(36)
  });

//   it.skip('should do this' () => {
//     expect().to.();
//   });


});