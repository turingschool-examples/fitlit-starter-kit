const chai = require('chai');
const expect = chai.expect;
const UserRepo = require('../src/UserRepo');
const usersSampleData = require('../data/users-sample');
const User = require('../src/user');

describe('User', () => {

  let userRepo;
  let user;
  let email = "Dimitri.Bechtelar11@gmail.com";
  let userData;
  
  beforeEach(() => {
    userRepo = new UserRepo(usersSampleData);
    userData = userRepo.getUserData(email);
    user = new User(userData);
  });

  it('should be a function', () => {
    expect(User).to.be.a('function');
  });

  it('should be an instance of UserRepo', () => {
    expect(user).to.be.an.instanceOf(User);
  });

  it('should have an ID', () => {
    expect(user.id).to.equal(userData.id);
  });

  it('should have an username', () => {
    expect(user.name).to.equal(userData.name);
  });

  it('should have an address', () => {
    expect(user.address).to.equal(userData.address);
  });

  it('should have an email', () => {
    expect(user.email).to.equal(userData.email);
  });

  it('should have an strideLength', () => {
    expect(user.strideLength).to.equal(userData.strideLength);
  });

  it('should have an dailyStepGoal', () => {
    expect(user.dailyStepGoal).to.equal(userData.dailyStepGoal);
  });

});
