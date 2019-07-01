const chai = require('chai');
const expect = chai.expect;

const data = require('../data/practice-users');
const UserRepository = require('../src/UserRepository');

describe('UserRepository', function() {

  it('should be a function', function() {
    const userRepository = new UserRepository(data);

    expect(UserRepository).to.be.a('function');
  });

  it('should return user data given the users id', function() {
    const userRepository = new UserRepository(data);

    expect(userRepository.returnUserData(3)).to.equal(data[0]);
  });

  it.skip('', function() {

});
  
});