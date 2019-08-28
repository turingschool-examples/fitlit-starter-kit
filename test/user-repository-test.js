const chai = require('chai');
const expect = chai.expect;

const UserRepository = require('../src/User-repository');
const userTestData = require('../test-data/user-test-data');

describe('UserRepository', () => {
  let userRepo;
  beforeEach(() => {
    userRepo = new UserRepository(userTestData);
  });

  it('should take in an array of users', () => {
    expect(userRepo.users.length).to.equal(3);
  });

  it("should return an individual user's data", () => {
    expect(userRepo.returnUserData(1)).to.equal(userTestData[0]);
  });

  it("should return the average step count of all users", () => {
    expect(userRepo.returnAllUsersAverageStepGoal()).to.equal(6666);
  });
})