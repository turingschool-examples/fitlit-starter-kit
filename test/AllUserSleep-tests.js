const expect = require("chai").expect

const AllUserSleep = require("../src/AllUserSleep");

describe("AllUserSleep", () => {
  let sleepyUser1, sleepyUser2, sleepUser3, allSleepyUser
  beforeEach(() => {
    //includes 3 users with a consecutive week's worth of data (including a user whose average sleep quality > 3 and a user whose average sleep qualtiy < 3)
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
        "hoursSlept": 10.8,
        "sleepQuality": 4.7
      },
      {
        "userID": 3,
        "date": "2019/06/15",
        "hoursSlept": 10.8,
        "sleepQuality": 4.7
      },
      {
        "userID": 1,
        "date": "2019/06/30",
        "hoursSlept": 6.9,
        "sleepQuality": 2.5
      },
      {
        "userID": 2,
        "date": "2019/06/30",
        "hoursSlept": 9.5,
        "sleepQuality": 3.9
      },
      {
        "userID": 3,
        "date": "2019/06/30",
        "hoursSlept": 6.7,
        "sleepQuality": 1.1
      },
      {
        "userID": 1,
        "date": "2019/07/01",
        "hoursSlept": 2.8,
        "sleepQuality": 4.3
      },
      {
        "userID": 2,
        "date": "2019/07/01",
        "hoursSlept": 9,
        "sleepQuality": 4.7
      },
      {
        "userID": 3,
        "date": "2019/07/01",
        "hoursSlept": 8.1,
        "sleepQuality": 1.8
      },
      {
        "userID": 1,
        "date": "2019/07/02",
        "hoursSlept": 5.7,
        "sleepQuality": 1.7
      },
      {
        "userID": 2,
        "date": "2019/07/02",
        "hoursSlept": 9,
        "sleepQuality": 3.4
      },
      {
        "userID": 3,
        "date": "2019/07/02",
        "hoursSlept": 4.3,
        "sleepQuality": 3.9
      },
      {
        "userID": 1,
        "date": "2019/07/03",
        "hoursSlept": 10.1,
        "sleepQuality": 2.1
      },
      {
        "userID": 2,
        "date": "2019/07/03",
        "hoursSlept": 4.2,
        "sleepQuality": 4.7
      },
      {
        "userID": 3,
        "date": "2019/07/03",
        "hoursSlept": 9.2,
        "sleepQuality": 1.3
      },
      {
        "userID": 1,
        "date": "2019/07/04",
        "hoursSlept": 6.9,
        "sleepQuality": 2.5
      },
      {
        "userID": 2,
        "date": "2019/07/04",
        "hoursSlept": 10.6,
        "sleepQuality": 3
      },
      {
        "userID": 3,
        "date": "2019/07/04",
        "hoursSlept": 5.3,
        "sleepQuality": 4.1
      },
      {
        "userID": 1,
        "date": "2019/07/05",
        "hoursSlept": 8.8,
        "sleepQuality": 1.7
      },
      {
        "userID": 2,
        "date": "2019/07/05",
        "hoursSlept": 7.9,
        "sleepQuality": 4.2
      },
      {
        "userID": 3,
        "date": "2019/07/05",
        "hoursSlept": 6.1,
        "sleepQuality": 2.3
      },
      {
        "userID": 1,
        "date": "2019/07/06",
        "hoursSlept": 6.5,
        "sleepQuality": 1.4
      },
      {
        "userID": 2,
        "date": "2019/07/06",
        "hoursSlept": 7.7,
        "sleepQuality": 4.5
      },
      {
        "userID": 3,
        "date": "2019/07/06",
        "hoursSlept": 8.1,
        "sleepQuality": 2.8
      },
      {
        "userID": 1,
        "date": "2019/07/07",
        "hoursSlept": undefined,
        "sleepQuality": undefined
      },
      {
        "userID": 2,
        "date": "2019/07/07",
        "hoursSlept": undefined,
        "sleepQuality": undefined
      },
      {
        "userID": 3,
        "date": "2019/07/07",
        "hoursSlept": undefined,
        "sleepQuality": undefined
      }];
    allUserSleep = new AllUserSleep(sleepData);
  });
  it("Should have a parameter to take in user data", () => {
    expect(allUserSleep.sleepData).to.equal(sleepData);
  });
  it("Should calculate the average sleep quality of all users", () => {
    const avgSleep = allUserSleep.calcAvgSleepQuality(allUserSleep.sleepData, "sleepQuality");
    expect(avgSleep).to.equal(3.0625000000000004)
  });
  it("Should find all users who average a sleep quality greater than 3 for any given week", () => {
    const highSleepQuality = allUserSleep.calcAboveAvgSleepQuality("2019/06/30");
    expect(highSleepQuality).to.deep.equal([2]);
  });
  it("Should find the users (1 or more if they tied) who slept the most number of hours for a given day (identified by the date)", () => {
    const mostSleep = allUserSleep.calcMostSleep("2019/06/15");
    expect(mostSleep).to.deep.equal([2, 3])
  });
});
