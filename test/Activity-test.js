const expect = require('chai').expect;
const Activity = require('../src/Activity');
const activityTestData = require('../subData.js/activitySubData');
const userData = require('../subData.js/usersSubData');


describe.only('Activity', () => {
  let activity;

  beforeEach(() => {
    activity = new Activity(activityTestData, userData);
  });
  it('should be a function', () => {
    expect(Activity).to.be.a('function');
  });

  it('should have access to the sample data', () => {
    expect(activityTestData).to.eql(activity.activityData)
  });

  it('should find a single user', () => {
    expect(activity.findOneUser(5)).to.eql([
      {
        userID: 5,
        date: '2019/06/15',
        numSteps: 11374,
        minutesActive: 213,
        flightsOfStairs: 13
      },
      {
        userID: 5,
        date: '2019/06/16',
        numSteps: 9350,
        minutesActive: 167,
        flightsOfStairs: 38
      },
      {
        userID: 5,
        date: '2019/06/17',
        numSteps: 13120,
        minutesActive: 151,
        flightsOfStairs: 25
      },
      {
        userID: 5,
        date: '2019/06/18',
        numSteps: 4765,
        minutesActive: 35,
        flightsOfStairs: 25
      },
      {
        userID: 5,
        date: '2019/06/19',
        numSteps: 8914,
        minutesActive: 191,
        flightsOfStairs: 6
      },
      {
        userID: 5,
        date: '2019/06/20',
        numSteps: 4760,
        minutesActive: 219,
        flightsOfStairs: 46
      },
      {
        userID: 5,
        date: '2019/06/21',
        numSteps: 2177,
        minutesActive: 142,
        flightsOfStairs: 21
      },
      {
        userID: 5,
        date: '2019/06/22',
        numSteps: 10643,
        minutesActive: 213,
        flightsOfStairs: 37
      },
      {
        userID: 5,
        date: '2019/06/23',
        numSteps: 7898,
        minutesActive: 190,
        flightsOfStairs: 23
      },
      {
        userID: 5,
        date: '2019/06/24',
        numSteps: 4283,
        minutesActive: 123,
        flightsOfStairs: 2
      }
    ])
  });

  it('should find user information for a single day', () => {
    expect(activity.findSingleDayInfo(5, '2019/06/24')).to.eql(
      {
        userID: 5,
        date: '2019/06/24',
        numSteps: 4283,
        minutesActive: 123,
        flightsOfStairs: 2
      }
    )
  });

  it('should return one user\'s information', () => {
    expect(activity.findSingleUserData(5)).to.eql({
    id: 5,
    name: 'Erick Schaden',
    address: '514 Mayert Walk, Jordaneside SC 55023-6523',
    email: 'Vanessa_Gerhold@gmail.com',
    strideLength: 3.1,
    dailyStepGoal: 8000,
    friends: [ 13, 44, 49, 33, 10 ]
    })
  });

  it('should return the miles a user has walked for the given date', () => {
    expect(activity.findDailyMiles(5, '2019/06/24')).to.equal(2.51)
  });

  it('should return minutes active for the day', () => {
    expect(activity.findMinutesActive(5, '2019/06/24')).to.equal(123)
  });

  it('should find any week\'s worth of information', () => {
    expect(activity.findAWeek(5, '2019/06/24')).to.eql([
      {
        userID: 5,
        date: '2019/06/18',
        numSteps: 4765,
        minutesActive: 35,
        flightsOfStairs: 25
      },
      {
        userID: 5,
        date: '2019/06/19',
        numSteps: 8914,
        minutesActive: 191,
        flightsOfStairs: 6
      },
      {
        userID: 5,
        date: '2019/06/20',
        numSteps: 4760,
        minutesActive: 219,
        flightsOfStairs: 46
      },
      {
        userID: 5,
        date: '2019/06/21',
        numSteps: 2177,
        minutesActive: 142,
        flightsOfStairs: 21
      },
      {
        userID: 5,
        date: '2019/06/22',
        numSteps: 10643,
        minutesActive: 213,
        flightsOfStairs: 37
      },
      {
        userID: 5,
        date: '2019/06/23',
        numSteps: 7898,
        minutesActive: 190,
        flightsOfStairs: 23
      },
      {
        userID: 5,
        date: '2019/06/24',
        numSteps: 4283,
        minutesActive: 123,
        flightsOfStairs: 2
      }
    ])
  });

  it('should return the average minutes active for a week', () => {
    expect(activity.findWeeklyAvgActiveMins(5, '2019/06/24')).to.equal(159)
  })

  it('should find a user\'s step goal', () => {
    expect(activity.findStepGoal(5)).to.equal(8000)
  });

  it('should determine whether a step goal was met', () => {
    expect(activity.determineStepGoalCompletion(5, '2019/06/23')).to.equal(false)
  })

  it('should show the days when the step goal was reached', () => {
    expect(activity.findExceededStepGoal(5)).to.eql([
      {
        userID: 5,
        date: '2019/06/15',
        numSteps: 11374,
        minutesActive: 213,
        flightsOfStairs: 13
      },
      {
        userID: 5,
        date: '2019/06/16',
        numSteps: 9350,
        minutesActive: 167,
        flightsOfStairs: 38
      },
      {
        userID: 5,
        date: '2019/06/17',
        numSteps: 13120,
        minutesActive: 151,
        flightsOfStairs: 25
      },
      {
        userID: 5,
        date: '2019/06/19',
        numSteps: 8914,
        minutesActive: 191,
        flightsOfStairs: 6
      },
      {
        userID: 5,
        date: '2019/06/22',
        numSteps: 10643,
        minutesActive: 213,
        flightsOfStairs: 37
      }
    ]);
  });

  it('should find the day with most stairs climbed', () => {
    expect(activity.findStairClimbRecord(5)).to.equal(46);
  });

  it('should return the average number of stairs climbed among all users for a specific date', () => {
    expect(activity.findAvgStairsClimbedForAll('2019/06/22')).to.equal(22)
  });

  it('should return the average number of steps for all users on a given date', () => {
    expect(activity.findAvgNumStepsForAll('2019/06/22')).to.equal(7895)
  });

  it('should return the average active minutes for all users for a given date', () => {
    expect(activity.findAvgActiveMinsForAll('2019/06/22')).to.equal(150)
  });

  //**METRIC TO FIND DAY WITH MOST MINUTES ACTIVE */
  it('should return the day(s) with the user\'s most active minutes', () => {
    expect(activity.findMostMinsActive(5)).to.eql([
      {
        userID: 5,
        date: '2019/06/20',
        numSteps: 4760,
        minutesActive: 219,
        flightsOfStairs: 46
      }
    ])
  })


})

