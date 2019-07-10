const chai = require('chai');
const expect = chai.expect;

const Sleep = require('../src/Sleep');
const SleepRepo = require('../src/SleepRepo');
const sampleData = require('../data/sample-sleep');
const sampleSleepData = sampleData.sampleSleepData;

const UserRepo = require('../src/UserRepo');
const sampleDataUsers = require('../data/sample-users');
const sampleUserData = sampleDataUsers.sampleUserData;

describe('SleepRepo', () => {

  let sleepRepo, givenDate;
  beforeEach(() => {
    givenDate = "2019/06/22";
    sleepRepo = new SleepRepo(sampleSleepData, sampleUserData);
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
    expect(average).to.equal(3);
  });

  it('should return users who avg higher than qlty of 3 for a week, from a given date', () => {
    let bestSleepers = sleepRepo.returnAllUserQualityOverThree(givenDate);
    expect(bestSleepers).to.eql([3, 4, 5]);
  });

  it('should return the user with the highest sleep hours for a given date (or all, if tied)', () => {
    let longestSleeper = sleepRepo.returnLongestSleeperGivenDate(givenDate);
    expect(longestSleeper).to.equal('Herminia Witting');
  });

})