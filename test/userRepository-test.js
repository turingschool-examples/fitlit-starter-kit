const chai = require('chai');
const expect = chai.expect;


const UserRepository = require('../src/UserRepository');
const User = require('../src/User');
const userData = require('../data-subsets/users-subset')

describe('UserRepository', () => {

  it('should be a function', () => {
    expect(UserRepository).to.be.a('function');
  });

  it('should be an instance of the user repository', () => {
    const userRepository = new UserRepository(userData);
    expect(userRepository).to.be.an.instanceof(UserRepository);
  });

  it('should return all user information with an ID', () => {
    const userRepository = new UserRepository(userData);
    expect(userRepository.getUserObj(1)).to.equal(userData[0]);
  });

  it('should be able to give the average step goal amongst all users', () => {
    const userRepository = new UserRepository(userData);
    expect(userRepository.calcStepGoalAvg()).to.equal(6200);
  });
});    
