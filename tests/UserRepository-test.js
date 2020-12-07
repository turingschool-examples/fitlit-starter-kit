const chai = require('chai');
const expect = chai.expect;
const userData = require('../data/user.js')
const UserRepository = require('../src/UserRepository');
const User = require('../src/User');

describe('UserRespository', function() {
  let userRepository;

  beforeEach(function()) {
    userRepository = new UserRepository(userData);
    user1 = new User({
        "id": 1,
        "name": "Luisa Hane",
        "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
        "email": "Diana.Hayes1@hotmail.com",
        "strideLength": 4.3,
        "dailyStepGoal": 10000,
        "friends": [
          16,
          4,
          8
        ]
      });
  });

  it('should be a function', function() {
    expect(UserRepository).to.be.a('function');
  });

  it('should be an instance of UserRepository', function() {
    expect(userRepository)to.be.an.instanceof(UserRepository);
  });

  it('should hold all User objects', function() {
    expect(userRepository.users.length)to.equal(50);
    expect(userRepository.users[0])to.be.an.instanceof(User);
  });

  it('should return a user data given an id', function() {
    expect(userRepository.getUserData(1)).to.deeply.equal(user1)
  });

  it('should return average step goal amongst all users', function() {
    expect(userRepository.findAverageStepGoal()).to.equal(6700)
  })

});
