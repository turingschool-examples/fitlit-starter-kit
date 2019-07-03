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
});