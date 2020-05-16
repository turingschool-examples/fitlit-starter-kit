const chai = require('chai')
const expect = chai.expect
const UserRepository = require('../src/UserRepository')

let userRepository
let userData

beforeEach(function() {
  userData = [
    {
      "id": 1,
      "name": "Luisa Hane",
      "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
      "email": "Diana.Hayes1@hotmail.com",
      "strideLength": 4.3,
      "dailyStepGoal": 10000,
      "friends": [
        16,
        4,
        8
      ]
    },
    {
      "id": 2,
      "name": "Jarvis Considine",
      "address": "30086 Kathryn Port, Ciceroland NE 07273",
      "email": "Dimitri.Bechtelar11@gmail.com",
      "strideLength": 4.5,
      "dailyStepGoal": 5000,
      "friends": [
        9,
        18,
        24,
        19
      ]
    },
    {
      "id": 3,
      "name": "Herminia Witting",
      "address": "85823 Bosco Fork, East Oscarstad MI 85126-5660",
      "email": "Elwin.Tromp@yahoo.com",
      "strideLength": 4.4,
      "dailyStepGoal": 5000,
      "friends": [
        19,
        11,
        42,
        33
      ]
    }
  ]
  userRepository = new UserRepository(userData)
})

describe('UserRepository', function() {

  it('should be an function', function() {
    expect(UserRepository).to.be.a('function')
  })
  it('should take in user data', function() {
    expect(userRepository.userData).to.equal(userData)
  })
  it('should be able to return a specific users data', function() {
    expect(userRepository.getUserByID(2)).to.equal(userData[1])
  })
  it('should be able to return a specific users data', function() {
    expect(userRepository.getUserByID('')).to.equal(undefined)
  })
  it('should be able to get the average step goal for all users', function() {
    expect(userRepository.getAverageStepGoal()).to.equal(6667)
  })
})
