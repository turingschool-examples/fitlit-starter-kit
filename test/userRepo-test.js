'use strict'
const chai = require('chai')
const expect = chai.expect
const UserRepo = require('../src/userRepo')
const User = require('../src/user')

describe('UserRepo', () => {
  let userRepo, user1, user2

  beforeEach(() => {
    user1 = new User([{
      "id": 1,
      "name": "Testy User",
      "address": "123 Main St, Hometown CO 80123-1234",
      "email": "my.email.address@hotmail.com",
      "strideLength": 4.3,
      "dailyStepGoal": 12340,
    },
    {
      "id": 2,
      "name": "Great Person",
      "address": "678 Second St, This Place IL 60188-1234",
      "email": "thisismyemail@aol.com",
      "strideLength": 3.8,
      "dailyStepGoal": 15000,
    }], 1)
    user2 = new User([{
      "id": 1,
      "name": "Testy User",
      "address": "123 Main St, Hometown CO 80123-1234",
      "email": "my.email.address@hotmail.com",
      "strideLength": 4.3,
      "dailyStepGoal": 12340,
    },
    {
      "id": 2,
      "name": "Great Person",
      "address": "678 Second St, This Place IL 60188-1234",
      "email": "thisismyemail@aol.com",
      "strideLength": 3.8,
      "dailyStepGoal": 15000,
    }], 2)
    userRepo = new UserRepo([user1, user2])
  })

  it('should be a function', () => {
    expect(UserRepo).to.be.a('function')
  })

  it('should be an instance of User', () => {
    expect(userRepo).to.be.an.instanceof(UserRepo)
  })

  it('should return a user\'s data', () => {
    expect(userRepo.getUserData(2)).to.deep.equal({
      "name": "Great Person",
      "address": "678 Second St, This Place IL 60188-1234",
      "email": "thisismyemail@aol.com",
      "strideLength": 3.8,
      "dailyStepGoal": 15000,
    })
  })

  it('should calculate the average step goal for all users', () => {
    expect(userRepo.calculateAvgSteps()).to.equal(13670)
  })

})