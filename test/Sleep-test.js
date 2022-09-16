import { expect } from "chai";
import Sleep from "../src/Sleep";
import sleepData from "../src/data/sample-sleep";
import User from "../src/user";

describe("Sleep", () => {
  let currentUser;
  let userSleep;

  beforeEach(() => {
    currentUser = new User(sleepData[0]);

    userSleep = new Sleep(currentUser.id, sleepData);
  });

  it("should be a function", () => {
    expect(Sleep).to.be.a("function");
  });

  it("should return sleep data that corresponds with given user id", () => {
    expect(userSleep.sleepDataPerUser).to.be.an("array");
    expect(userSleep.sleepDataPerUser).to.deep.equal([
      { userID: 1, date: "2019/06/15", hoursSlept: 6.1, sleepQuality: 2.2 },
      { userID: 1, date: "2019/06/16", hoursSlept: 4.1, sleepQuality: 3.8 },
    ]);
  });

  it("should check that given date exists in the user's data set", () => {
    expect(
      userSleep.getSleepDataByGivenDay("2018/06/15", "hoursSlept")
    ).to.equal("This date could not be found.");
  });

  it("should return sleep data for a given day", () => {
    expect(
      userSleep.getSleepDataByGivenDay("2019/06/15", "hoursSlept")
    ).to.equal(6.1);
  });

  it("should give user's average number of hours slept per day", () => {
    expect(
      userSleep.getAvgSleepData("hoursSlept", userSleep.sleepDataPerUser)
    ).to.equal(5);
  });

  it("should give number of sleep quality for given day", () => {
    expect(
      userSleep.getSleepDataByGivenDay("2019/06/15", "sleepQuality")
    ).to.equal(2.2);
  });

  it("should give user's average sleep quality per day over all time", () => {
    expect(
      userSleep.getAvgSleepData("sleepQuality", userSleep.sleepDataPerUser)
    ).to.equal(3);
  });

  it("should give overview of hours slept over a week", () => {
    const userDataForAWeek = new Sleep(1, [
      { userID: 1, date: "2019/06/15", hoursSlept: 6.1, sleepQuality: 2.2 },
      { userID: 1, date: "2019/06/16", hoursSlept: 4.1, sleepQuality: 3.8 },
      { userID: 1, date: "2019/06/17", hoursSlept: 8, sleepQuality: 2.6 },
      { userID: 1, date: "2019/06/18", hoursSlept: 10.4, sleepQuality: 3.1 },
      { userID: 1, date: "2019/06/19", hoursSlept: 10.7, sleepQuality: 1.2 },
      { userID: 1, date: "2019/06/20", hoursSlept: 9.3, sleepQuality: 1.2 },
      { userID: 1, date: "2019/06/21", hoursSlept: 7.8, sleepQuality: 4.2 },
    ]);
    expect(
      userDataForAWeek.getDailySleepByWeek(
        "hoursSlept",
        "2019/06/15",
        "2019/06/21"
      )
    ).to.deep.equal([6.1, 4.1, 8, 10.4, 10.7, 9.3, 7.8]);
  });

  it("should give overview of sleep quality over a week", () => {
    const userDataForAWeek = new Sleep(1, [
      { userID: 1, date: "2019/06/15", hoursSlept: 6.1, sleepQuality: 2.2 },
      { userID: 1, date: "2019/06/16", hoursSlept: 4.1, sleepQuality: 3.8 },
      { userID: 1, date: "2019/06/17", hoursSlept: 8, sleepQuality: 2.6 },
      { userID: 1, date: "2019/06/18", hoursSlept: 10.4, sleepQuality: 3.1 },
      { userID: 1, date: "2019/06/19", hoursSlept: 10.7, sleepQuality: 1.2 },
      { userID: 1, date: "2019/06/20", hoursSlept: 9.3, sleepQuality: 1.2 },
      { userID: 1, date: "2019/06/21", hoursSlept: 7.8, sleepQuality: 4.2 },
    ]);
    expect(
      userDataForAWeek.getDailySleepByWeek(
        "sleepQuality",
        "2019/06/15",
        "2019/06/21"
      )
    ).to.deep.equal([2.2, 3.8, 2.6, 3.1, 1.2, 1.2, 4.2]);
  });

  it("should give average sleep quality for all users", () => {
    expect(userSleep.getAvgSleepData("sleepQuality", false)).to.equal(4);
  });

  it("should check that dates exists", () => {
    expect(
      userSleep.getDailySleepByWeek("sleepQuality", "2019/06/15", "2019/06/21")
    ).to.equal("These days do not exist. Please change your selection.");
  });
});
