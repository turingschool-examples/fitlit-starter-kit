const chai = require('chai');
const expect = chai.expect;
const UserRepository = require('../src/User-repository');
const usersTestData = require('../data/users-test-data')

describe('UserRepository', function() {

  it('should be a function', function() {
    const userRepository = new UserRepository();
    expect(UserRepository).to.be.a('function');
  });

  it('should be an instance of userRepository', function() {
    const userRepository = new UserRepository();
    expect(userRepository).to.be.an.instanceof(UserRepository);
  });

});
