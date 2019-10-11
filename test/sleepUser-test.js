const chai = require('chai');
const expect = chai.expect;
const SleepRepo = require('../src/sleepRepo');
const sleepDataSample = require('../data/sleep-sample');
const SleepUser = require('../src/sleepUser');

describe('SleepUser', () => {

  let sleepUser;
  let sleepRepo;
  let userSleepData;

  beforeEach(() => {
    sleepRepo = new SleepRepo(sleepDataSample);
    userSleepData = sleepRepo.getUserSleepData(1);
    sleepUser = new SleepUser(userSleepData);
  });

  it('should be a function', () => {
    expect(SleepUser).to.be.a('function');
  });

  it('should be an instance of UserRepo', () => {
    expect(sleepUser).to.be.an.instanceOf(SleepUser);
  });

  it('should contain the sleep data for the specified users', () => {
    expect(sleepUser.sleepData).to.deep.equal(userSleepData);
  });

  it('should calculate the users average hours sleep/day', () => {
    expect(sleepUser.calcAvgSleepPerDay('hoursSlept')).to.equal(7.92);
  });

  it('should calculate the users average sleep quality/day', () => {
    expect(sleepUser.calcAvgSleepPerDay('sleepQuality')).to.equal(2.41);
  });

  it('should calculate how many hours they slept in a day by day', () => {
    expect(sleepUser.getTimeSleptDay("2019/06/15", 'hoursSlept')).to.equal(6.1);
  });

  it('should get their quality of sleep from a particular day', () => {
    expect(sleepUser.getTimeSleptDay("2019/06/15", 'sleepQuality')).to.equal(2.2);
  });

});
