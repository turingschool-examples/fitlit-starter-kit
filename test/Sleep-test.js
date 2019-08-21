const chai = require('chai');
const expect = chai.expect;

const userData = require('../data/users-test-data');
const sleepData = require('../data/sleep-test-data');
const allSleepData = require('../data/sleep');

const User = require('../src/User')
const Sleep = require('../src/Sleep');

describe('Sleep', () => {

  let user, sleep, fullSleep;
  beforeEach(() => {
    user = new User(userData[0]);
    sleep = new Sleep(sleepData, user.id);
    fullSleep = new Sleep(allSleepData, user.id)
  })

  it('should be a function', () => {
    expect(Sleep).to.be.a('function');
  })

  it('should return the average sleep hours for a single user over all time', () => {
    expect(sleep.returnAvgSleepHours()).to.equal(7.66);
  });

  it('should return the average sleep quality over all time for a single user', () => {
    expect(sleep.returnAvgSleepQuality()).to.equal(2.53);
  });

  it('should return how many hours slept for a specific day', () => {
    expect(sleep.returnSleepHours('2019/06/15')).to.equal(6.1);
  });

  it('should return sleep quality for a specific day', () => {
    expect(sleep.returnSleepQuality('2019/06/15')).to.equal(2.2);
  });

  it('should return hours slept each day for week for a specific user', () => {
    expect(fullSleep.returnWeekOfSleepHours(2)).to.eql([7.3, 5.1, 8.6, 10.5, 9.1, 6.5, 6.8]);
  });

  it('should return hours slept each day for week for a specific user', () => {
    expect(fullSleep.returnWeekOfSleepQuality(2)).to.eql([4.8, 4.7, 3.7, 1.8, 1.5, 4.2, 2]);
  });

});