import { expect } from "chai";
import Sleep from "../src/Sleep";
import sleepData from "../src/data/sample-sleep";

describe("Sleep", () => {
  let user1;
  let user2;

  beforeEach(() => {
    user1 = new Sleep(1, sleepData);
    user2 = new Sleep(2, sleepData);
  });

  it("should be a function", () => {
    expect(Sleep).to.be.a("function");
  });

  it("should return sleep data that corresponds with given user id", () => {
    expect(user2.sleepDataPerUser).to.be.an("array");
    expect(user2.sleepDataPerUser).to.deep.equal([
      {
        userID: 2,
        date: "2019/06/15",
        hoursSlept: 7,
        sleepQuality: 4.7,
      },
    ]);
  });

  it("should check that given date exists in the user's data set", () => {
    expect(user1.getSleepDataByGivenDay("2018/06/15", "hoursSlept")).to.equal(
      "This date could not be found."
    );
  });

  it("should return sleep data for a given day", () => {
    expect(user1.getSleepDataByGivenDay("2019/06/15", "hoursSlept")).to.equal(
      6.1
    );
  });

  it("should give user's average number of hours slept per day", () => {
    expect(user1.getAvgSleepData("hoursSlept", true)).to.equal(8);
  });

  it("should give number of sleep quality for given day", () => {
    expect(user1.getSleepDataByGivenDay("2019/06/15", "sleepQuality")).to.equal(
      2.2
    );
  });

  it("should give user's average sleep quality per day over all time", () => {
    expect(user1.getAvgSleepData("sleepQuality", false)).to.equal(3);
  });

  it("should give overview of hours slept over a week", () => {
    expect(user1.getDailySleepByWeek("hoursSlept", "2019/06/15")).to.deep.equal(
      [6.1, 4.1, 8, 10.4, 10.7, 9.3, 7.8]
    );
  });

  it("should give overview of sleep quality over a week", () => {
    expect(
      user1.getDailySleepByWeek("sleepQuality", "2019/06/15")
    ).to.deep.equal([2.2, 3.8, 2.6, 3.1, 1.2, 1.2, 4.2]);
  });

  it("should give average sleep quality for all users", () => {
    expect(user1.getAvgSleepData("sleepQuality", false)).to.equal(3);
  });

  it("should check that dates exists", () => {
    expect(user1.getDailySleepByWeek("sleepQuality", "2018/06/15")).to.equal(
      "These days do not exist. Please change your selection."
    );
  });
});
