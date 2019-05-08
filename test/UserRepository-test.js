const chai = require('chai');
const expect = chai.expect;

const UserRepository = require('../src/UserRepository');
const userFakeData = require('../data/mock-users')

describe('UserRepository', function() {
  
  it('should return user data based off id', function() {
    const userRepository = new UserRepository(userFakeData);
    
    expect(userRepository.getUserData(5)[0]).to.be.a('object');
  });

  it('should return an average of step all step goals', function() {
    const userRepository = new UserRepository(userFakeData);

    expect(userRepository.averageSteps()).to.be.a('number');
  });
});