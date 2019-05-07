const chai = require('chai');
const expect = chai.expect;

const UserRepository = require('../src/UserRepository');

describe('UserRepository', function() {

  it('should be a function', function() {
    const userRepository = new UserRepository();
    expect(UserRepository).to.be.a('function');
  });

  it('should be an instance of UserRepository', function() {
    const userRepository = new UserRepository();
    expect(userRepository).to.be.an.instanceof(UserRepository);
  });

  it('should return data file path', function() {
    const userRepository = new UserRepository('../data/usersSub.js');
    expect(userRepository.dataFilePath).to.equal('../data/usersSub.js');
  });
 
})