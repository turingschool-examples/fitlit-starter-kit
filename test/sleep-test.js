const chai = require('chai');
const expect = chai.expect;

const Sleep = require('../src/Sleep');
const sleepTestData = require('../test-data/sleep-test-data');

describe('Sleep', () => {
  let sleep;
  beforeEach(() => {
    sleep = new Sleep(sleepTestData);
  });
  
  it('should be an instance of Sleep', () => {
    expect(sleep).to.be.an.instanceOf(Sleep);
  });

  it('should return a users average amount of sleep', () => {
    expect(sleep.returnAverageSleep(1)).to.equal(5.1);
  });

  it('should return a users average quality of sleep', () => {
    expect(sleep.returnAverageSleepQuality(1)).to.equal(3);
  });

  it('should return how much a user slept on a particular day', () => {
    expect(sleep.returnAmountSlept(1, '2019/06/15')).to.equal(6.1);
  });

  it('should return the quality of sleep for a particular day', () => {
    expect(sleep.returnSleepQuality(1, '2019/06/16')).to.equal(3.8);
  })

  it('should show how much a user slept per day for a given week', () => {
    expect(sleep.returnSleepByWeek(3, '2019/06/15').length).to.equal(7);
  });

  it('should show a users quality of sleep per day for a given week', () => {
    expect(sleep.returnSleepQualityByWeek(3, '2019/06/16').length).to.equal(7);
  });

  it('should return the average sleep quality for all users', () => {
    expect(sleep.returnAllUsersAverageSleepQuality()).to.equal(3.4);
  })
});