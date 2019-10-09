const chai = require('chai');
const expect = chai.expect;

const UserSleep = require('../src/UserSleep');
const userData = require('../subset_data/users-subset')
const sleepData = require('../subset_data/sleep-subset')

describe('UserSleep', () => {

  let userSleep;
  beforeEach( () => {
    userSleep = new UserSleep(userData[0]);
  });

  it('should be a function', () => {
    expect(UserSleep).to.be.a('function');
  });

  it('should be an instance of UserSleep', () => {
    expect(userSleep).to.be.an.instanceof(UserSleep);
  });

  it('should have access to all users information', () => {
    expect(userSleep.userData).to.eql(userData[0])
  });

  it('should find a user by their id', () => {
    expect(userSleep.userSleepHoursByDate()).to.equal(1)
  })

});