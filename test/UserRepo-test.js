const chai = require('chai')
const expect = chai.expect;
const assert = chai.assert;

const UserRepo = require('../src/UserRepo');
const User = require('../src/User')
const data = require('../data/users-test-data')

describe('UserRepo', function () {
  it('should be a function', function () {
    expect(UserRepo).to.be.a('function')
  })

  it('should be an instance of UserRepo', function () {
    const userRepo = new UserRepo(data)
    expect(userRepo).to.be.a.instanceOf(UserRepo)
  })

  it('should take in user data', function () {
    const userRepo = new UserRepo(data)
    expect(userRepo.usersData).to.equal(data)
    expect(userRepo.usersData[3]).to.equal(data[3])
  })

})