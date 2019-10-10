const chai = require('chai');
const expect = chai.expect;

const UsersSleepRepo = require('../src/UsersSleepRepo');
const userData = require('../subset_data/users-subset')
const sleepData = require('../subset_data/sleep-subset')

describe('UsersSleepRepo', () => {

  let usersSleepRepo;
  beforeEach( () => {
    usersSleepRepo = new UsersSleepRepo(userData);
  });

  it('should be a function', () => {
    expect(UsersSleepRepo).to.be.a('function');
  });

  it('should be an instance of the sleep repository', () => {
    expect(usersSleepRepo).to.be.an.instanceof(UsersSleepRepo);
  });

  it.skip('should find all user\'s average sleep quality', () => {
    expect(UsersSleepRepo.avgUsersSleepQualityAllTime()).to.equal();
  });

  it.skip('should find all user\'s average sleep quality graeter than 3 for a given week', () => {
    expect(UsersSleepRepo.usersSleepQualityGreaterThreeByWeek()).to.equal();
  });

  it.skip('should find the user\'s who slept the most number of hours for a given date', () => {
    expect(UsersSleepRepo.usersMostHoursSleptByDate()).to.equal();
  });


});