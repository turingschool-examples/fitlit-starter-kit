const chai = require('chai');
const expect = chai.expect;
const sleepTestDataFile = require('../data/sleep-test-data');
const sleepTestDataArray = sleepTestDataFile.testSleep;
const Sleep = require('../src/Sleep');
const SleepRepository = require('../src/SleepRepository');

describe('SleepRepository', () => {
  let sleepData, sleepRepository;

  beforeEach(() => {
    sleepData = sleepTestDataArray.map(sleepObject => {
      const sleep = new Sleep(sleepObject);
      return sleep;
    });
    sleepRepository = new SleepRepository(sleepData);
  })

  it('should be a function', () => {
    expect(SleepRepository).to.be.a('function');
  })

  it('should be an instance of SleepRepository', () => {
    expect(sleepRepository).to.be.an.instanceof(SleepRepository);
  })

  it('should hold all Sleep objects', () => {
    expect(sleepRepository.sleepInstanceData[0]).to.deep.equal(sleepData[0]);
  })

  it('should get a users sleep data given their user ID', () => {
    function getSleepTestData(id) {
      return sleepTestDataArray.filter(sleep => sleep.userID === id);
    }
    expect(sleepRepository.getSleepData(1)).to.deep.equal(getSleepTestData(1));
    expect(sleepRepository.getSleepData(2)).to.deep.equal(getSleepTestData(2));
  })

  it('should get a users average number of hours slept per day', () => {
    expect(sleepRepository.getUserAvgHoursSleptAllTime(1)).to.equal(7.9);
    expect(sleepRepository.getUserAvgHoursSleptAllTime(2)).to.deep.equal(6.4);
  })

  it('should get a users average sleep quality per day over all time', () => {
    expect(sleepRepository.getUserAvgSleepQualityAllTime(1)).to.equal(3.5);
    expect(sleepRepository.getUserAvgSleepQualityAllTime(2)).to.equal(2.6);
  })

  it('should get a users hours they slept for a specific day', () => {
    expect(sleepRepository.getSleepHoursByDate(1, "2019/06/18")).to.equal(5);
    expect(sleepRepository.getSleepHoursByDate(2, "2019/06/16")).to.equal(5.2);
  })

  it('should get a users sleep quality for a specific day', () => {
    expect(sleepRepository.getSleepQualityByDate(1, "2019/06/18")).to.equal(1.6);
    expect(sleepRepository.getSleepQualityByDate(2, "2019/06/16")).to.equal(2);
  })

  it('should get a users sleep data for a given week', () => {
    expect(sleepRepository.getSleepDataByWeek(1, "2019/06/21")).to.deep.equal([
      {"userID": 1, "date": "2019/06/15", "hoursSlept": 8, "sleepQuality": 4.4},
      {"userID": 1, "date": "2019/06/16", "hoursSlept": 7, "sleepQuality": 3.2},
      {"userID": 1, "date": "2019/06/17", "hoursSlept": 6, "sleepQuality": 3},
      {"userID": 1, "date": "2019/06/18", "hoursSlept": 5, "sleepQuality": 1.6},
      {"userID": 1, "date": "2019/06/19", "hoursSlept": 9, "sleepQuality": 3.2},
      {"userID": 1, "date": "2019/06/20", "hoursSlept": 10, "sleepQuality": 4.9},
      {"userID": 1, "date": "2019/06/21", "hoursSlept": 9.5, "sleepQuality": 3.3}
    ]);

    expect(sleepRepository.getSleepDataByWeek(2, "2019/06/22")).to.deep.equal([
      {"userID": 2, "date": "2019/06/16", "hoursSlept": 5.2, "sleepQuality": 2},
      {"userID": 2, "date": "2019/06/17", "hoursSlept": 4.7, "sleepQuality": 4.3},
      {"userID": 2, "date": "2019/06/18", "hoursSlept": 10.5, "sleepQuality": 2.2},
      {"userID": 2, "date": "2019/06/19", "hoursSlept": 8.7, "sleepQuality": 1.2},
      {"userID": 2, "date": "2019/06/20", "hoursSlept": 1, "sleepQuality": 1.1},
      {"userID": 2, "date": "2019/06/21", "hoursSlept": 7.4, "sleepQuality": 4.3},
      {"userID": 2, "date": "2019/06/22", "hoursSlept": 5.9, "sleepQuality": 4.9}
    ]);
  })

  it('should get the average sleep quality for all users', () => {
    expect(sleepRepository.getAllUsersAvgSleepQualityAllTime()).to.equal(3.0);
  })

  it.skip('should get users who average sleep quality > 3 for a week', () => {
    expect(sleepRepository.getSleepQualityOver3("2019/06/22")).to.deep.equal([]);
  })

  it('should get users who slept the most on given day', () => {
    expect(sleepRepository.getSleptMostOnDate("2019/06/19")).to.deep.equal([1]);
    expect(sleepRepository.getSleptMostOnDate("2019/06/15")).to.deep.equal([1, 2]);
  })
})
