const chai = require('chai')
const expect = chai.expect
const User = require('../src/User')

let user
let userData = [
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
  }
]

describe('User', function() {

  beforeEach(function() {
    user = new User(userData[0])
  })

  it('should be an function', function() {
    expect(User).to.be.a('function')
  })
  it('should be an instance of user', function() {
    expect(user).to.be.an.instanceof(User)
  })
  it('should have a property of id', function() {
    expect(user.id).to.equal(1)
  })
  it('should have a property of name', function() {
    expect(user.name).to.equal("Luisa Hane")
  })
  it('should have a property of address', function() {
    expect(user.address).to.equal("15195 Nakia Tunnel, Erdmanport VA 19901-1697")
  })
  it('should have a property of email', function() {
    expect(user.email).to.equal("Diana.Hayes1@hotmail.com")
  })
  it('should have a property of strideLength', function() {
    expect(user.strideLength).to.equal(4.3)
  })
  it('should have a property of dailyStepGoal', function() {
    expect(user.dailyStepGoal).to.equal(10000)
  })
  it('should have a property of userFriends', function() {
    expect(user.userFriends).to.deep.equal([
      16,
      4,
      8
    ])
  })
  it('should be able to return the users first name only', function() {
    expect(user.getFirstName()).to.equal("Luisa")
  })
})
