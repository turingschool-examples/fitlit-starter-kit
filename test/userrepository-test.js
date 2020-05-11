const chai = require('chai')
const expect = chai.expect
const UserRepository = require('../src/UserRepository')
const User = require('../src/User')

let user1
let user2
let user3
let userRepository

beforeEach(function() {
  user1 = new User()
  user2 = new User()
  user3 = new User()
  userRepository = new UserRepository([user1, user2, user3])
})

describe('UserRepository', function() {

  it('should be an function', function() {
    expect(UserRepository).to.be.a('function')
  })
  it('should take in user data', function() {
    expect(userRepository).to.equal([])
  })
  it('should be able to ')
})
