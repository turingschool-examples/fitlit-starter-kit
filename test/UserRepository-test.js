const chai = require('chai');
const expect = chai.expect;

const data = require('../data/practice-users');
const UserRepository = require('../src/UserRepository');

describe('UserRepository', function() {

  it.skip('should be a function', function() {
    const userRepository = new UserRepository(data);
    
    expect(UserRepository).to.be.a('function');
  });

  
});