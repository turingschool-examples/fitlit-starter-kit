import { expect } from "chai";
import SleepSeries from "../src/SleepSeries";
const sleepTestData = require("../src/data/sleepTestData");

describe("SleepSeries", () => {
  let userSleep, emptySleepData;

  beforeEach(() => {
    userSleep = new SleepSeries(
      sleepTestData.filter((entry) => entry.userID === 1)
    );
    emptySleepData = new SleepSeries();
  });

  it("should be empty if no data is passed into the constructor", () => {
    expect(emptySleepData.data).to.deep.equal([]);
  });

  it("should have a method to return a users number of hours slept on a specific date", () => {
    expect(userSleep.getSleepDataPerDay("2019/06/15", "hoursSlept")).to.equal(
      6.1
    );
  });

  it("should have a method to return the users sleep quality on a specific date", () => {
    expect(userSleep.getSleepDataPerDay("2019/06/15", "sleepQuality")).to.equal(
      2.2
    );
  });

  it("should return undefined if the user has no average sleep data", () => {
    let averageHours = emptySleepData.getAvgSleepDataPerDay("hoursSlept");
    expect(averageHours).to.equal(undefined);
    let averageQuality = emptySleepData.getAvgSleepDataPerDay("sleepQuality");
    expect(averageQuality).to.equal(undefined);
  });

  it("should have a method to return the average number of hours slept per day for a user", () => {
    let average = userSleep.getAvgSleepDataPerDay("hoursSlept");
    expect(average).to.equal(7.9);
  });

  it("should have a method to return the average sleep quality per day for a user", () => {
    let average = userSleep.getAvgSleepDataPerDay("sleepQuality");
    expect(average).to.equal(2.7);
  });

  it("should return undefined if the user has no sleep data on a specific date", () => {
    let hoursPerDay = emptySleepData.getSleepDataPerDay(
      "2019/06/24",
      "hoursSlept"
    );
    expect(hoursPerDay).to.equal(undefined);
  });

  it("should have a method to calculate the sleep quality per day over a week for a user", () => {
    let qualitySleepInAWeek = userSleep.getSleepPerDayForWeek(
      "2019/06/22",
      "sleepQuality"
    );
    expect(qualitySleepInAWeek).to.deep.equal([
      { date: "2019/06/16", sleepQuality: 3.8 },
      { date: "2019/06/17", sleepQuality: 2.6 },
      { date: "2019/06/18", sleepQuality: 3.1 },
      { date: "2019/06/19", sleepQuality: 1.2 },
      { date: "2019/06/20", sleepQuality: 1.2 },
      { date: "2019/06/21", sleepQuality: 4.2 },
      { date: "2019/06/22", sleepQuality: 3 },
    ]);
  });

  it("should have a method to return the hours slept per day over a week for a user", () => {
    let sleepInAWeek = userSleep.getSleepPerDayForWeek(
      "2019/06/22",
      "hoursSlept"
    );

    expect(sleepInAWeek).to.deep.equal([
      { date: "2019/06/16", hoursSlept: 4.1 },
      { date: "2019/06/17", hoursSlept: 8 },
      { date: "2019/06/18", hoursSlept: 10.4 },
      { date: "2019/06/19", hoursSlept: 10.7 },
      { date: "2019/06/20", hoursSlept: 9.3 },
      { date: "2019/06/21", hoursSlept: 7.8 },
      { date: "2019/06/22", hoursSlept: 7 },
    ]);
  });

  it("should return the remaining hours slept per day over a week for a user if the user has missing sleep data on the chosen date (and/or other dates in that week) will return 0", () => {
    let sleepInAWeek = userSleep.getSleepPerDayForWeek(
      "2019/06/24",
      "hoursSlept"
    );
    expect(sleepInAWeek).to.deep.equal([
      { date: "2019/06/18", hoursSlept: 10.4 },
      { date: "2019/06/19", hoursSlept: 10.7 },
      { date: "2019/06/20", hoursSlept: 9.3 },
      { date: "2019/06/21", hoursSlept: 7.8 },
      { date: "2019/06/22", hoursSlept: 7 },
      { date: "2019/06/23", hoursSlept: 0.0 },
      { date: "2019/06/24", hoursSlept: 0.0 },
    ]);
  });
});
