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
  let userDateRange;

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
      }
    ];

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
      },
      {
        "id": 3,
        "name": "Herminia Witting",
        "address": "85823 Bosco Fork, East Oscarstad MI 85126-5660",
        "email": "Elwin.Tromp@yahoo.com",
        "strideLength": 4.4,
        "dailyStepGoal": 5000,
        "friends": [
          1,
          2
        ]
      }
    ];

    userDateRange = ["2019/06/16","2019/06/17","2019/06/18","2019/06/19",
    "2019/06/20","2019/06/21","2019/06/22"];

    userRepository = new UsersRepository(1);
    userData = userRepository.getUserDataById(userDataSetSample);
    activity = new Activity(userRepository, activityData);
  })

  it('should be a function', function() {
    expect(Activity).to.be.a('function');
  });

  it('should be an instance of Activity', function() {
    expect(activity).to.be.an.instanceof(Activity);
  });

  it('should return user\'s activity data by specific date', function() {
    expect(activity.findUserActivityDataByDate("2019/06/18", activityData))
    .to.deep.equal(
      { userID: 1,
        date: '2019/06/18',
        numSteps: 4419,
        minutesActive: 165,
        flightsOfStairs: 33
      });
  });

  it('should find user\'s miles walked based by day', function() {
    expect(activity.findMilesWalkedByDay(userData, "2019/06/16", activityData))
    .to.equal("5.4 Miles");
  });

  it('should find user\'s minutes active based on day', function() {
    expect(activity.findMinutesActiveByDay("2019/06/16", activityData))
    .to.equal(175);
  });

  it('should find user\'s average minutes active based on a 7 week period',
  function() {
    expect(activity.findAverageMinutesActiveByWeek(userDateRange, activityData))
    .to.equal('168.1 minutes')
  });

  it('should have message that step goal is not acheived', function() {
    expect(activity.determineStepGoalStatusForDay(userData, "2019/06/15",
    activityData)).to.equal('Step goal not acheived');
  });

  it('should have message that step goal is acheived', function() {
    expect(activity.determineStepGoalStatusForDay(userData, "2019/06/20",
    activityData)).to.equal('Step goal acheived!');
  });

  it('should list all days where users exceed steps goals', function() {
    expect(activity.findDaysExceedingStepGoal(userData, activityData))
    .to.deep.equal([
      { date: '2019/06/17', numberOfSteps: 14329 },
      { date: '2019/06/20', numberOfSteps: 14478 },
      { date: '2019/06/22', numberOfSteps: 10289 }
    ]);
  });

  it('should find the user day that have the highest stairs climb all time',
  function() {
    expect(activity.findAllTimeStairClimb(activityData)).to.deep.equal([
      { date: '2019/06/16', numberOfSteps: 36 }
    ]);
  });

  it('should find all time total of flights of stairs taken', function() {
    expect(activity.calculateAllTimeTotalFlightsOfStairsTaken(activityData))
    .to.equal('129 Stairs');
  });

  it('should find average of fleight stairs climb of all users base on a date',
  function() {
    expect(activity.findAllUserAverageStairsClimbedForSpecificDate("2019/06/19",
    activityData)).to.equal('23 Stairs');
  });

  it('should find average number of steps of all users base on a date',
  function() {
    expect(activity.findAllUserAverageStepsTakeForSpecificDate("2019/06/19",
    activityData)).to.equal('9144 Steps');
  });

  it('should find average minutes active of all users base on a date',
  function() {
    expect(activity.findAllUserAverageMinutesActiveForSpecificDate("2019/06/19",
    activityData)).to.equal('259 Minutes Active');
  });

  it('should return user\'s day activity data for each day in a week',
  function() {
    expect(activity.findUserDailyActivityDataForWeek(userDateRange,
      activityData)).to.deep.equal([
      {
        userID: 1,
        date: '2019/06/16',
        numSteps: 6637,
        minutesActive: 175,
        flightsOfStairs: 36
      },
      {
        userID: 1,
        date: '2019/06/17',
        numSteps: 14329,
        minutesActive: 168,
        flightsOfStairs: 18
      },
      {
        userID: 1,
        date: '2019/06/18',
        numSteps: 4419,
        minutesActive: 165,
        flightsOfStairs: 33
      },
      {
        userID: 1,
        date: '2019/06/19',
        numSteps: 8429,
        minutesActive: 275,
        flightsOfStairs: 2
      },
      {
        userID: 1,
        date: '2019/06/20',
        numSteps: 14478,
        minutesActive: 140,
        flightsOfStairs: 12
      },
      {
        userID: 1,
        date: '2019/06/21',
        numSteps: 6760,
        minutesActive: 135,
        flightsOfStairs: 6
      },
      {
        userID: 1,
        date: '2019/06/22',
        numSteps: 10289,
        minutesActive: 119,
        flightsOfStairs: 6
      }
    ]);
  });

  it('should return friend list step count summary', function() {
    userRepository1 = new UsersRepository(3);
    userData1 = userRepository1.getUserDataById(userDataSetSample);
    let userFriends = userData1.friends;
    activity1 = new Activity(userRepository1, activityData);

    expect(activity.findUserFriendsStepTotal(userFriends, userDataSetSample,
      userDateRange)).to.deep.equal([{ name: 'Luisa Hane', stepTotal: 65341 },
      { name: 'Jarvis Considine', stepTotal: 54365 }]);
  });

});
