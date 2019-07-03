const chai = require('chai');
const expect = chai.expect;

const UserRepo = require('../src/UserRepo');
const sampleData = require('../data/sample-users');
const sampleUserData = sampleData.sampleUserData;

describe('UserRepo', () => {

  let userRepo;
  beforeEach(() => {
    userRepo = new UserRepo(sampleUserData);
  });

  it('should be a function', () => {
    expect(UserRepo).to.be.a('function');
  });

  it('should be an instance of UserRepo', () => {
    expect(userRepo).to.be.an.instanceOf(UserRepo);
  });

  it('should return the user\'s data for given id', () => {
    const name = userRepo.returnUserData(2).name;
    expect(name).to.equal('Jarvis Considine');
  });

  it('should return the average step goal for all users', () => {
    const average = userRepo.returnAllUsersStepGoalAverage();
    expect(average).to.equal(6400);
  });
})