if(typeof module !== 'undefined') {
var chai = require('chai');
var expect = chai.expect;
var userData = require('../data/sample-users');
var User = require('../src/user');
var UserRepository = require('../src/user-repo');
}

describe('User Repository', function() {
  
  it('should be a function', function() {
    const userRepository = new UserRepository('../data/sample-users.js');
    expect(UserRepository).to.be.a('function');
  });

  it('should be an instance of User Repository', function() {
    const userRepository = new UserRepository('../data/sample-users.js');
    expect(userRepository).to.be.an.instanceof(UserRepository);
  }); 

  let userRepository;

  beforeEach(function() {
    const userData = {
      "id": 1,
      "name": "Nyasia Weber",
      "address": "270 August Meadows, Maribelside SD 36129",
      "email": "Jordane_Schultz@yahoo.com",
      "strideLength": 4.7,
      "dailyStepGoal": 8000
    }
    userRepository = new UserRepository('../data/sample-users.js');
  });

  it('should accept a data file path', function() {
  	expect(userRepository.dataFilePath).to.equal('../data/sample-users.js');
  });

    it('should be able to access the user\'s data based on id', function() {
  		expect(userRepository.findUserData(2)).to.equal(userData[1]);
  });

  it('should be able to return average step goal for all users', function() {
    expect(userRepository.findAverageStepGoal()).to.equal(7667);
});

it('should be able to return most common user state', function() {
  expect(userRepository.findMostCommonState()).to.equal('OH');
});

 });


