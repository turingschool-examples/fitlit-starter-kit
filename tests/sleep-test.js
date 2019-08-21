const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User');
const UserRepository = require('../src/users-repository');
const userData  = require('../data/test-data');
const users = userData;
const Sleep = require('../src/Sleep');

describe('Sleep', function() {
  let userRepo;
  let user1;
  let sleep1;

  beforeEach(() => {
    userRepo = new UserRepository(users);
    user1 = new User(userRepo.users[1]);
    sleep1 = new Sleep(user1);
  });

  it('should be a function', function() {
    expect(Sleep).to.be.a('function');
  });

});
