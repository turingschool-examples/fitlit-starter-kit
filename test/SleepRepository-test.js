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

  it('should return a users sleep data given their user ID', () => {
    function returnSleepTestData(id) {
      return sleepTestDataArray.filter(sleep => sleep.userID === id);
    }
    expect(sleepRepository.returnSleepData(1)).to.deep.equal(returnSleepTestData(1));
    expect(sleepRepository.returnSleepData(2)).to.deep.equal(returnSleepTestData(2));
  })

  // For a user (identified by their userID), the average number of hours slept per day
  // For a user, their average sleep quality per day over all time
  // For a user, how many hours they slept for a specific day (identified by a date)
  // For a user, their sleep quality for a specific day (identified by a date)

  it('should return a users average number of hours slept per day', () => {
    expect(sleepRepository.calculateUserAverageHoursSleptAllTime(1)).to.equal(7.9);
    expect(sleepRepository.calculateUserAverageHoursSleptAllTime(2)).to.deep.equal(5.9);
  })

  it('should return a users average sleep quality per day over all time', () => {
    expect(sleepRepository.calculateUserAverageSleepQualityAllTime(1)).to.equal(3.5);
    expect(sleepRepository.calculateUserAverageSleepQualityAllTime(2)).to.equal(2.6);
  })

  it('should return a users hours they slept for a specific day', () => {
    expect(sleepRepository.returnSleepHoursByDate(1, "2019/06/18")).to.equal(5);
    expect(sleepRepository.returnSleepHoursByDate(2, "2019/06/16")).to.equal(5.2);
  })

  it('should return a users sleep quality for a specific day', () => {
    expect(sleepRepository.returnSleepQualityByDate(1, "2019/06/18")).to.equal(1.6);
    expect(sleepRepository.returnSleepQualityByDate(2, "2019/06/16")).to.equal(2);
  })

  // For a user, how many hours slept each day over the course of a given week (7 days) - you should be able to calculate this for any week, not just the latest week
  // For a user, their sleep quality each day over the course of a given week (7 days) - you should be able to calculate this for any week, not just the latest week
  // For all users, the average sleep quality


  // Find all users who average a sleep quality greater than 3 for a given week (7 days) - you should be able to calculate this for any week, not just the latest week
  // For a given day (identified by the date), find the users who slept the most number of hours (one or more if they tied)

  it.skip('should return a users hours slept each night over the course of a week', () => {
    expect(sleepRepository.returnNightlyHoursSleptByWeek(1, "2019/06/15")).to.deep.equal({
      "2019/06/15": 8,
      "2019/06/16": 7,
      "2019/06/17": 6,
      "2019/06/18": 5,
      "2019/06/19": 9,
      "2019/06/20": 10,
      "2019/06/21": 9.5
      });

    expect(sleepRepository.returnNightlyHoursSleptByWeek(2, "2019/06/16")).to.deep.equal({
      "2019/06/16": 5.2,
      "2019/06/17": 4.7,
      "2019/06/18": 10.5,
      "2019/06/19": 8.7,
      "2019/06/20": 1,
      "2019/06/21": 7.4,
      "2019/06/22": 5.9
    });
  })

  it.skip('should return a users sleep quality each night over the course of a week', () => {
    expect(sleepRepository.returnNightlySleepQualityByWeek(1, "2019/06/15")).to.deep.equal({
      "2019/06/15": 4.4,
      "2019/06/16": 3.2,
      "2019/06/17": 3,
      "2019/06/18": 1.6,
      "2019/06/19": 3.2,
      "2019/06/20": 4.9,
      "2019/06/21": 3.3
    });

    expect(sleepRepository.returnNightlySleepQualityByWeek(2, "2019/06/16")).to.deep.equal({
      "2019/06/16": 2,
      "2019/06/17": 4.3,
      "2019/06/18": 2.2,
      "2019/06/19": 1.2,
      "2019/06/20": 1.1,
      "2019/06/21": 4.3,
      "2019/06/22": 4.9
    });
  })

  it('should return the average sleep quality for all users', () => {
    expect(sleepRepository.calculateAllUsersAverageSleepQualityAllTime().to.equal(3.1))
  });

  it('should return users who average sleep quality more than 3 for a week', () => {
    expect(sleepRepository.calculateUsersWithSleepQualityGreaterThan3().to.equal())
  });

  it('should return users who slept the most number of hours on given day', () => {
    expect(sleepRepository.returnUsersWhoSleptMostOnDate().to.equal())
  });
})
