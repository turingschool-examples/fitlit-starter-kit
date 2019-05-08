const chai = require('chai');
const expect = chai.expect;
const User = require('../src/User.js');
const UserRepository = require('../src/UserRepository');
// const SampleData = require('../data/sample-data')

describe('User Repository', function() {
  let userData;
  beforeEach(function() {
    userData = {
      "id": 1,
      "name": "Nyasia Weber",
      "address": "270 August Meadows, Maribelside SD 36129",
      "email": "Jordane_Schultz@yahoo.com",
      "strideLength": 4.7,
      "dailyStepGoal": 8000
    }
  });

  it('should be an instance of UserRepository', function () {
    const userRepository = new UserRepository('../data/sample-data');
    expect(userRepository).to.be.an.instanceOf(UserRepository);
  })
  it ('should be able to take in a dataFilePath as a parameter', function (){
    const userRepository = new UserRepository('../data/sample-data');
    expect(userRepository.dataFilepath).to.equal('../data/sample-data');

  });
  it('should return the user information from user id', function() {
    const userRepository = new UserRepository('../data/users');
    expect(userRepository.getUserDataFromId(1)).to.eql(userData);
  });
  it('should return the average step goal of all users', function() {
    const userRepository = new UserRepository('../data/users');
    expect(userRepository.getAverageStepGoal()).to.be.a('number')
  });
  it('should return the most common state from all users', function() {
    const userRepository = new UserRepository('../data/users');
    userRepository.getMostCommonState();
    expect(userRepository.getMostCommonState()).to.equal('NM');

  });
});