const chai = require('chai');
const expect = chai.expect;
const userData = require('../data/sample-users.js');
const User = require('../src/user.js');
const UserRepository = require('../src/user-repo.js');

describe('User Repository', function() {
  
  
  it('should be a function', function() {
    const userRepository = new UserRepository();
    expect(UserRepository).to.be.a('function');
  });

  it('should be an instance of Card', function() {
    const userRepository = new UserRepository();
    expect(userRepository).to.be.an.instanceof(UserRepository);
  }); 



})