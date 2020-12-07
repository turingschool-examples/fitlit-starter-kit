'use strict'
const chai = require('chai')
const expect = chai.expect
const UserRepo = require('../src/UserRepo')
const User = require('../src/user')

describe('UserRepo', () => {
  let userRepo, user

  beforeEach(() => {
    user = new User(
      1, 
      'Testy User', 
      '123 Main St, Hometown CO 80123-1234', 
      'my.email.address@hotmail.com', 
      4.3, 
      12340)
    userRepo = new UserRepo([user])
  })

  it('should be a function', () => {
    expect(UserRepo).to.be.a('function')
  })

  it('should be an instance of User', () => {
    expect(userRepo).to.be.an.instanceof(UserRepo)
  })

  it('should return a user\'s data', () => {
    expect(userRepo.getUserData(user.id)).to.deep.equal({
      "id": 1,
      "name": "Testy User",
      "address": "123 Main St, Hometown CO 80123-1234",
      "email": "my.email.address@hotmail.com",
      "strideLength": 4.3,
      "dailyStepGoal": 12340,
    })
  })

})