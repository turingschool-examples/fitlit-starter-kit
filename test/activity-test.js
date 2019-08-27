const chai = require('chai');
const expect = chai.expect;
const ActivityUser = require('../src/ActivityUser');
const activityTestData = require('../data/test-data/activity-test-data');

const testUsers = [
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
];

var activityUser
beforeEach(() => {
  activityUser = new ActivityUser(activityTestData, testUsers);
})

describe('ActivityUser', function() {

  it.only('should be a function', function() {
    expect(ActivityUser).to.be.a('function')
  });

  it.only('should find user stride length', function() {
    expect(activityUser.findUserStrideLength(2)).to.equal(4.5)
  });

  // it.only('should find activity user data', function() {
  //   expect(activityUser.findActivityInfo(3)).to.equal('TEST')
  // })
  
  it.only('should be able to calculate the miles a user has walked', function () {
    expect(activityUser.calculateMilesWalked('2019/06/19', 3)).to.equal(9.13)
  });

  it.only('should be able to find minutes active', function() {
    expect(activityUser.findMinutesActive('2019/06/18', 2)).to.equal(181);
  });

  it.only('should calculate average active minutes for any given week', function() {
    expect(activityUser.findAverageMinutesActive('2019/06/23', '2019/07/01', 2)).to.equal(199.4)
  });

  it.only('should find step goal', function() {
    expect(activityUser.getGoal(2)).to.equal(5000);
  })

  it.only('should calculate if step goal was/was not reached', function() {
    expect(activityUser.calculateStepGoal('2019/06/23', 3)).to.equal('335 more steps to go!')
  });

  // it.only('should show info for days exceeding steps goal', function() {
  //   expect(activityUser.findExceptionalDays(2)).to.equal([
  //     {
  //       "userID": 2,
  //       "date": '2019/06/17',
  //       "numSteps": 13750,
  //       "minutesActive": 65,
  //       "flightsOfStairs": 4
  //     },
  //     {
  //       "userID": 2,
  //       "date": '2019/06/19',
  //       "numSteps": 9858,
  //       "minutesActive": 243,
  //       "flightsOfStairs": 44
  //     },
  //     {
  //       "userID": 2,
  //       "date": '2019/06/20',
  //       "numSteps": 8153,
  //       "minutesActive": 74,
  //       "flightsOfStairs": 10
  //     },
  //     {
  //       "userID": 2,
  //       "date": '2019/06/21',
  //       "numSteps": 10225,
  //       "minutesActive": 174,
  //       "flightsOfStairs": 26
  //     },
  //     {
  //       "userID": 2,
  //       "date": '2019/06/24',
  //       "numSteps": 8568,
  //       "minutesActive": 81,
  //       "flightsOfStairs": 31
  //     },
  //     {
  //       "userID": 2,
  //       "date": '2019/06/25',
  //       "numSteps": 10305,
  //       "minutesActive": 214,
  //       "flightsOfStairs": 5
  //     },
  //     {
  //       "userID": 2,
  //       "date": '2019/06/26',
  //       "numSteps": 11522,
  //       "minutesActive": 88,
  //       "flightsOfStairs": 18
  //     },
  //     {
  //       "userID": 2,
  //       "date": '2019/06/28',
  //       "numSteps": 12555,
  //       "minutesActive": 193,
  //       "flightsOfStairs": 45
  //     },
  //     {
  //       "userID": 2,
  //       "date": '2019/06/29',
  //       "numSteps": 8096,
  //       "minutesActive": 181,
  //       "flightsOfStairs": 40
  //     },
  //     {
  //       "userID": 2,
  //       "date": '2019/06/30',
  //       "numSteps": 14974,
  //       "minutesActive": 300,
  //       "flightsOfStairs": 49
  //     },
  //     {
  //       "userID": 2,
  //       "date": '2019/07/01',
  //       "numSteps": 10276,
  //       "minutesActive": 46,
  //       "flightsOfStairs": 3
  //     }
  //   ])
  // })

  it.only('should find stair climbing record', function() {
    expect(activityUser.findGreatestClimb(2)).to.equal(49)
  })

}); //<<----end of describe block
