const chai = require('chai');
const expect = chai.expect;

// import UserRepo from '../src/UserRepo';
const UserRepo = require('../src/UserRepo');
const userData = require('./testdata/user-test-data');
const activityData = require('./testdata/activity-test-data');

describe('UserRepo', () => {
  let userRepo;
  beforeEach(() => {
    userRepo = new UserRepo(userData);
  });

  it('should be a function', () => {
    expect(UserRepo).to.be.a('function');
  });

  it('should be an instance of the class', () => {
    expect(userRepo).to.be.an.instanceof(UserRepo);
  });

  it('should take in user data', () => {
    expect(userRepo.users).to.deep.equal(userData)
  });

  it('should be able to search the users by ID number', () => {
    expect(userRepo.searchUsersByID(3)).to.equal(userData[2])
  });

  it('should return the average step goal of all users', () => {
    expect(userRepo.calculateAverageStepGoals()).to.equal(6667)
  });
});
