const chai = require('chai');
const expect = chai.expect;

const Activity = require('../src/Activity');
const UsersRepository = require('../src/UsersRepository');

describe('Activity', function() {
  let activityData;
  let userDataSetSample;
  let userRepository;
  let activity;
  let userData;

  beforeEach(function() {
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
      }];

    userDataSetSample = [
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
      }];

    userRepository = new UsersRepository(1);
    userData = userRepository.getUserDataById(userDataSetSample);
    activity = new Activity(userRepository);
  })

  it('should be a function', function() {
    expect(Activity).to.be.a('function');
  });

  it('should be an instance of Activity', function() {
    expect(activity).to.be.an.instanceof(Activity);
  });

  it('should find user\'s miles walked based by day', function() {
    expect(activity.findMilesWalkedByDay(activity.userID, userData, "2019/06/16", activityData)).to.equal("5.4 Miles");
  })

  it('should find user\'s minutes active based on day', function() {
    expect(activity.findMinutesActiveByDay(activity.userID, "2019/06/16", activityData)).to.equal(175);
  })
});
