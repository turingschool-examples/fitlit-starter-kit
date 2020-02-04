const chai = require('chai');
const expect = chai.expect;
const User = require('../src/User');
const UserRepository = require('../src/UserRepository');

describe('User', function() {
  let user1;
  let user2;
  let user3;
  let userRepository;

  beforeEach(function() {
    user1 = new User(1, 'Luisa Hane', '15195 Nakia Tunnel, Erdmanport VA 19901-1697', 'Diana.Hayes1@hotmail.com', 4.3, 10000, [16, 4, 8]);
    user2 = new User(2, 'Jarvis Considine', '30086 Kathryn Port, Ciceroland NE 0727330086 Kathryn Port, Ciceroland NE 07273', 'Dimitri.Bechtelar11@gmail.com', 4.5, 5000, [9, 18, 24, 19]);
    user3 = new User(3, 'Herminia Witting', '85823 Bosco Fork, East Oscarstad MI 85126-5660', 'Elwin.Tromp@yahoo.com', 4.4, 5000, [19, 11, 42, 33]);
    userRepository = new UserRepository([user1, user2, user3])
  });

  it('should be a function', function() {
    expect(UserRepository).to.be.a('function');
  });

  it('should be an instance of UserRepository', function() {
    expect(userRepository).to.be.an.instanceof(UserRepository);
  });

  it('should except an array of user objects', function() {
    expect(userRepository.data[0]).to.equal(user1);
    expect(userRepository.data[1]).to.equal(user2);
    expect(userRepository.data[2]).to.equal(user3);
  });

  it('should return a user\'s data given its id', function() {
    userRepository.getUserData(1);

  })

})
