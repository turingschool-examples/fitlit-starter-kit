const chai = require('chai');
const expect = chai.expect;

const UsersSleepRepo = require('../src/UsersSleepRepo');
const sleepData = require('../subset_data/sleep-subset')

describe('UsersSleepRepo', () => {

  let usersSleepRepo;
  beforeEach( () => {
    usersSleepRepo = new UsersSleepRepo(sleepData);
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

  it('should get all the users id\'s', () => {
    expect(usersSleepRepo.getAllUserIDs()).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  });

  it('should find all user\'s average sleep quality graeter than 3 for a given week', () => {
    expect(usersSleepRepo.usersSleepQualityGreaterThreeByWeek('2019/06/15')).to.eql([1, 3, 4, 6, 7, 8, 10]);
  });

  it('should find the user\'s who slept the most number of hours for a given date', () => {
    expect(usersSleepRepo.usersMostHoursSleptByDate('2019/06/18')).to.equal(2);
  });


});