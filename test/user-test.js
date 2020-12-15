 'use strict'
const chai = require('chai')
const expect = chai.expect
const User = require('../src/User')
const UserSleep = require("../src/UserSleep");
const UserHydration = require("../src/UserHydration");
const UserActivity = require("../src/UserActivity");

describe('User', () => {
  let user

  beforeEach(() => {
    user = new User({
      "id": 1,
      "name": "Testy User",
      "address": "123 Main St, Hometown CO 80123-1234",
      "email": "my.email.address@hotmail.com",
      "strideLength": 4.3,
      "dailyStepGoal": 12340,
    })
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