const chai = require('chai');
const expect = chai.expect;

const UserRepository = require('../src/UserRepository');

describe('UserRepository', function() {
  it('should be a function', function() {
    expect(UserRepository).to.be.a('function');
  });
  it('should be an instance of user repository', function() {
    const userRepository = new UserRepository();
    expect(userRepository).to.be.an.instanceof(UserRepository);
  });
  it('should hold an array of users', function() {

  });
  describe('getUser', function() {
    it('should return user object when given a user id', function() {

    })
    //write tests for all UserRepository methods -- if two or more tests, nest in a describe block
  it('')
  })
});
