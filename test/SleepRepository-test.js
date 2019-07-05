const chai = require('chai');
const expect = chai.expect;


const SleepRepository = require('../src/SleepRepository');
const sleepData = require('../test-data/sleep-fixtures');

describe('SleepRepository', function() {

  it('should be a function', function() {
    const sleepRepository = new SleepRepository();
    expect(SleepRepository).to.be.a('function');
  });

  it('should store user information', function() {
    const sleepRepository = new SleepRepository(sleepData);
    expect(sleepData).to.be.a('array')
  });

  it('should be able to calculate the average sleep quality of all users', function() {
    const sleepRepository = new SleepRepository(sleepData);
    expect(sleepRepository.calculateAverageUsersSleepQuality()).to.equal(3.7);
  });

  it('should be able to provide the users who slept the most hours for a given date', function() {
    const sleepRepository = new SleepRepository(sleepData);
    expect(sleepRepository.displayHeaviestSleeper("2019/06/15")).to.equal("Herminia Witting");
  });
});