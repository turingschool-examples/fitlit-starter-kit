const chai = require('chai');
const expect = chai.expect;

const Activity = require('../src/activity');
const activityRepo = require('../src/activity-repository');
const activityData = require('../data/test-data-activity');
const User = require('../src/user');
const UserRepository = require('../src/users-repository');
const userData = require('../data/test-data');

describe('Activity', () => {
  
  let activity, userRepo, users;

  beforeEach(() => {
    userRepo = new UserRepository(userData);
    user = new User(userData);
    activity = new Activity(activityData, userRepo);
  });

  it('should be a function', () => {
    expect(Activity).to.be.a('function');
  });

  it('should be an instance of Activity', () => {
    expect(activity).to.be.an.instanceof(Activity);
  });

  it('should return miles walked for specific date', () => {
    expect(activity.calculateMilesWalked("2019/06/15", 1)).to.equal(2.9);
  });

  it('should be able to return minutes active for a day', () => {
  expect(activity.calculateMinActive('2019/06/15', 1)).to.equal(140)
  });

  it('should return avg number of minutes active for a week', () => {
    expect(activity.calculateAvgTimeActive('2019/06/20', 1)).to.equal(171.1)
  });

  it('should return true if a user reached their step goal for a specific date', () => {
    expect(activity.compareGoal('2019/06/20', 1)).to.equal(true);
  });

  it('should return all days where the user exceeded their step goal', () => {
    expect(activity.findGoalDays(1)).to.deep.equal(activity.data.filter(data => data.numSteps > userRepo.users[0].dailyStepGoal).filter(person => person.userID === 1));
  });

  it('should return their all time stair record', () => {
    // console.log(activity.data);
    expect(activity.findMostStairs(1)).to.equal(activity.data[5])
  });

  it('should return the steps taken per minute active on a given day', () => {
    expect(activity.calculateStepsAMin('2019/06/20', 1)).to.equal(103.4)
  });

  it('should return an array of step count for a week', () => {
    expect(activity.returnWeekStep('2019/06/21', 1)).to.deep.equal([3577,  6637, 14329, 4419, 8429, 14478, 6760])
  });

  it('should return an array of stairs climbed for a week', () => {
    expect(activity.returnWeekStairs("2019/06/21", 1)).to.deep.equal([16, 36, 18, 33, 2,12, 6]);
  });

  it('should return an array of minutes active for a week', () => {
    expect(activity.returnWeekMin("2019/06/21", 1)).to.deep.equal([  140, 175, 168, 165,275, 140, 135]);
  });

  it('should return the number of steps for the latest day', () => {
    expect(activity.returnStepsDay('2019/06/20', 1)).to.equal(14478);
  });

  it("should return the minutes active for the latest day", () => {
    expect(activity.returnActiveDay("2019/06/20", 1)).to.equal(140);
  });

  it("should return the flights of stairs for the latest day", () => {
    expect(activity.returnStairsDay("2019/06/20", 1)).to.equal(12);
  });

  it('should return an array of only consecutive days with increasing steps', () => {
    expect(activity.getConsecutiveIncrease(1)).to.deep.equal([
    {
      userID: 1,
      date: '2019/06/15',
      numSteps: 3577,
      minutesActive: 140,
      flightsOfStairs: 16
    },
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
    },
    {
      userID: 1,
      date: '2019/06/23',
      numSteps: 13928,
      minutesActive: 218,
      flightsOfStairs: 21
    }
    ]);
  });
});
