const chai = require('chai')
const expect = chai.expect
const Hydration = require('../src/Hydration')
const User = require('../src/User')

let hydration
let user1
let hydrationData = [
  {
    "userID": 1,
    "date": "2019/06/15",
    "numOunces": 37
  },
  {
    "userID": 2,
    "date": "2019/06/15",
    "numOunces": 75
  },
  {
    "userID": 3,
    "date": "2019/06/15",
    "numOunces": 47
  },
  {
    "userID": 1,
    "date": "2019/06/16",
    "numOunces": 69
  },
  {
    "userID": 2,
    "date": "2019/06/16",
    "numOunces": 91
  },
  {
    "userID": 3,
    "date": "2019/06/16",
    "numOunces": 99
  },
  {
    "userID": 1,
    "date": "2019/06/17",
    "numOunces": 96
  },
  {
    "userID": 2,
    "date": "2019/06/17",
    "numOunces": 96
  },
  {
    "userID": 3,
    "date": "2019/06/17",
    "numOunces": 28
  },
  {
    "userID": 1,
    "date": "2019/06/18",
    "numOunces": 61
  },
  {
    "userID": 2,
    "date": "2019/06/18",
    "numOunces": 70
  },
  {
    "userID": 3,
    "date": "2019/06/18",
    "numOunces": 40
  },
  {
    "userID": 1,
    "date": "2019/06/19",
    "numOunces": 91
  },
  {
    "userID": 2,
    "date": "2019/06/19",
    "numOunces": 76
  },
  {
    "userID": 3,
    "date": "2019/06/19",
    "numOunces": 85
  },
  {
    "userID": 1,
    "date": "2019/06/20",
    "numOunces": 50
  },
  {
    "userID": 2,
    "date": "2019/06/20",
    "numOunces": 71
  },
  {
    "userID": 3,
    "date": "2019/06/20",
    "numOunces": 51
  },
  {
    "userID": 1,
    "date": "2019/06/21",
    "numOunces": 50
  },
  {
    "userID": 2,
    "date": "2019/06/21",
    "numOunces": 27
  },
  {
    "userID": 3,
    "date": "2019/06/21",
    "numOunces": 41
  },
  {
    "userID": 1,
    "date": "2019/06/22",
    "numOunces": 43
  },
  {
    "userID": 2,
    "date": "2019/06/22",
    "numOunces": 58
  },
  {
    "userID": 3,
    "date": "2019/06/22",
    "numOunces": 78
  }
]
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
  },
]

describe('Hydration', function() {

  beforeEach(function() {
    user1 = new User(userData[0])
    hydration = new Hydration(hydrationData, user1)
  })

  it('should be an function', function() {
    expect(Hydration).to.be.a('function')
  })
  it('should have hydrationData', function() {
    expect(hydration.hydrationData).to.equal(hydrationData)
  })
  it('should have a currentUser', function() {
    expect(hydration.currentUser).to.deep.equal(user1)
  })
  it('should be able to get a users hydration data', function() {
    expect(hydration.getUserHydrationData()).to.deep.equal([hydrationData[0], hydrationData[3], hydrationData[6], hydrationData[9], hydrationData[12], hydrationData[15], hydrationData[18], hydrationData[21]])
  })
  it('should be able to get users average daily ounces', function() {
    expect(hydration.getAverageDailyOunces()).to.equal(62)
  })
  it('should be able to get a how many ounces a user consumed on a specific day', function() {
    expect(hydration.getOuncesForSpecificDay('2019/06/15')).to.equal(37)
  })
  it('should return undefined if argument is NaN', function() {
    expect(hydration.getOuncesForSpecificDay('')).to.equal(undefined)
  })
  it('should be able to get a week of hydration info', function() {
    expect(hydration.getWeekOfHydroData('2019/06/22')).to.deep.equal([
      { userID: 1, date: '2019/06/22', numOunces: 43 },
      { userID: 1, date: '2019/06/21', numOunces: 50 },
      { userID: 1, date: '2019/06/20', numOunces: 50 },
      { userID: 1, date: '2019/06/19', numOunces: 91 },
      { userID: 1, date: '2019/06/18', numOunces: 61 },
      { userID: 1, date: '2019/06/17', numOunces: 96 },
      { userID: 1, date: '2019/06/16', numOunces: 69},
      { userID: 1, date: '2019/06/15', numOunces: 37 }
    ])
  })
  it('should be able to get total fluid ounces for each day in a week for one user', function() {
    expect(hydration.getWeekofFluidOz('2019/06/15')).to.deep.equal([ 37, 69, 96, 61, 91, 50, 50, 43 ])
  })
})
