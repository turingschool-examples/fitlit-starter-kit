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
      sampleSleepData[9]
    ]
    sleep = new Sleep();
  });
  it("should be a function", () => {
    expect(Sleep).to.be.a("function")
  });

  it("should be an instance of DailyHydration", () => {
    expect(sleep).to.be.an.instanceof(Sleep)
  });

  it("should return users average number of hours slept per day", () => {
    sleep.userSleepData(sampleSleepData, 1)
    expect(sleep.userSleep).to.be.deep.equal(filterUser1);
  });
});