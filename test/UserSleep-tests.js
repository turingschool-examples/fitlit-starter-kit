const expect = require("chai").expect

const UserSleep = require("../src/UserSleep");
// const sleepData = require("../data/sleep");

describe("UserSleep", () => {
  let sleepyUser, sleepData;
  beforeEach(() => {
    sleepData = [
      {
        "userID": 1,
        "date": "2019/06/15",
        "hoursSlept": 6.1,
        "sleepQuality": 2.2
      },
      {
        "userID": 2,
        "date": "2019/06/15",
        "hoursSlept": 7,
        "sleepQuality": 4.7
      },
      {
        "userID": 3,
        "date": "2019/06/15",
        "hoursSlept": 10.8,
        "sleepQuality": 4.7
      },
      {
        "userID": 3,
        "date": "2019/06/16",
        "hoursSlept": 10.7,
        "sleepQuality": 3.4
      }
    ];
    sleepyUser = new UserSleep(3, sleepData);
  });
  it("Should take in a parameter for userID", () => {
    expect(sleepyUser.id).to.equal(3);
  });
  it("Should store sleep data for the user", () => {
    expect(sleepyUser.sleepData[0]).to.deep.equal({
        "userID": 3,
        "date": "2019/06/15",
        "hoursSlept": 10.8,
        "sleepQuality": 4.7
      });
  });
  it("Should calculate the average number of hours slept per day", () => {
    const avgHoursSlept = sleepyUser.calculateAvgHoursSlept();
    expect(avgHoursSlept).to.equal(10.75);
  });
  it("Should calculate how many hours they slept for a specific day (identified by a date)", () => {

  });
  it.skip("Should calculate their sleep quality for a specific day (identified by a date)", () => {

  });
  it.skip("Should calculate how many hours they slept each day over the course of any week", () => {

  });
  it.skip("Should calculate their sleep quality each day over the course of any week", () => {

  });
});
