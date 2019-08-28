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
    activity = new Activity(activityData);
    userRepo = new UserRepository(userData);
    user = new User(userData);
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


  // **** Iteration 5 ****
  // it('should return an array of data for a users friends', () => {
  //   expect(user.getFriends())
  // })

  // it('should compare user steps for a week compared to friends', () => {
  //   expect(activity.determineWinner('2019/06/20'))
  // })
});
