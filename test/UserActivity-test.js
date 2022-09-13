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

  it.only("should return the miles a user has walked based on their number of steps specified by a date", () => {
    const result = userActivity.numOfSteps("2019/06/15", user);

    expect(result).to.equal(2.91);
  });
});
