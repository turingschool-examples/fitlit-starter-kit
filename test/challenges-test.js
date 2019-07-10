const chai = require('chai')
const expect = chai.expect;

const User = require('../src/user');
const UserRepository = require('../src/userRepository');
const activity = require('../data/activity')
const fakeUsers = require('../fakeData/fakeUsers')
const fakeActivity = require('../fakeData/fakeActivity')
const Challenges = require('../src/challenges')

describe('Challenges', function() {

  it('Should be a function', function () {

    expect(Challenges).to.be.a('function')
  }),

  it('Should be able to find a users friends', function() {
    let user = new Challenges (fakeUsers, 1)
    let object = user.findFriends()
    expect(object[0]).to.deep.equal({
      "id": 16,
      "name": "Garnett Cruickshank",
      "address": "992 Zita Mall, North Tremainemouth MA 19312-3532",
      "email": "Laverna47@hotmail.com",
      "strideLength": 3.9,
      "dailyStepGoal": 10000,
      "friends": [
        25,
        31,
        3,
        16
      ]
    },)
    expect(object.length).to.equal(3)
  }),
  it('Should be able to find the weekly step data for a users friends', function(){

    let user = new Challenges(fakeUsers, 1)
    let array = user.findFriends()
    expect(array.length).to.equal(3)
  })
  
})