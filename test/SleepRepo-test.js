const chai = require('chai');
const expect = chai.expect;

const sleepData = require('../data/sleep-test-data');

const SleepRepo = require('../src/SleepRepo');

describe('SleepRepo', () => {
  let sleepRepo;
  
  beforeEach(() => {
    sleepRepo = new SleepRepo(sleepData)

  });

  it('should be a function', () => {
    expect(SleepRepo).to.be.a('function');
  });

  it('should return the average sleep quality amongst all users', () => {
    expect(sleepRepo.returnAllSleepQuality()).to.equal(2.9);
  });

  // it('should return all users who average a sleep quality greater than 3 for a given week', () => {
  //   expect(sleepRepo.returnAboveAverageSleepers()).to.equal();
  // });

  it('should return the users that slept the most hours for a given date', () => {
    expect(sleepRepo.returnLongestSleepers("2019/06/25")).to.eql([2]);
  });
});