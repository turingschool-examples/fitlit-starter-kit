const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User');
const UserRepository = require('../src/users-repository');
const userData  = require('../data/test-data');
const users = userData;

describe('User', function() {
  
  let userRepo, user1, user2, user3;

  beforeEach(() => {
    userRepo = new UserRepository(users);
    user1 = new User(userRepo.users[1]);
    user2 = new User(userRepo.users[2]);
    user3 = new User(userRepo.users[3]);
  });

  it('should be a function', function() {
    expect(User).to.be.a('function');
  });

  it('should be a single user', function() {
    expect(user1).to.deep.equal(userRepo.users[1]);
    expect(user2).to.deep.equal(userRepo.users[2]);
    expect(user3).to.deep.equal(userRepo.users[3]);
  });

  it('should return users first name', function() {
    expect(user1.returnFirstName()).to.equal("Jarvis");
    expect(user2.returnFirstName()).to.equal("Herminia");
    expect(user3.returnFirstName()).to.equal("Mae");
  });
});
