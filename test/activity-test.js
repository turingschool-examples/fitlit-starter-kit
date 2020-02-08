const chai = require('chai');
const expect = chai.expect;

const Activity = require('../src/Activity')
const User = require('../src/User');
const UserRepository = require('../src/UserRepository');

describe('Activity', function() {

  let activity, activityData, userRepo, user;

  beforeEach(() => {
    activityData = [
    {
      "userID": 1,
      "date": "2019/09/16",
      "numSteps": 3577,
      "minutesActive": 140,
      "flightsOfStairs": 16
    },
    {
      "userID": 1,
      "date": "2019/09/17",
      "numSteps": 2456,
      "minutesActive": 134,
      "flightsOfStairs": 23
    },
    {
      "userID": 1,
      "date": "2019/09/18",
      "numSteps": 5342,
      "minutesActive": 56,
      "flightsOfStairs": 45
    },
    {
      "userID": 1,
      "date": "2019/09/19",
      "numSteps": 4237,
      "minutesActive": 164,
      "flightsOfStairs": 38
    },
    {
      "userID": 1,
      "date": "2019/09/20",
      "numSteps": 6783,
      "minutesActive": 120,
      "flightsOfStairs": 78
    },
    {
      "userID": 1,
      "date": "2019/09/21",
      "numSteps": 3769,
      "minutesActive": 124,
      "flightsOfStairs": 26
    },
    {
      "userID": 1,
      "date": "2019/09/22",
      "numSteps": 2975,
      "minutesActive": 90,
      "flightsOfStairs": 33
    },
    {
      "userID": 1,
      "date": "2019/06/15",
      "numSteps": 3455,
      "minutesActive": 50,
      "flightsOfStairs": 23
    },
    {
      "userID": 1,
      "date":"2019/06/16",
      "numSteps": 10000,
      "minutesActive": 130,
      "flightsOfStairs": 23
    }
  ]

  userData = 
    {
      'id': 1,
      'name': 'Luisa Hane',
      'address': '15195 Nakia Tunnel, Erdmanport VA 19901-1697',
      'email': 'Diana.Hayes1@hotmail.com',
      'strideLength': 4.3,
      'dailyStepGoal': 10000,
      'friends': [
        16,
        4,
        8
      ]
    };

  activity = new Activity(activityData);
  userRepo = new UserRepository(userData);
  user = new User(userData);
});

  it('should be a function', function() {
    expect(Activity).to.be.a('function');
  });

  it('should be an instance of acitivty', function() {
    expect(activity).to.be.an.instanceof(Activity);
  });

  it('should calculate miles walked today', function() {
    expect(activity.calculateMilesToday(1, "2019/06/15", 4.3)).to.equal(2.81);
  });

  it('should calculate miles walked today', function() {
    expect(activity.getMinutesActive(1, "2019/06/16")).to.equal(130);
  });

  it('should show the minutes active in the past 7 days', function() {
    expect(activity.getPrevDaysActive(1, "2019/09/22")).to.deep.equal([140,134, 56, 164, 120, 124, 90]); 
  });

  it('should be able to calculate the average minutes active from the past 7 days', function() {
    expect(activity.calculateActiveAverage(1, "2019/09/22")).to.equal(118.29);
  });

  describe('check reached goal', function() {
    
    it('should say if your goal is reached', function() {
      expect(activity.checkReachedStepGoal(user, "2019/06/16")).to.equal(true);
    });
    
    it('should say if your goal is not reached', function() {
      expect(activity.checkReachedStepGoal(user, "2019/09/16")).to.equal(false);
    });
  });
});