const chai = require('chai');
const expect = chai.expect;

const UserSleep = require('../src/UserSleep');
const userData = require('../subset_data/users-subset');
const sleepData = require('../subset_data/sleep-subset');

describe('UserSleep', () => {

  // let userSleep;

  // beforeEach ( () => {
  //   userSleep = new UserSleep(sleepData);
  // });

  it('should be a function', () => {
    expect(UserSleep).to.be.a('function');
  });

  it('should be an instance of UserSleep', () => {
    const userSleep = new UserSleep(userData[0]);
    expect(userSleep).to.be.an.instanceof(UserSleep);
  });

  it('should find a user by their id', () => {
    const userSleep = new UserSleep(userData[0]);
    expect(userSleep.filterSleepData(1)).to.be.a('array')
  });

  it('should find all the user\'s hours slept', () => {
    const userSleep = new UserSleep(userData[0]);
    expect(userSleep.filteredUserHoursSleptDay(1)).to.be.a('array')
  });

  it('should find all the user\'s quality sleep', () => {
    const userSleep = new UserSleep(userData[0]);
    expect(userSleep.filteredUserSleepQuality(1)).to.be.a('array')
  });

  it('should find a user\'s average hours slept per day', () => {
    const userSleep = new UserSleep(userData[0]);
    expect(userSleep.avgUserHoursSleptPerDay(1)).to.equal(8.1);
  });

  it('should find a user\'s average sleep quality of all time', () => {
    const userSleep = new UserSleep(userData[0]);
    expect(userSleep.avgUserSleepQualityDateAllTime(1, '2019/06/18')).to.equal(2.7);
  });

  it.skip('should find a user\'s hours slept for a given date', () => {
    const userSleep = new UserSleep(userData[0]);
    expect(userSleep.userSleepHoursByDate(1, '2019/06/18')).to.equal(10.4);
  });

  it.skip('should find a user\'s sleep quality for a given date', () => {
    const userSleep = new UserSleep(userData[0]);
    expect(userSleep.userSleepQualityByDate()).to.equal();
  });

  it.skip('should find a user\'s hours slept each day for a given week', () => {
    const userSleep = new UserSleep(userData[0]);
    expect(userSleep.userDailySleepHoursByWeek()).to.eql();
  });

  it.skip('should find a user\'s sleep quality each day for a given week', () => {
    const userSleep = new UserSleep(userData[0]);
    expect(userSleep.userDailySleepQualityByWeek()).to.eql();
  });

  

  

});