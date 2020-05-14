const chai = require('chai')
const expect = chai.expect
const Sleep = require('../src/Sleep')
const User = require('../src/User')

let sleep
let user1
let sleepData = [
    {
      "userID": 1,
      "date": "2019/06/15",
      "hoursSlept": 6.1,
      "sleepQuality": 2.2
    },
    {
      "userID": 2,
      "date": "2019/06/15",
      "hoursSlept": 7,
      "sleepQuality": 4.7
    },
    {
      "userID": 3,
      "date": "2019/06/15",
      "hoursSlept": 10.8,
      "sleepQuality": 4.7
    },
    {
      "userID": 4,
      "date": "2019/06/15",
      "hoursSlept": 5.4,
      "sleepQuality": 3
    },
    {
      "userID": 1,
      "date": "2019/06/16",
      "hoursSlept": 4.1,
      "sleepQuality": 3.8
    },
    {
      "userID": 2,
      "date": "2019/06/16",
      "hoursSlept": 7.5,
      "sleepQuality": 3.8
    },
    {
      "userID": 3,
      "date": "2019/06/16",
      "hoursSlept": 10.7,
      "sleepQuality": 3.4
    },
    {
      "userID": 4,
      "date": "2019/06/16",
      "hoursSlept": 8.3,
      "sleepQuality": 4.5
    },
    {
      "userID": 1,
      "date": "2019/06/17",
      "hoursSlept": 8,
      "sleepQuality": 2.6
    },
    {
      "userID": 2,
      "date": "2019/06/17",
      "hoursSlept": 5.7,
      "sleepQuality": 3
    },
    {
      "userID": 3,
      "date": "2019/06/17",
      "hoursSlept": 5.3,
      "sleepQuality": 4.9
    },
    {
      "userID": 4,
      "date": "2019/06/17",
      "hoursSlept": 5.7,
      "sleepQuality": 1.1
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
  }
]

describe('sleep', function() {

  beforeEach(function() {
    user1 = new User(userData[0])
    sleep = new Sleep(sleepData, user1)
  })

  it('should be an function', function() {
    expect(Sleep).to.be.a('function')
  })
  it('should have sleepData', function() {
    expect(sleep.sleepData).to.equal(sleepData)
  })
  it('should have a currentUser', function() {
    expect(sleep.currentUser).to.deep.equal(user1)
  })
  it('should be able to get a users sleep data', function() {
    expect(sleep.getUserSleepData()).to.deep.equal([sleepData[0], sleepData[4], sleepData[8]])
  })
  it('should be able to get users average daily sleep', function() {
    expect(sleep.getAverageDailySleep()).to.equal(6.07)
  })
  it('should be able to get users average daily sleep quality', function() {
    expect(sleep.getAverageSleepQuality()).to.equal(2.87)
  })
  it('should be able to get a how many hours a user slept on a specific day', function() {
    expect(sleep.getSleepForSpecificDay('2019/06/16')).to.equal(4.1)
  }) 
  it('should be able to get a users sleep quality on a specific day', function() {
    expect(sleep.getQualityForSpecificDay('2019/06/16')).to.equal(3.8)
  })
  it('should be able to get a week of hours sleep data', function() {
    expect(sleep.getWeekOfSleepData('2019/06/15')).to.deep.equal([
      { userID: 1, date: '2019/06/15', hoursSlept: 6.1, sleepQuality: 2.2 },
      { userID: 1, date: '2019/06/16', hoursSlept: 4.1, sleepQuality: 3.8 },
      { userID: 1, date: '2019/06/17', hoursSlept: 8, sleepQuality: 2.6 },
      undefined, undefined, undefined, undefined]
    )
  })
  it('should be able to get total hours slept for each day in a week for one user', function() {
    expect(sleep.getWeekofHoursSlept('2019/06/15')).to.deep.equal([6.1, 4.1, 8])
  })
  it('should be able to get quality of sleep for each day in a week for one user', function() {
    expect(sleep.getWeekofSleepQuality('2019/06/15')).to.deep.equal([2.2, 3.8, 2.6])
  })
  it('should be able to get all users average daily sleep quality', function() {
    expect(sleep.getAllUsersAverageSleepQuality()).to.deep.equal(3.48)
  })

     

})
