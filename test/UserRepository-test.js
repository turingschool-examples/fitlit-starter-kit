const chai = require('chai');
const expect = chai.expect;

const UserRepository = require('../src/UserRepository');
const users = require('../data/users')

describe('UserRepository', function() {
  
  it('should return user data based off id', function() {
    const userRepository = new UserRepository(users);
    
    expect(userRepository.getUserData(5)[0]).to.be.a('object');
  });

  it('should return the average of steps based on goals across all users', function() {
    const userRepository = new UserRepository(users);

    expect(userRepository.averageSteps()).to.be.a('number');
  });

})