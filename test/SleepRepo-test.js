const chai = require('chai');
const expect = chai.expect;

const Sleep = require('../src/Sleep');
const SleepRepo = require('../src/SleepRepo');
const sampleData = require('../data/sample-sleep');
const sampleSleepData = sampleData.sampleSleepData;

describe('SleepRepo', () => {

  let sleepRepo, givenDate;
  beforeEach(() => {
    givenDate = "2019/06/16";
    sleepRepo = new SleepRepo(sampleSleepData);
    sleep = new Sleep(sleepRepo.returnUserData(2));
  });

  it('should be a function', () => {
    expect(SleepRepo).to.be.a('function');
  });

  it('should be an instance of SleepRepo', () => {
    expect(sleepRepo).to.be.an.instanceOf(SleepRepo);
  });

  it('should return the average sleep quality for all users', () => {
    let average = sleepRepo.returnAllUserSleepQualityAvg();
    expect(average).to.equal(2.97);
  });

  it.skip('should return all users who average higher than 3 sleep quality for a week, based on a given date', () => {
    let bestSleepers = sleepRepo.returnAllUserQualityOverThree(givenDate);
    expect(bestSleepers).to.equal([5]);
  });

  it('should return the user with the highest sleep hours for a given date (or all, if tied)', () => {
    let longestSleeper = sleepRepo.returnLongestSleeperGivenDate(givenDate)
    expect(longestSleeper.userID).to.equal(3);
  });

})