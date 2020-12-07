'use strict'
const chai = require('chai')
const expect = chai.expect
const User = require('../src/User')
const testUserData = require('./test-data')

describe('User', () => {
  let user

  beforeEach(() => {
    user = new User('Testy User')
  })

  it('should be a function', () => {
    expect(User).to.be.a('function')
  })

  it('should be an instance of User', () => {
    expect(user).to.be.an.instanceof(User)
  })

  it('should return a user\'s first name only', () => {
    expect(user.getFirstName()).to.equal('Testy')
  })

})