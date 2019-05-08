const chai = require('chai');
const expect = chai.expect;

const UserRepository = require('../src/UserRepository');
const userFakeData = require('../data/mock-users')

describe('UserRepository', function() {
  
  it('should return user data based off id', function() {
    const userRepository = new UserRepository(userFakeData);
    
    expect(userRepository.getUserData(5)[0]).to.be.a('object');
  });

  it('should return the average of steps based on goals across all users', function() {
    const userRepository = new UserRepository(userFakeData);

    expect(userRepository.averageSteps()).to.be.a('number');

  });

})