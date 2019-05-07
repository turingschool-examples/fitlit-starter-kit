const chai = require('chai')
const expect = chai.expect;
const assert = chai.assert;

const UserRepo = require('../src/UserRepo');
const User = require('../src/User')

describe('UserRepo', function () {
  it('should be a function', function () {
    expect(UserRepo).to.be.a('function')
  })

  it('should be an instance of UserRepo', function () {
    const userRepo = new UserRepo()
    expect(userRepo).to.be.a.instanceOf(UserRepo)
  })

  
})