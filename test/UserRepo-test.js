const chai = require('chai');
const expect = chai.expect;

const userData = require('../data/users-test-data');

const UserRepo = require('../src/UserRepo');

describe('UserRepo', () => {
  
  beforeEach(() => {
    let userRepo = new UserRepo(userData)
  });

  it('should be a function', () => {
    expect(UserRepo).to.be.a('function');
  });


});