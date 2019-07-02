const chai = require('chai');
const expect = chai.expect;

const data = require('../data/practice-users');
const UserRepository = require('../src/UserRepository');

describe('UserRepository', function() {

  it('should be a function', function() {
    const userRepository = new UserRepository(data);
    expect(UserRepository).to.be.a('function');
  });

  it('should be an instance of UserRepository', function() {
    const userRepository = new UserRepository(data);
    expect(userRepository).to.be.an.instanceof(UserRepository);
  });

  it('should return user data given the users id', function() {
    const userRepository = new UserRepository(data);
    expect(userRepository.returnUserData(3)).to.equal(data[0]);
  });

  it('it should calculate the average step goal', function() {
    const userRepository = new UserRepository(data);
    expect(userRepository.averageStepGoals()).to.equal(7429);
  });
  
});