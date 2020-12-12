const chai = require('chai');
const expect = chai.expect;
const testData = require('../data/sleep-test-data');
const testSleepData = testData.testSleepData;
const Sleep = require('../src/Sleep');
const SleepRepo = require('../src/SleepRepository');

describe('SleepRepo', () => {
  let allSleep, sleepRepo;

  beforeEach(() => {
    allSleep = testSleepData.map(sleepData => {
      const sleep = new Sleep(sleepData);
      return sleep;
    });
    sleepRepo = new SleepRepo(allSleep);
  })

  it('should be a function', () => {
    expect(SleepRepo).to.be.a('function');
  })

  it('should be an instance of SleepRepo', () => {
    expect(sleepRepo).to.be.an.instanceof(SleepRepo);
  })

  it('should hold all Sleep objects', () => {
    expect(sleepRepo.allSleep[0]).to.deep.equal(allSleep[0]);
  })

  it('should get a users sleep data given their user ID', () => {
    function getSleepTestData(id) {
      return testSleepData.filter(sleep => sleep.userID === id);
    }
    expect(sleepRepo.getSleepById(1)).to.deep.equal(getSleepTestData(1));
    expect(sleepRepo.getSleepById(2)).to.deep.equal(getSleepTestData(2));
  })

  it('should get a users avg number of hours slept per day', () => {
    expect(sleepRepo.getUserAvgHrsSleptAllTime(1)).to.equal(7.9);
    expect(sleepRepo.getUserAvgHrsSleptAllTime(2)).to.deep.equal(6.4);
  })

  it('should get a users avg sleep quality per day over all time', () => {
    expect(sleepRepo.getUserAvgSleepQualityAllTime(1)).to.equal(3.5);
    expect(sleepRepo.getUserAvgSleepQualityAllTime(2)).to.equal(2.6);
  })

  it('should get a users hours slept for a given day', () => {
    expect(sleepRepo.getUserSleepHrsByDate(1, "2019/06/18")).to.equal(5);
    expect(sleepRepo.getUserSleepHrsByDate(2, "2019/06/16")).to.equal(5.2);
  })

  it('should get a users sleep quality for a given day', () => {
    expect(sleepRepo.getUserSleepQualityByDate(1, "2019/06/18")).to.equal(1.6);
    expect(sleepRepo.getUserSleepQualityByDate(2, "2019/06/16")).to.equal(2);
  })

  it('should get a users sleep data for a given week', () => {
    expect(sleepRepo.getSleepDataByWeek(1, "2019/06/21")).to.deep.equal([{
      "userID": 1,
      "date": "2019/06/15",
      "hoursSlept": 8,
      "sleepQuality": 4.4
    },
    {
      "userID": 1,
      "date": "2019/06/16",
      "hoursSlept": 7,
      "sleepQuality": 3.2
    },
    {
      "userID": 1,
      "date": "2019/06/17",
      "hoursSlept": 6,
      "sleepQuality": 3
    },
    {
      "userID": 1,
      "date": "2019/06/18",
      "hoursSlept": 5,
      "sleepQuality": 1.6
    },
    {
      "userID": 1,
      "date": "2019/06/19",
      "hoursSlept": 9,
      "sleepQuality": 3.2
    },
    {
      "userID": 1,
      "date": "2019/06/20",
      "hoursSlept": 10,
      "sleepQuality": 4.9
    },
    {
      "userID": 1,
      "date": "2019/06/21",
      "hoursSlept": 9.5,
      "sleepQuality": 3.3
    }
    ]);

    expect(sleepRepo.getSleepDataByWeek(2, "2019/06/22")).to.deep.equal([{
      "userID": 2,
      "date": "2019/06/16",
      "hoursSlept": 5.2,
      "sleepQuality": 2
    },
    {
      "userID": 2,
      "date": "2019/06/17",
      "hoursSlept": 4.7,
      "sleepQuality": 4.3
    },
    {
      "userID": 2,
      "date": "2019/06/18",
      "hoursSlept": 10.5,
      "sleepQuality": 2.2
    },
    {
      "userID": 2,
      "date": "2019/06/19",
      "hoursSlept": 8.7,
      "sleepQuality": 1.2
    },
    {
      "userID": 2,
      "date": "2019/06/20",
      "hoursSlept": 1,
      "sleepQuality": 1.1
    },
    {
      "userID": 2,
      "date": "2019/06/21",
      "hoursSlept": 7.4,
      "sleepQuality": 4.3
    },
    {
      "userID": 2,
      "date": "2019/06/22",
      "hoursSlept": 5.9,
      "sleepQuality": 4.9
    }
    ]);
  })

  it('should get the avg sleep quality for all users', () => {
    expect(sleepRepo.getAllUsersAvgSleepQualityAllTime()).to.equal(3.0);
  })

  it.skip('should get users who avg sleep quality > 3 for a week', () => {
    expect(sleepRepo.getSleepQualityOver3("2019/06/22")).to.deep.equal(['TBD']);
  })

  it('should get users who slept the most on given day', () => {
    expect(sleepRepo.getSleptMostOnDate("2019/06/19")).to.deep.equal([1]);
    expect(sleepRepo.getSleptMostOnDate("2019/06/15")).to.deep.equal([1, 2]);
  })
})
