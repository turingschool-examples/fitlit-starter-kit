// it should have a parameter that takes in a string
// it should have a method to take in a user id and show the user object
// it should have a method that shows average daily step goal of all users.
// it should have a method to show the state that the most users are from.

const chai = require('chai');
const expect = chai.expect;
const UserRepository = require('../src/User-repository');

describe('UserRepository', function() {

  it('should be a function', function() {
    const userRepository = new UserRepository();
    expect(UserRepository).to.be.a('function');
  });



});
