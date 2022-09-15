import { expect } from "chai";
import User from "../src/User.js";
import UserActivity from "../src/UserActivity";
const userActivityTestData = require("../src/data/userActivityTestData");
const userData = require("../src/data/UserTestData");

describe("UserActivity", () => {
  let userActivity;
  let user;
  let userTestData;
  beforeEach(() => {
    userActivity = new UserActivity(
      userActivityTestData.filter((data) => data.userID === 1)
    );
    user = new User(userData[0]);
  });

  it("should return the miles a user has walked based on their number of steps specified by a date (using the strideLength)", () => {
    const result = userActivity.milesBasedOnSteps("2019/06/15", user);
    expect(result).to.equal(2.91);
  });
  it("should only work if data is available for date", () => {
    const result = userActivity.milesBasedOnSteps("2022/08/11", user);
    expect(result).to.equal(0);
  });
  it("should have a method to calculate how many minutes a user was active for a given date", () => {
    const result = userActivity.minutesActive("2019/06/15", user);
    expect(result).to.equal(140);
  });
  it("should only work if data is available for date", () => {
    const result = userActivity.minutesActive("2022/08/11", user);
    expect(result).to.equal(0);
  });
  it("should create a method that returns whether a user step goal was reached for a given day", () => {
    const result = userActivity.stepGoalForGivenDay("2019/06/15", user);
    expect(result).to.equal(false);
    user = new User(userData[1]);
    userActivity = new UserActivity(
      userActivityTestData.filter((data) => data.userID === 2)
    );
    const resultTwo = userActivity.stepGoalForGivenDay("2019/06/26", user);
    expect(resultTwo).to.equal(true);
  });
  it("should create a method that finds all the days where the user exceeded their step goal", () => {
    const resultTwo = userActivity.allDaysExceedingStepGoal(user);
    expect(resultTwo).to.equal("Sorry you haven't exceeded your step goal.");
    user = new User(userData[1]);
    userActivity = new UserActivity(
      userActivityTestData.filter((data) => data.userID === 2)
    );
    const result = userActivity.allDaysExceedingStepGoal(user);
    expect(result).to.equal(
      "You exceeded your step goal on 2019/06/26 by 6522 steps"
    );
  });
  it("should create a method that finds a users all-time stair climbing record", () => {
    const resultTwo = userActivity.allTimeStairClimbingRecord();
    expect(resultTwo).to.equal(28);
  });
});
