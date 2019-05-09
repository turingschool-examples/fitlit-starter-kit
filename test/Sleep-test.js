const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const User = require('../src/User');
const UserRepo = require('../src/UserRepo');
const Sleep = require('../src/Sleep');

describe('Sleep Test', function () {
  let user;
  let userRepo;
  let sleep;

  beforeEach(function () {
    user = new User(1)
    userRepo = new UserRepo()
    sleep = new Sleep(0)
  })

  it('should be a function', function () {
    expect(User).to.be.a('function')
  })

  it('should be an instantiation of Sleep', function () {
    expect(user).to.be.a.instanceOf(User)
  })

  

})