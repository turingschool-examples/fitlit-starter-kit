const chai = require('chai');
const expect = chai.expect;
const UserRepository = require('../src/userRepository');
const sampleUserData = require('../data/sampleUserData');


describe('UserRepository', () => {

  let userRepository;

  beforeEach(() => {
    userRepository = new UserRepository(sampleUserData);
  });

  it('should be a function', () => {
    expect(UserRepository).to.be.a('function');
  });

  it('should hold info on users', () => {
    expect(userRepository.usersData).to.eql(sampleUserData);
  });

  it('should be able to get a user by id', () => {
    expect(userRepository.getUserData(3)).to.eql({
      "id": 3,
      "name": "Herminia Witting",
      "address": "85823 Bosco Fork, East Oscarstad MI 85126-5660",
      "email": "Elwin.Tromp@yahoo.com",
      "strideLength": 4.4,
      "dailyStepGoal": 5000,
      "friends": [
        2,
        1,
        4
      ]
    });
  });

  it('should be able to get average step goal for all users', () => {
    expect(userRepository.calcAverageStepGoal()).to.equal(6400);
  });
});
