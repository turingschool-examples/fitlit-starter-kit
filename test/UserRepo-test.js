const chai = require('chai');
const expect = chai.expect;

const userData = require('../data/users-test-data');

const UserRepo = require('../src/UserRepo');

describe('UserRepo', () => {

  let userRepo;
  beforeEach(() => {
    userRepo = new UserRepo(userData)
  });

  it('should be a function', () => {
    expect(UserRepo).to.be.a('function');
  });

  it('should be an instance of the class UserRepo', () => {
    expect(userRepo).to.be.an.instanceOf(UserRepo);
  });

  it('should hold all user data', () => {
    expect(userRepo.data.length).to.deep.equal(12)
    expect(userRepo.data).to.eql(userData);
  });

  it('should return the users data based on their id', () => {
    expect(userRepo.returnUserData(1)).to.deep.equal({
      "id": 1,
      "name": "Luisa Hane",
      "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
      "email": "Diana.Hayes1@hotmail.com",
      "strideLength": 4.3,
      "dailyStepGoal": 10000,
      "friends": [
        2,
        3,
        4
      ]
    });
  });

  it('should return the average step goal among all users', () => {
    expect(userRepo.returnAverageStepGoal()).to.equal(6833);
  });

});