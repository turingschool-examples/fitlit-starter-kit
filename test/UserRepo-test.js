const chai = require('chai');
const expect = chai.expect;

const userData = require('../data/users-test-data');

const UserRepo = require('../src/UserRepo');

describe('UserRepo', () => {

  let userRepo;
  beforeEach(() => {
    userRepo = new UserRepo(userData)
  });

  it('should be a function', () => {
    expect(UserRepo).to.be.a('function');
  });

  it('should be an instance of the class UserRepo', () => {
    expect(userRepo).to.be.an.instanceOf(UserRepo);
  });


});