const chai = require('chai')
const expect = chai.expect

const UserActivity = require("../src/userActivity");
const User = require("../src/user");
const Users = require("../data/users");
const UserRepo = require("../src/userRepo");

describe("UserActivity", () => {
  let userActivity,
    userActivityAll,
    userRepo,
    userActivity1,
    userActivity2,
    userActivity3,
    userActivity4,
    userActivity5,
    userActivity6,
    userActivity7,
    userActivity8,
    user2Activity,
    user1,
    user2;

  beforeEach(() => {
    (userActivity1 = {
      userID: 1,
      date: "2019/06/12",
      numSteps: 3577,
      minutesActive: 70,
      flightsOfStairs: 16,
    }),
      (userActivity2 = {
        userID: 1,
        date: "2019/06/13",
        numSteps: 2500,
        minutesActive: 60,
        flightsOfStairs: 14,
      }),
      (userActivity3 = {
        userID: 1,
        date: "2019/06/14",
        numSteps: 4004,
        minutesActive: 200,
        flightsOfStairs: 12,
      }),
      (userActivity4 = {
        userID: 1,
        date: "2019/06/15",
        numSteps: 6900,
        minutesActive: 85,
        flightsOfStairs: 20,
      }),
      (userActivity5 = {
        userID: 1,
        date: "2019/06/16",
        numSteps: 4200,
        minutesActive: 69,
        flightsOfStairs: 15,
      }),
      (userActivity6 = {
        userID: 1,
        date: "2019/06/17",
        numSteps: 7070,
        minutesActive: 85,
        flightsOfStairs: 13,
      }),
      (userActivity7 = {
        userID: 1,
        date: "2019/06/18",
        numSteps: 6969,
        minutesActive: 69,
        flightsOfStairs: 17,
      }),
      (userActivity8 = {
        userID: 1,
        date: "2019/06/19",
        numSteps: 2030,
        minutesActive: 100,
        flightsOfStairs: 9,
      }),
      (user2Activity = {
        userID: 2,
        date: "2019/06/12",
        numSteps: 2040,
        minutesActive: 90,
        flightsOfStairs: 10,
      }),
      (user1 = new User({
        id: 1,
        name: "Testy User",
        address: "123 Main St, Hometown CO 80123-1234",
        email: "my.email.address@hotmail.com",
        strideLength: 4.3,
        dailyStepGoal: 3000,
      })),
      (user2 = new User({
        id: 2,
        name: "Madame Average",
    address: "17 S Alabaster Way, Ghost Town NV 86123-4321",
    email: "nopassword@email.com",
    strideLength: 3,
    dailyStepGoal: 7000,
      })),
      (userActivity = new UserActivity([
        userActivity1,
        userActivity2,
        userActivity3,
        userActivity4,
        userActivity5,
        userActivity6,
        userActivity7,
        userActivity8,
      ])),
      (userActivityAll = new UserActivity([
        userActivity1,
        userActivity2,
        userActivity3,
        userActivity4,
        userActivity5,
        userActivity6,
        userActivity7,
        userActivity8,
        user2Activity,
      ])),
      (userRepo = new UserRepo([
        user1,
        user2
      ]))
    });

  it("should be a function", () => {
    expect(UserActivity).to.be.a("function");
  });

  it("should be an instance of UserActivity", () => {
    expect(userActivity).to.be.an.instanceof(UserActivity);
  });

  it("should return the miles a user has walked", () => {
    expect(
      userActivity.calculateMilesWalked(userRepo, user1, "2019/06/12")
    ).to.equal(2.9130871212121208);
  });

  it("should return a user's active minutes for a day", () => {
    expect(userActivity.calculateActiveMinutes("2019/06/12", 1)).to.equal(70);
  });

  it("should return a user's average number of minutes for a week", () => {
    expect(userActivity.calculateAvgMinWeek("2019/06/12", 1)).to.equal(
      91.14285714285714
    );
  });

  it("should return if a user reached their step goal for a day", () => {
    expect(userActivity.isStepGoalReached(userRepo, user1, "2019/06/12")).to
      .be.true;
    expect(userActivity.isStepGoalReached(userRepo, user1, "2019/06/13")).to
      .be.false;
  });

  it("should return a list of days a user exceeded their step goal", () => {
    expect(userActivity.getDaysStepsSuccess(userRepo, user1)).to.deep.equal([
      "2019/06/12",
      "2019/06/14",
      "2019/06/15",
      "2019/06/16",
      "2019/06/17",
      "2019/06/18",
    ]);
  });

  it("should return a user's all time stair climbing record", () => {
    expect(
      userActivity.getStairRecord(1)).to.equal(20);
  });

  it("should return all users' average stairs climbed for a day", () => {
    expect(userActivityAll.calculateAllAvgStairs(userActivityAll)).to.equal(
      14);
  });

  it.skip("should return all users' who sleep well", () => {
    expect(userSleepAll.findGoodSleepers(userSleep)).to.deep.equal([1, 2]);
  });

  it.skip("should return the user or users who slept the most on a day", () => {
    expect(
      userSleepAll.findLongSleepers("2019/06/15", userSleep)
    ).to.deep.equal([2]);
  });
});
