const chai = require('chai');
const expect = chai.expect;

const UserRepository = require('../src/UserRepository');
const userFakeData = require('../data/mock-users')

describe('UserRepository', function() {
  
  let userRepository;
  beforeEach(function() {
    userRepository = new UserRepository(userFakeData);
  })

  it('should return user data based off id', function() {
    
    expect(userRepository.getUserData(5)[0]).to.be.a('object');
  });

  it('should return an average of step all step goals', function() {

    expect(userRepository.averageSteps()).to.be.a('number');
  });

  it('should return the state most people are from', function() {
    
    expect(userRepository.mostStates()).to.equal('AK');
  });
});