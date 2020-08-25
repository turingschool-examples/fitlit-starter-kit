const chai = require('chai');
const expect = chai.expect;
const User = require('../src/User');
const UserRepository = require('../src/UserRepository');
const userSamples = require('../data/userSamples')

describe('UserRepository', () => {
  let repo;
  let user;
  beforeEach( () => {
    repo = new UserRepository(userSamples)
    user = new User(repo.returnUserData(1));
  });

  it('should be a function', () => {
    expect(User).to.be.a('function');
  });

  it('should take in a single user data', () => {
    expect(user.userData).to.deep.equal([userSamples[0]]);
  });
});
