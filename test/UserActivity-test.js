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
    expect(result).to.equal("Sorry no data available for given date");
  });
  it("should have a method to calculate how many minutes a user was active for a given date", () => {
    const result = userActivity.minutesActive("2019/06/15", user);
    expect(result).to.equal(140);
  });
  it("should only work if data is available for date", () => {
    const result = userActivity.minutesActive("2022/08/11", user);
    expect(result).to.equal("Sorry no data available for given date");
  });
});
