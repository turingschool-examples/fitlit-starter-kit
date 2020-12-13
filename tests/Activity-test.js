const chai = require('chai');
const expect = chai.expect;
const Activity = require('../src/Activity');
const User = require('../src/User');

describe('Activity', function() {
  let activity, activity2, user, user2;

  beforeEach(function() {
    activity = new Activity({
      "userID": 1,
      "date": "2019/06/15",
      "numSteps": 3577,
      "minutesActive": 140,
      "flightsOfStairs": 16
    });

    activity2 = new Activity({
      "userID": 2,
      "date": "2019/06/14",
      "numSteps": 5294,
      "minutesActive": 138,
      "flightsOfStairs": 10
    })

    user = new User({
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
    })

    user2 = new User({
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
    })

  });

  it('should hold userId property', function() {
    expect(activity.userID).to.equal(1)
    expect(activity2.userID).to.equal(2)
  });

  it('should hold date property', function() {
    expect(activity.date).to.equal('2019/06/15')
    expect(activity2.date).to.equal('2019/06/14')
  });

  it('should hold number of steps property', function() {
    expect(activity.numSteps).to.equal(3577)
    expect(activity2.numSteps).to.equal(5294)
  });

  it('should hold minutes active property', function() {
    expect(activity.minutesActive).to.equal(140)
    expect(activity2.minutesActive).to.equal(138)
  });

  it('should hold flights of stairs climbed property', function() {
    expect(activity.stairsClimbed).to.equal(16)
    expect(activity2.stairsClimbed).to.equal(10)
  });

  it('should verify if step goal has been met', function() {
    expect(activity.verifyIfStepGoal(user)).to.equal(false)
    expect(activity2.verifyIfStepGoal(user2)).to.equal(true)
  })

  it('should return miles user has walked based on steps', function() {
    expect(activity.getStepMiles(user)).to.equal(2.91)
    expect(activity2.getStepMiles(user2)).to.equal(4.51)
  })
});
