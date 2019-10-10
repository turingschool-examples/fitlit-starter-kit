const chai = require('chai');
const expect = chai.expect;

const UsersSleepRepo = require('../src/UsersSleepRepo');
const userData = require('../subset_data/users-subset')
const sleepData = require('../subset_data/sleep-subset')

describe('UsersSleepRepo', () => {

  let usersSleepRepo;
  beforeEach( () => {
    usersSleepRepo = new UsersSleepRepo(userData, sleepData);
  });

  it('should be a function', () => {
    expect(UsersSleepRepo).to.be.a('function');
  });

  it('should be an instance of the sleep repository', () => {
    expect(usersSleepRepo).to.be.an.instanceof(UsersSleepRepo);
  });

  it('should find all user\'s average sleep quality', () => {
    expect(usersSleepRepo.avgUsersSleepQualityAllTime()).to.equal(7.36);
  });

  it.skip('should find all user\'s average sleep quality graeter than 3 for a given week', () => {
    expect(usersSleepRepo.usersSleepQualityGreaterThreeByWeek()).to.equal();
  });

  it.skip('should find the user\'s who slept the most number of hours for a given date', () => {
    expect(usersSleepRepo.usersMostHoursSleptByDate()).to.equal();
  });


});