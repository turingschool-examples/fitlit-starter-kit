// it should have a parameter that takes in a string
// it should have a method to take in a user id and show the user object
// it should have a method that shows average daily step goal of all users.
// it should have a method to show the state that the most users are from.

const chai = require('chai');
const expect = chai.expect;
const UserRepository = require('../src/User-repository');
const usersTestData = require('../data/users-test-data');
const User = require('../src/User');

describe('UserRepository', function() {

  let userRepository
  beforeEach(function() {
    userRepository = new UserRepository(usersTestData, 1);
  });

  it('should be a function', function() {
    expect(UserRepository).to.be.a('function');
  });

  it('should be an instance of userRepository', function() {
    expect(userRepository).to.be.an.instanceof(UserRepository);
  });

  it('should be an instance of user', function() {
    expect(userRepository.currentUser).to.be.an.instanceof(User);
  });

  it('should have be connected to test data file', function() {
    expect(usersTestData[0].id).to.eql(1);
  });

  it('should have a method that returns a users data from their id', function() {
    expect(userRepository.returnData(1)).to.eql(usersTestData[0]);
  });

  it('it should have a method that shows average daily step goal of all users', function () {
    expect(userRepository.aveDailySteps()).to.eql(8400);
  });

  it('it should have a method that shows most common state of users', function () {
    expect(userRepository.findMostCommonState()).to.eql('AR');
  });

});