const chai = require('chai');
const expect = chai.expect;

const sleepData = require('../data/sleep-test-data');
const allSleepData = require('../data/sleep')

const SleepRepo = require('../src/SleepRepo');

describe('SleepRepo', () => {

  let sleepRepo, fullSleepRepo;
  beforeEach(() => {
    sleepRepo = new SleepRepo(sleepData);
    fullSleepRepo = new SleepRepo(allSleepData);
  });

  it('should be a function', () => {
    expect(SleepRepo).to.be.a('function');
  });

  it('should should have access the sleep data', () => {
    expect(sleepRepo.sleepData).to.eql(sleepData);
  });

  it('should return the average sleep quality amongst all users', () => {
    expect(sleepRepo.returnAllSleepQuality()).to.equal(2.9);
  });

  it('should return all users who average a sleep quality greater than 3 for a given week', () => {
    expect(sleepRepo.returnAboveAverageSleepers(1)).to.eql([3]);
  });

  it('should return the users that slept the most hours for a given date', () => {
    expect(sleepRepo.returnLongestSleepers("2019/06/25")).to.eql([2]);
  });

  it('should return the users who got the most sleep over the last week', () => {
    expect(sleepRepo.returnWeeklyLongestSleepers(1)).to.eql(2)
  });

});