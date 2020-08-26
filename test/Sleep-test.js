const chai = require("chai");
const expect = chai.expect;
const Sleep = require("../src/Sleep")

describe("Sleep", () => {
  let sleep, sampleSleepData, filterUser1, filterUser2, user1Data, weeklyData, multipleUserData;
  beforeEach(() => {
    sampleSleepData =
    [
      {
        "userID": 1,
        "date": "2019/06/15",
        "hoursSlept": 6.1,
        "sleepQuality": 2.2
      },
      {
        "userID": 1,
        "date": "2019/06/16",
        "hoursSlept": 4.1,
        "sleepQuality": 3.8
      },
      {
        "userID": 1,
        "date": "2019/06/17",
        "hoursSlept": 8,
        "sleepQuality": 2.6
      },
      {
        "userID": 1,
        "date": "2019/06/18",
        "hoursSlept": 10.4,
        "sleepQuality": 3.1
      },
      {
        "userID": 1,
        "date": "2019/06/19",
        "hoursSlept": 10.7,
        "sleepQuality": 1.2
      },
      {
        "userID": 1,
        "date": "2019/06/20",
        "hoursSlept": 9.3,
        "sleepQuality": 1.2
      },
      {
        "userID": 1,
        "date": "2019/06/21",
        "hoursSlept": 7.8,
        "sleepQuality": 4.2
      },
      {
        "userID": 2,
        "date": "2019/06/15",
        "hoursSlept": 7,
        "sleepQuality": 4.7
      },
      {
        "userID": 2,
        "date": "2019/06/16",
        "hoursSlept": 7.5,
        "sleepQuality": 3.8
      },
      {
        "userID": 2,
        "date": "2019/06/17",
        "hoursSlept": 5.7,
        "sleepQuality": 3
      },
      {
        "userID": 2,
        "date": "2019/06/18",
        "hoursSlept": 10.8,
        "sleepQuality": 3.2
      },
      {
        "userID": 2,
        "date": "2019/06/19",
        "hoursSlept": 9.6,
        "sleepQuality": 2.5
      },
      {
        "userID": 2,
        "date": "2019/06/20",
        "hoursSlept": 10.1,
        "sleepQuality": 2.4
      },
      {
        "userID": 2,
        "date": "2019/06/21",
        "hoursSlept": 4.3,
        "sleepQuality": 4.8
      },
    ]
    filterUser1 = [
      sampleSleepData[0],
      sampleSleepData[1],
      sampleSleepData[2],
      sampleSleepData[3],
      sampleSleepData[4],
      sampleSleepData[5],
      sampleSleepData[6],
    ]
    filterUser2 = [
      sampleSleepData[7],
      sampleSleepData[8],
      sampleSleepData[9],
      sampleSleepData[10],
      sampleSleepData[11],
      sampleSleepData[12],
      sampleSleepData[13],
    ]
    hoursSlept = [
      sampleSleepData[0].hoursSlept,
      sampleSleepData[1].hoursSlept,
      sampleSleepData[2].hoursSlept,
      sampleSleepData[3].hoursSlept,
      sampleSleepData[4].hoursSlept,
      sampleSleepData[5].hoursSlept,
      sampleSleepData[6].hoursSlept
    ]
    sleepQuality = [
      sampleSleepData[0].sleepQuality,
      sampleSleepData[1].sleepQuality,
      sampleSleepData[2].sleepQuality,
      sampleSleepData[3].sleepQuality,
      sampleSleepData[4].sleepQuality,
      sampleSleepData[5].sleepQuality,
      sampleSleepData[6].sleepQuality
    ]
    sleepQuality = [
      sampleSleepData[7].sleepQuality,
      sampleSleepData[8].sleepQuality,
      sampleSleepData[9].sleepQuality,
      sampleSleepData[10].sleepQuality,
      sampleSleepData[11].sleepQuality,
      sampleSleepData[12].sleepQuality,
      sampleSleepData[13].sleepQuality
    ]
    sleep = new Sleep(sampleSleepData);
  });
  it("should be a function", () => {
    expect(Sleep).to.be.a("function")
  });

  it("should be an instance of DailyHydration", () => {
    expect(sleep).to.be.an.instanceof(Sleep)
  });

  it("should return users average number of hours slept per day", () => {
    expect(sleep.userSleepData(1)).to.be.deep.equal(filterUser1);
  });

  it("should return another users average number of hours slept per day", () => {
    expect(sleep.userSleepData(2)).to.be.deep.equal(filterUser2);
  });

  it("should return average all-time daily sleep for a user", () =>{
    expect(sleep.averageAllTimeSleep(1)).to.be.equal(2.6)
  });

  it("should should return sleep for a specified day", () =>{
    expect(sleep.daySleep("2019/06/16", 1)).to.equal(4.1)
  });

  it("should return daily sleep over 7 day period", () => {
    expect(sleep.weeklySleepProperties("2019/06/15", 1, 'hoursSlept')).to.deep.equal(hoursSlept)
  });

  it("should return daily sleep quality over 7 day period", () => {
    sleep.userSleep = sampleSleepData;
    expect(sleep.weeklySleepProperties("2019/06/15",  2, 'sleepQuality')).to.deep.equal(sleepQuality)
  })

  it("should return average sleep quality for all users", () => {
    expect(sleep.averageSleepQuality()).to.be.equal(3.1)
  })

  it("should return users that average sleep quality above 3", () => {
    sleep.userSleep = sampleSleepData;
    expect(sleep.sleepQualityAboveThree("2019/06/15")).to.deep.equal([2])
  })

  // it("should find the user who slept the most for a specified day", () =>{
  //   expect(sleep.userWhoSleptTheMost("2019/06/15", sampleSleepData)).to.deep.equal(7)
  // })

});
