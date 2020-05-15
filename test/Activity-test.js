const chai = require('chai')
const expect = chai.expect
const Activity = require('../src/Activity')
const User = require('../src/User')

let activity
let user
activityData = [
  {
    "userID": 1,
    "date": "2019/06/15",
    "numSteps": 3577,
    "minutesActive": 140,
    "flightsOfStairs": 16
  },
  {
    "userID": 2,
    "date": "2019/06/15",
    "numSteps": 4294,
    "minutesActive": 138,
    "flightsOfStairs": 10
  },
  {
    "userID": 3,
    "date": "2019/06/15",
    "numSteps": 7402,
    "minutesActive": 116,
    "flightsOfStairs": 33
  },
  {
    "userID": 1,
    "date": "2019/06/16",
    "numSteps": 6637,
    "minutesActive": 175,
    "flightsOfStairs": 36
  },
  {
    "userID": 2,
    "date": "2019/06/16",
    "numSteps": 4112,
    "minutesActive": 220,
    "flightsOfStairs": 37
  },

  {
    "userID": 3,
    "date": "2019/06/16",
    "numSteps": 12304,
    "minutesActive": 152,
    "flightsOfStairs": 8
  },
  {
    "userID": 1,
    "date": "2019/06/17",
    "numSteps": 14329,
    "minutesActive": 168,
    "flightsOfStairs": 18
  },
  {
    "userID": 2,
    "date": "2019/06/17",
    "numSteps": 13750,
    "minutesActive": 65,
    "flightsOfStairs": 4
  },
  {
    "userID": 3,
    "date": "2019/06/17",
    "numSteps": 4547,
    "minutesActive": 97,
    "flightsOfStairs": 5
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
  }
]

beforeEach(function() {
  user1 = new User(userData[0])
  activity = new Activity(activityData, user1)
})


describe('Activity', function() {

  it('should be an function', function() {
    expect(Activity).to.be.a('function')
  })
  it('should be an instance of Activty', function() {
    expect(activity).to.be.an.instanceof(Activity)
  })
  it('should be an instance of Activty even if no activityData is passed', function() {
    let activity1 = new Activity('', user1)
    expect(activity1.activityData).to.equal(null)
  })
  it('should be an instance of Activty even if no user is passed', function() {
    let activity1 = new Activity(activityData)
    expect(activity1.currentUser).to.equal('gerenic user')
  })
  it('should get activity data for a specific user', function() {
    expect(activity.getUserActivityData()).to.deep.equal([activityData[0], activityData[3], activityData[6]])
  })
  it('should get a users activity data for a specific day', function() {
    expect(activity.getUserActivityToday('2019/06/15')).to.deep.equal(activityData[0])
  })
  it('should return how many miles a user has walked on a specific day', function() {
    expect(activity.getMilesWalkedToday('2019/06/15')).to.equal('2.9')
  })
  it('should return how many minutes the user was active', function() {
    expect(activity.getUserActivityMinutes('2019/06/16')).to.equal(175)
  })
  it('should return how many minutes the user was active for a given week', function() {
    expect(activity.getWeekActiveMinutesAverage('2019/06/17')).to.deep.equal([activityData[6], activityData[3], activityData[0], undefined, undefined, undefined, undefined])
  })
  it('should return true if the user has reached their step goal for the day', function() {
    expect(activity.getWasStepGoalAchieved('2019/06/17')).to.equal(true)
  })
  it('should return false if the user has not reached their step goal for the day', function() {
    expect(activity.getWasStepGoalAchieved('2019/06/16')).to.equal(false)
  })
  it('should return all days that the user exceded their step goal', function() {
    expect(activity.getAllDaysStepGoalWasExceeded()).to.deep.equal([activityData[6]])
  })
  it('a user should be able to see their all-time stair climbing record', function() {
    expect(activity.getStairClimbRecord()).to.equal(36)
  })
  it('it should return the average number of stairs for all users for a specific date', function() {
    expect(activity.getAverageStairsForAll('2019/06/15')).to.equal(20)
  })
})
