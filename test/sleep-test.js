const chai = require('chai');
const expect = chai.expect;

const Sleep = require('../src/Sleep-Repository');
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
    expect(sleep.returnAverageSleep(1)).to.equal(8.3);
  });

  it('should return a users average quality of sleep', () => {
    expect(sleep.returnAverageSleepQuality(1)).to.equal(2.7);
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
    expect(sleep.returnSleepQualityByWeek(3, '2019/06/22').length).to.equal(7);
  });

  it('should return the average sleep quality for all users', () => {
    expect(sleep.returnAllUsersAverageSleepQuality()).to.equal(3.1);
  })

  it('should return all users who averaged greater than 3 sleep quality for a given week', () => {
    expect(sleep.returnSleepQualityGreaterThanThree('2019/06/22')).to.eql([2, 3])
  })

  it('should return user(s) who slept the most number of hours on a given day', () => {
    expect(sleep.returnUserWithMostSleep('2019/06/22')).to.eql([1, 2])
  })

  it('should return a boolean indicating whether a user got enough sleep on a particular date', () => {
    expect(sleep.checkUserRestedByDate(1, '2019/06/22')).to.equal(true)
  })
});