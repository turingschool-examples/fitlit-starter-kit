const chai = require('chai');
const expect = chai.expect;

const UserRepository = require('../src/UserRepository');
const User = require('../src/User');

describe('UserRepository', function() {
  let user1;
  let user2;
  let user3;
  let userRepository;
  beforeEach(() => {
    user1 = new User({
      'id': 1,
      'name': 'Luisa Hane',
      'address': '15195 Nakia Tunnel, Erdmanport VA 19901-1697',
      'email': 'Diana.Hayes1@hotmail.com',
      'strideLength': 4.3,
      'dailyStepGoal': 10000,
      'friends': [
        16,
        4,
        8
      ]
    })
    user2 = new User({
      "id": 2,
      "name": "Jarvis Considine",
      "address": "30086 Kathryn Port, Ciceroland NE 07273",
      "email": "Dimitri.Bechtelar11@gmail.com",
      "strideLength": 4.5,
      "dailyStepGoal": 5000,
      "friends": [
        9,
        18,
        24,
        19
      ]
    })
    user3 = new User({
      "id": 3,
      "name": "Herminia Witting",
      "address": "85823 Bosco Fork, East Oscarstad MI 85126-5660",
      "email": "Elwin.Tromp@yahoo.com",
      "strideLength": 4.4,
      "dailyStepGoal": 5000,
      "friends": [
        19,
        11,
        42,
        33
      ]
    })
    userRepository = new UserRepository([user1, user2, user3]);
  })
  it('should be a function', function() {
    expect(UserRepository).to.be.a('function');
  });
  it('should be an instance of user repository', function() {
    expect(userRepository).to.be.an.instanceof(UserRepository);
  });
  it('should hold an array of users', function() {
    expect(userRepository.users).to.deep.equal([user1, user2, user3]);
    expect(userRepository.users.length).to.equal(3);
  });
  describe('getUser', function() {
    it('should return user object when given a user id', function() {
      expect(userRepository.getUser(2)).to.equal(user2);
    })
  });
});
