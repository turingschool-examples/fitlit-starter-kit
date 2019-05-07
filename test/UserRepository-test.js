const chai = require('chai');
const expect = chai.expect;

const UserRepository = require('../src/UserRepository');

describe('UserRepository', function() {

  it('should be a function', function() {
    const userRepository = new UserRepository('../data/usersSub.js');
    expect(UserRepository).to.be.a('function');
  });

  it('should be an instance of UserRepository', function() {
    const userRepository = new UserRepository('../data/usersSub.js');
    expect(userRepository).to.be.an.instanceof(UserRepository);
  });
  it('should return data file path', function() {
    const userRepository = new UserRepository('../data/usersSub.js');
    expect(userRepository.dataFilePath).to.equal('../data/usersSub.js');
  });
  it('should return user data given a user ID', function() {
    const userRepository = new UserRepository('../data/usersSub.js');
    expect(userRepository.returnUserData(2)).to.deep.equal( {
      "id": 2,
      "name": "Shayne Swift",
      "address": "747 Dickinson Gardens, South Helga AR 88484-2240",
      "email": "Lawson74@yahoo.com",
      "strideLength": 4.5,
      "dailyStepGoal": 11000
    });
});
});
