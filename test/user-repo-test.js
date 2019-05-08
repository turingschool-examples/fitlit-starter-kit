const chai = require('chai');
const expect = chai.expect;
const userData = require('../data/sample-users.js');
const User = require('../src/user.js');
const UserRepository = require('../src/user-repo.js');

describe('User Repository', function() {
  
  
  it('should be a function', function() {
    const userRepository = new UserRepository('../data/sample-users.js');
    expect(UserRepository).to.be.a('function');
  });

  it('should be an instance of User Repository', function() {
    const userRepository = new UserRepository('../data/sample-users.js');
    expect(userRepository).to.be.an.instanceof(UserRepository);
  }); 

  it('should accept a data file path', function() {
  	const userRepository = new UserRepository('../data/sample-users.js');
  	expect(userRepository.dataFilePath).to.equal('../data/sample-users.js')
  })



})