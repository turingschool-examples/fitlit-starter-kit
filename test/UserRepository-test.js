const chai = require('chai');
const expect = chai.expect;

const UserRepository = require('../src/UserRepository');
const users = require('../data/users')

describe('UserRepository', function() {
  
  it('should return user data based off id', function() {
    const userRepository = new UserRepository(users);

    expect(userRepository.getUserData(5)[0]).to.be.a('object');
  });

})