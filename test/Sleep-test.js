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
    },
    {
      "userID": 1,
      "date": "2019/06/18",
      "hoursSlept": 10.4,
      "sleepQuality": 3.1
    },
    {
      "userID": 2,
      "date": "2019/06/18",
      "hoursSlept": 10.8,
      "sleepQuality": 3.2
    },
    {
      "userID": 3,
      "date": "2019/06/18",
      "hoursSlept": 9.8,
      "sleepQuality": 2.6
    },
    {
      "userID": 4,
      "date": "2019/06/18",
      "hoursSlept": 5.9,
      "sleepQuality": 2.5
    },
    {
      "userID": 1,
      "date": "2019/06/19",
      "hoursSlept": 10.7,
      "sleepQuality": 1.2
    },
    {
      "userID": 2,
      "date": "2019/06/19",
      "hoursSlept": 9.6,
      "sleepQuality": 2.5
    },
    {
      "userID": 3,
      "date": "2019/06/19",
      "hoursSlept": 7.2,
      "sleepQuality": 3.4
    },
    {
      "userID": 4,
      "date": "2019/06/19",
      "hoursSlept": 5.2,
      "sleepQuality": 2.3
    },
    {
      "userID": 1,
      "date": "2019/06/20",
      "hoursSlept": 9.3,
      "sleepQuality": 1.2
    },
    {
      "userID": 2,
      "date": "2019/06/20",
      "hoursSlept": 10.1,
      "sleepQuality": 2.4
    },
    {
      "userID": 3,
      "date": "2019/06/20",
      "hoursSlept": 9.4,
      "sleepQuality": 1.2
    },
    {
      "userID": 4,
      "date": "2019/06/20",
      "hoursSlept": 8.3,
      "sleepQuality": 1.9
    },
    {
      "userID": 1,
      "date": "2019/06/21",
      "hoursSlept": 7.8,
      "sleepQuality": 4.2
    },
    {
      "userID": 2,
      "date": "2019/06/21",
      "hoursSlept": 4.3,
      "sleepQuality": 4.8
    },
    {
      "userID": 3,
      "date": "2019/06/21",
      "hoursSlept": 8.9,
      "sleepQuality": 3.7
    },
    {
      "userID": 4,
      "date": "2019/06/21",
      "hoursSlept": 10.6,
      "sleepQuality": 2.7
    },
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
  {
    "id": 4,
    "name": "Mae Connelly",
    "address": "28926 Schinner Islands, Turnermouth NE 23720-3230",
    "email": "Marcos_Pollich@hotmail.com",
    "strideLength": 3.1,
    "dailyStepGoal": 4000,
    "friends": [
      48,
      7,
      44,
      8
    ]
  }
]

describe('sleep', function() {

  beforeEach(function() {
    user1 = new User(userData[0])
    user2 = new User(userData[1])
    sleep = new Sleep(sleepData)
    sleep1 = new Sleep(sleepData, user1)
    sleep2 = new Sleep(sleepData, user2)
  })

  it('should be an function', function() {
    expect(Sleep).to.be.a('function')
  })
  it('should have sleepData', function() {
    expect(sleep1.sleepData).to.equal(sleepData)
  })
  it('should have a currentUser', function() {
    expect(sleep1.currentUser).to.deep.equal(user1)
  })
  it('should be able to get a users sleep data', function() {
    expect(sleep1.getUserSleepData()).to.deep.equal([sleepData[0], sleepData[4], sleepData[8], sleepData[12], sleepData[16], sleepData[20],  sleepData[24]])
    expect(sleep2.getUserSleepData()).to.deep.equal([sleepData[1], sleepData[5], sleepData[9], sleepData[13], sleepData[17],  sleepData[21], sleepData[25]])
  })
  it('should be able to get users average daily sleep', function() {
    expect(sleep1.getAverageDailySleep()).to.equal(8.06)
  })
  it('should be able to get users average daily sleep quality', function() {
    expect(sleep1.getAverageSleepQuality()).to.equal(2.61)
  })
  it('should be able to get a how many hours a user slept on a specific day', function() {
    expect(sleep1.getSleepForSpecificDay('2019/06/16')).to.equal(4.1)
  }) 
  it('should be able to get a users sleep quality on a specific day', function() {
    expect(sleep1.getQualityForSpecificDay('2019/06/16')).to.equal(3.8)
  })
  it('should be able to get a week of hours sleep data', function() {
    expect(sleep1.getWeekOfSleepData('2019/06/15')).to.deep.equal([
      { userID: 1, date: '2019/06/15', hoursSlept: 6.1, sleepQuality: 2.2 },
      { userID: 1, date: '2019/06/16', hoursSlept: 4.1, sleepQuality: 3.8 },
      { userID: 1, date: '2019/06/17', hoursSlept: 8, sleepQuality: 2.6 },
      { userID: 1, date: '2019/06/18', hoursSlept: 10.4, sleepQuality: 3.1 },
      { userID: 1, date: '2019/06/19', hoursSlept: 10.7, sleepQuality: 1.2 }, 
      { userID: 1, date: '2019/06/20', hoursSlept: 9.3, sleepQuality: 1.2 }, 
      { userID: 1, date: '2019/06/21', hoursSlept: 7.8, sleepQuality: 4.2 }]
    )
  })
  it('should be able to get total hours slept for each day in a week for one user', function() {
    expect(sleep1.getWeekofHoursSlept('2019/06/15')).to.deep.equal([6.1, 4.1, 8, 10.4, 10.7, 9.3, 7.8])
  })
  it('should be able to get quality of sleep for each day in a week for one user', function() {
    expect(sleep1.getWeekofSleepQuality('2019/06/15')).to.deep.equal([2.2, 3.8, 2.6, 3.1, 1.2, 1.2, 4.2])
  })
  it('should be able to get all users average daily sleep quality', function() {
    expect(sleep1.getAllUsersAverageSleepQuality()).to.deep.equal(3.02)
  })
  // it('should be able to get best sleepers', function() {
  //   expect(sleep.getBestSleepers('2019/06/21')).to.deep.equal(8)
  // })

     

})
