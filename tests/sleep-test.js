const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User');
const UserRepository = require('../src/users-repository');
const userData  = require('../data/test-data');
const users = userData;
const Sleep = require('../src/Sleep');
const SleepRepository = require('../src/sleep-repository');
const sleepData  = require('../data/test-data-sleep');

describe('Sleep', function() {
  let userRepo;
  let user1;
  let sleepRepo;
  let sleep1;

  beforeEach(() => {
    userRepo = new UserRepository(users);
    user1 = new User(userRepo.users[1]);
    sleepRepo = new SleepRepository(sleepData);
    sleep1 = new Sleep(sleepRepo.getUserSleepInfo(1));
  });

  it('should be a function', function() {
    expect(Sleep).to.be.a('function');
  });

  it('should get avg number of hours slept per day for a user', () => {
    expect(sleep1.getAvgSleepHours(1)).to.equal(7.7)
  });

  it('should get avg sleep quality per day for a user', () => {
    expect(sleep1.getAvgSleepQual(1)).to.equal(2.5)
  });

});
