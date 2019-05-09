const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User');
const UserRepo = require('../src/UserRepo');
const Sleep = require('../src/Sleep');
const data = require('../data/sleep-test-data')

describe('Sleep Test', function () {
  let person;
  let userRepo;
  let sleep;

  beforeEach(function () {
    person = new User(1)
    userRepo = new UserRepo()
    sleep = new Sleep(0)
  })

  it('should be a function', function () {
    expect(User).to.be.a('function')
  })

  it('should be an instantiation of Sleep', function () {
    expect(person).to.be.a.instanceOf(User)
  })

  it('should find the speciifc sleep data per user', function () {

  })

})