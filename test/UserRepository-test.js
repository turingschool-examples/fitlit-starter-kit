const chai = require('chai');
const expect = chai.expect;

const UserRepository = require('../src/UserRepository');
const userData = require('../test-data/users-fixtures')

describe('UserRepository', function() {

  it('should be a function', function() {
    const userRepository = new UserRepository();
    expect(UserRepository).to.be.a('function');
  });

  it('should store user information', function() {
    const userRepository = new UserRepository(userData)
    expect(userRepository.data).to.be.a('array')
  });

  it('should provide user data based on user id', function() {
    const userRepository = new UserRepository(userData)
    expect(userRepository.getUserData(2)).to.equal(userData[1])
  });

  it('should calculate average step goal of all users', function(){
    const userRepository = new UserRepository(userData)
    expect(userRepository.calculateAverageStepGoal()).to.equal(6400)
  })
})
