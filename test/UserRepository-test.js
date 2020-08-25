const chai = require('chai');
const expect = chai.expect;
const UserRepository = require('../src/UserRepository');
const userSamples = require('../data/userSamples')

describe('UserRepository', () => {
  let repo;
  beforeEach( () => {
    repo = new UserRepository(userSamples);

  });

  it('should be a function', () => {
    expect(UserRepository).to.be.a('function');
  });

  it('should take in user data', () => {
    expect(repo.data).to.equal(userSamples);
  });

  it('should havea method to return user data', () => {
    expect(repo.returnUserData(1)).to.deep.equal([userSamples[0]]);
  });
});
