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
  		expect(userRepository.findUserData(1)).to.equal(userData[0]);
  });

 })



//method to take in userData.user.id
//compare to dataset ids
//return remaining properties from user object


