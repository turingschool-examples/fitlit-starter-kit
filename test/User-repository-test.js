// it should have a parameter that takes in a string
// it should have a method to take in a user id and show the user object
// it should have a method that shows average daily step goal of all users.
// it should have a method to show the state that the most users are from.

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

  it('should have be connected to test data file', function() {
    const userRepository = new UserRepository('filepathway');
    expect(usersTestData[0].id).to.eql(1);
  });

  it('should have a method that returns a users data from their id', function() {
    const userRepository = new UserRepository(usersTestData);
    expect(userRepository.returnData(1)).to.eql(usersTestData[0]);
  });

  it('it should have a method that shows average daily step goal of all users', function () {
    const userRepository = new UserRepository(usersTestData);
    expect(userRepository.aveDailySteps()).to.eql(8400);
  });



});
