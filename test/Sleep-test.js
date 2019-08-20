const chai = require('chai');
const expect = chai.expect;

const userData = require('../data/users-test-data');
const sleepData = require('../data/sleep-test-data');

const User = require('../src/User')
const Sleep = require('../src/Sleep');

describe('Sleep', () => {

  let user, sleep;
  beforeEach(() => {
    user = new User(userData[0]);
    sleep = new Sleep(sleepData, user.id);
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
    expect(sleep.returnWeekOfSleepHours(2)).to.eql([ 6.1, 4.1, 8, 10.4, 10.7, 9.3, 7.8 ]);
  });

  it('should return hours slept each day for week for a specific user', () => {
    expect(sleep.returnWeekOfSleepQuality(2)).to.eql([ 2.2, 3.8, 2.6, 3.1, 1.2, 1.2, 4.2]);
  });

});