const chai = require('chai');
const assert = require('chai').assert;
const Activity = require('../src/activityClass.js');
// const User = require('../src/userClass.js')
const UserRepository = require('../src/userRepository.js');

describe('Activity', () => {
  let activity, activitySamples;
  
  beforeEach(() => {
    activitySamples = [
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
      {
        "userID": 1,
        "date": "2019/06/18",
        "numSteps": 4419,
        "minutesActive": 165,
        "flightsOfStairs": 33
      },
      {
        "userID": 2,
        "date": "2019/06/18",
        "numSteps": 4662,
        "minutesActive": 181,
        "flightsOfStairs": 31
      },
      {
        "userID": 3,
        "date": "2019/06/18",
        "numSteps": 2546,
        "minutesActive": 274,
        "flightsOfStairs": 26
      },
      {
        "userID": 1,
        "date": "2019/06/19",
        "numSteps": 8429,
        "minutesActive": 275,
        "flightsOfStairs": 2
      },
      {
        "userID": 2,
        "date": "2019/06/19",
        "numSteps": 9858,
        "minutesActive": 243,
        "flightsOfStairs": 44
      },
      {
        "userID": 3,
        "date": "2019/06/19",
        "numSteps": 10961,
        "minutesActive": 188,
        "flightsOfStairs": 17
      },
      {
        "userID": 1,
        "date": "2019/06/20",
        "numSteps": 14478,
        "minutesActive": 140,
        "flightsOfStairs": 12
      },
      {
        "userID": 2,
        "date": "2019/06/20",
        "numSteps": 8153,
        "minutesActive": 74,
        "flightsOfStairs": 10
      },
      {
        "userID": 3,
        "date": "2019/06/20",
        "numSteps": 5369,
        "minutesActive": 129,
        "flightsOfStairs": 46
      },
      {
        "userID": 1,
        "date": "2019/06/21",
        "numSteps": 6760,
        "minutesActive": 135,
        "flightsOfStairs": 6
      },
      {
        "userID": 2,
        "date": "2019/06/21",
        "numSteps": 10225,
        "minutesActive": 174,
        "flightsOfStairs": 26
      },
      {
        "userID": 3,
        "date": "2019/06/21",
        "numSteps": 7498,
        "minutesActive": 199,
        "flightsOfStairs": 13
      },
      {
        "userID": 1,
        "date": "2019/06/22",
        "numSteps": 10289,
        "minutesActive": 119,
        "flightsOfStairs": 6
      },
      {
        "userID": 2,
        "date": "2019/06/22",
        "numSteps": 3605,
        "minutesActive": 124,
        "flightsOfStairs": 31
      },
      {
        "userID": 3,
        "date": "2019/06/22",
        "numSteps": 11342,
        "minutesActive": 53,
        "flightsOfStairs": 17
      },
      {
        "userID": 1,
        "date": "2019/06/23",
        "numSteps": 13928,
        "minutesActive": 218,
        "flightsOfStairs": 21
      },
      {
        "userID": 2,
        "date": "2019/06/23",
        "numSteps": 4148,
        "minutesActive": 142,
        "flightsOfStairs": 0
      },
      {
        "userID": 3,
        "date": "2019/06/23",
        "numSteps": 4665,
        "minutesActive": 219,
        "flightsOfStairs": 9
      },
    ];
    
    userData = [
      {
        "userID": 1,
        "date": "2019/06/15",
        "strideLength": 4.3,
      },
      {
        "userID": 2,
        "date": "2019/06/15",
        "strideLength": 4.5, 
      },
      {
        "userID": 3,
        "date": "2019/06/15", 
        "strideLength": 4.4,
        "dailyStepGoal": 5000,
      },
    ]
    
    userRepo = new UserRepository(userData)  
    activity = new Activity(activitySamples, userData, 3) 
  });
  
  
  it('should be a function', () => {
    assert.isFunction(Activity)
  });

  it('should be an instance of the Activity class', () => {
    assert.equal(activity instanceof Activity, true)
  });

  it('should return stride length', () => {
    activity.extractSingleUser();
    assert.equal(activity.getStrideLength("2019/06/15"), 4.4)
  })

  it('should return a single date', () => {
    activity.extractSingleUser();
    activity.extractSingleActivityData();
    activity.extractSingleDay("2019/06/15")
    assert.deepEqual(activity.oneDay, 
    activity.activityData[2])
  })

  it('should return number of miles walked that day', () => { 
    activity.extractSingleUser();
    activity.extractSingleActivityData();
    activity.extractSingleDay("2019/06/15");
    assert.deepEqual(activity.calculateDailyMiles("2019/06/15"), 6.17)
  });

  it('should return minutes active for a given date', () => {
    assert.equal(activity.calculateMinutesActive("2019/06/23", 3), 219)
  });

  it('should return minutes active for one user', () => {
    assert.deepEqual(activity.getMinsActive(3), [
      116, 152,
       97, 274,
      188, 129,
      199,  53,
      219
    ]);
  });

  it('should return average minutes active over a week', () => {
    activity.extractSingleActivityData();
    assert.equal(activity.calculateWeeklyActiveMins(3), 166)
  });


  it('should return a user\'s daily step goal', () => {
    activity.extractSingleUser(3)
    assert.equal(activity.determineStepGoal(3, "2019/06/15"), 5000)
  });

  it('should return whether a user met their step goal', () => {
    activity.extractSingleUser(3)
    // activity.compareStepsToGoal(3, "2019/06/15");
    assert.equal(activity.compareStepsToGoal(3, "2019/06/15"), true)
  })



});