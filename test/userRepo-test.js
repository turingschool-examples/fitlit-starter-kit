const chai = require('chai');
const expect = chai.expect;
const UserRepo = require('../src/userRepo');
const usersSampleData = require('../data/users-sample');

describe('UserRepo', () => {

  let userRepo;
  let email = "Dimitri.Bechtelar11@gmail.com";

  beforeEach(() => {
    userRepo = new UserRepo(usersSampleData);
  });

  it('should be a function', () => {
    expect(UserRepo).to.be.a('function');
  });

  it('should be an instance of UserRepo', () => {
    expect(userRepo).to.be.an.instanceOf(UserRepo);
  });

  it('should have usersData', () => {
    expect(userRepo.usersData).to.equal(usersSampleData);
  });

  it('should be able to return a specific users data', () => {
    expect(userRepo.getUserData(email)).to.equal(usersSampleData[1]);
  });

  it('should be able to calculate all users average steps', () => {
    expect(userRepo.calcAvgStepGoal()).to.equal(6400);
  });



});
