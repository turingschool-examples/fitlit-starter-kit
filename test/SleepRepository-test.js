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
  // For a user, how many hours slept each day over the course of a given week (7 days) - you should be able to calculate this for any week, not just the latest week
  // For a user, their sleep quality each day over the course of a given week (7 days) - you should be able to calculate this for any week, not just the latest week
  // For all users, the average sleep quality
  // Find all users who average a sleep quality greater than 3 for a given week (7 days) - you should be able to calculate this for any week, not just the latest week
  // For a given day (identified by the date), find the users who slept the most number of hours (one or more if they tied)

  it('should return a users average number of hours slept per day', () => {
    expect(sleepRepository.calculateUserAverageHoursSleptAllTime(1)).to.deep.equal(7.9);
    expect(sleepRepository.calculateUserAverageHoursSleptAllTime(2)).to.deep.equal(5.9);
  })

  it('should return a users average sleep quality per day over all time', () => {
    expect(sleepRepository.calculateUserAverageSleepQualityAllTime(1)).to.deep.equal(3.5);
    expect(sleepRepository.calculateUserAverageSleepQualityAllTime(2)).to.deep.equal(2.6);
  })

  it.skip('should return a users oz of water consumed each day over the course of a week', () => {
    expect(sleepRepository.returnOuncesByWeek(1, "2019/06/15")).to.deep.equal({
      "2019/06/15": 27,
      "2019/06/16": 75,
      "2019/06/17": 47,
      "2019/06/18": 85,
      "2019/06/19": 42,
      "2019/06/20": 87,
      "2019/06/21": 94
    });
    expect(sleepRepository.returnOuncesByWeek(2, "2019/06/16")).to.deep.equal({
      "2019/06/16": 22,
      "2019/06/17": 67,
      "2019/06/18": 62,
      "2019/06/19": 78,
      "2019/06/20": 1,
      "2019/06/21": 90,
      "2019/06/22": 28
    });
  })

})
