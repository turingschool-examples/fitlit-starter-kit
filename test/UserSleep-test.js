const chai = require('chai');
const expect = chai.expect;

const UserSleep = require('../src/UserSleep');
const userData = require('../subset_data/users-subset');
// const sleepData = require('../subset_data/sleep-subset');

describe('UserSleep', () => {

  let userSleep;

  beforeEach ( () => {
    userSleep = new UserSleep(userData[0]);
  });

  it('should be a function', () => {
    expect(UserSleep).to.be.a('function');
  });

  it('should be an instance of UserSleep', () => {
    expect(userSleep).to.be.an.instanceof(UserSleep);
  });

  it('should find a user by their id', () => {
    expect(userSleep.filterSleepData(1)).to.be.a('array')
  });

  it('should find all the user\'s hours slept', () => {
    expect(userSleep.filteredUserHoursSleptDay(1)).to.be.a('array')
  });

  it('should find all the user\'s quality sleep', () => {
    expect(userSleep.filteredUserSleepQuality(1)).to.be.a('array')
  });

  it('should find a user\'s average hours slept per day', () => {
    expect(userSleep.avgUserHoursSleptPerDay(1)).to.equal(8.07);
  });

  it('should find a user\'s average sleep quality of all time', () => {
    expect(userSleep.avgUserSleepQualityDateAllTime(1, '2019/06/18')).to.equal(2.75);
  });

  it('should find a user\'s hours slept for a given date', () => {
    expect(userSleep.userSleepHoursByDate(1, '2019/06/18')).to.equal(10.4);
  });

  it('should find a user\'s sleep quality for a given date', () => {
    expect(userSleep.userSleepQualityByDate(1, '2019/06/18')).to.equal(3.1);
  });

  it('should find a user\'s hours slept each day for a given week', () => {
    expect(userSleep.userDailySleepHoursByWeek()).to.eql([7, 7.8, 8, 5.1, 7.7, 9.4, 7.6]);
  });

  it('should find a user\'s sleep quality each day for a given week', () => {
    expect(userSleep.userDailySleepQualityByWeek()).to.eql([3, 1.5, 1.3, 3.7, 2.4, 4.6, 4.7]);
  });

});