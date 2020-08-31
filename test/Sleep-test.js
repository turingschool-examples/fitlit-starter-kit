const chai = require("chai");
const expect = chai.expect;
const Sleep = require("../src/Sleep")

describe("Sleep", () => {
  let sleep, sampleSleepData, filterUser1, filterUser2;
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
    filterUser1 = sampleSleepData.slice(0, 7)
    filterUser2 = sampleSleepData.slice(7, 14)
    sleep = new Sleep(sampleSleepData);
    
  });
  it("should be a function", () => {
    expect(Sleep).to.be.a("function")
  });

  it("should be an instance of DailyHydration", () => {
    expect(sleep).to.be.an.instanceof(Sleep)
  });

  it("should be able to filter sleep data per user", () => {
    expect(sleep.userSleepData(1)).to.be.deep.equal(filterUser1);
  });

  it("should return another users sleep data", () => {
    expect(sleep.userSleepData(2)).to.be.deep.equal(filterUser2);
  });

  it("should return average all-time daily sleep for a user", () =>{
    expect(sleep.averageAllTimeSleep(1, 'sleepQuality')).to.be.equal(2.6)
  });

  it("should return users average number of hours slept per day", () => {
    expect(sleep.averageAllTimeSleep(1, 'hoursSlept')).to.be.deep.equal(8.1);
  });

  it("should should return sleep for a specified day", () =>{
    expect(sleep.daySleep("2019/06/16", 1).hoursSlept).to.equal(4.1)
  });

  it("should should return sleep for a specified day", () =>{
    expect(sleep.daySleep("2019/06/16", 1).sleepQuality).to.equal(3.8)
  });

  it("should return daily sleep over 7 day period", () => {
    expect(sleep.weeklySleepProperties("2019/06/15", 1).map(daySleep => daySleep.hoursSlept)).to.deep.equal(filterUser1.map(day => day.hoursSlept))
  });

  it("should return daily sleep quality over 7 day period", () => {
    sleep.userSleep = sampleSleepData;
    expect(sleep.weeklySleepProperties("2019/06/15",  2).map(daySleep => daySleep.sleepQuality)).to.deep.equal(filterUser2.map(day => day.sleepQuality))
  })

  it("should return average sleep quality for all users", () => {
    expect(sleep.averageSleepQuality()).to.be.equal(3.1)
  })

  it("should return users that average sleep quality above 3", () => {
    sleep.userSleep = sampleSleepData;
    expect(sleep.sleepQualityAboveThree("2019/06/15")).to.deep.equal([2])
  })

  it("should find the user who slept the most for a specified day", () =>{
    expect(sleep.userWhoSleptTheMost("2019/06/15", sampleSleepData)).to.equal(2)
  })

  it("should find the user who slept the least for a specified day", () =>{
    expect(sleep.userWhoSleptTheLeast("2019/06/15", sampleSleepData)).to.equal(1)
  })
});
