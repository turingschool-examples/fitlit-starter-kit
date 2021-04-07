const expect = require("chai").expect

const UserSleep = require("../src/UserSleep");

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
      },
      {
        "userID": 3,
        "date": "2019/07/04",
        "hoursSlept": 5.3,
        "sleepQuality": 4.1
      },
      {
        "userID": 3,
        "date": "2019/07/05",
        "hoursSlept": 6.1,
        "sleepQuality": 2.3
      },
      {
        "userID": 3,
        "date": "2019/07/06",
        "hoursSlept": 8.1,
        "sleepQuality": 2.8
      },
    {
        "userID": 3,
        "date": "2019/07/07",
        "hoursSlept": 9.2,
        "sleepQuality": 3.5
      },
      {
        "userID": 3,
        "date": "2019/07/08",
        "hoursSlept": 5.8,
        "sleepQuality": 3.1
      },
      {
        "userID": 3,
        "date": "2019/07/09",
        "hoursSlept": 10.6,
        "sleepQuality": 4.4
      },
      {
        "userID": 3,
        "date": "2019/07/10",
        "hoursSlept": 7.3,
        "sleepQuality": 4.5
      },
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
  it("should find the most recent day with data", () => {
    const recentDayData = sleepyUser.mostRecentDayData();
    expect(recentDayData).to.deep.equal({"userID": 3, "date": "2019/07/10", "hoursSlept": 7.3, "sleepQuality": 4.5});
  });
  it("Should calculate the average number of hours slept per day", () => {
    const avgHoursSlept = sleepyUser.calcAvgSleep("hoursSlept");
    expect(avgHoursSlept).to.equal(8.21111111111111);
  });
  it("Should calculate the average sleep quality per day over all time", () => {
    const avgSleepQuality = sleepyUser.calcAvgSleep("sleepQuality")
    expect(avgSleepQuality).to.equal(3.644444444444445);
  });
  it("Should calculate how many hours they slept for a specific day (identified by a date)", () => {
    const hoursSleptOnDate1 = sleepyUser.calcByDate("2019/07/04", "hoursSlept");
    expect(hoursSleptOnDate1).to.equal(5.3);
    const hoursSleptOnDate2 = sleepyUser.calcByDate("2021/04/06", "hoursSlept");
    expect(hoursSleptOnDate2).to.equal(undefined);
  });
  it("Should calculate their sleep quality for a specific day (identified by a date)", () => {
    const hoursSleptOnDate = sleepyUser.calcByDate("2019/07/04", "sleepQuality");
    expect(hoursSleptOnDate).to.equal(4.1);
  });
  it("Should calculate how many hours they slept each day over the course of any week", () => {
    const sleepOverWeek = sleepyUser.calcOverWeek("2019/07/10", "hoursSlept");
    expect(sleepOverWeek).to.deep.equal([
      { '2019/07/04': 5.3 }, { '2019/07/05': 6.1 }, { '2019/07/06': 8.1 }, { '2019/07/07': 9.2 }, { '2019/07/08': 5.8 }, { '2019/07/09': 10.6 }, { '2019/07/10': 7.3 }
    ]);
  });
  it("Should calculate their sleep quality each day over the course of any week", () => {
    const sleepQualityOverWeek1 = sleepyUser.calcOverWeek("2019/07/10", "sleepQuality");
    expect(sleepQualityOverWeek1).to.deep.equal([
      { '2019/07/04': 4.1 }, { '2019/07/05': 2.3 }, { '2019/07/06': 2.8 }, { '2019/07/07': 3.5 }, { '2019/07/08': 3.1 }, { '2019/07/09': 4.4 }, { '2019/07/10': 4.5 }
    ]);
    // const sleepQualityOverWeek2 = sleepyUser.calcOverWeek("2019/06/16", "sleepQuality");
    // expect(sleepQualityOverWeek2).to.deep.equal([
    //   { '2019/06/10': undefined }, { '2019/06/11': undefined }, { '2019/06/12': undefined }, { '2019/06/13': undefined }, { '2019/06/14': undefined }, { '2019/06/15': 4.7 }, { '2019/06/16': 3.4 }
    // ]);
  });
});
