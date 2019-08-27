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
    users = new User(userData);
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
    expect(activity.findGoalDays(1)).to.deep.equal(activity.data.filter(data => data.numSteps > userRepo.users[0].dailyStepGoal)
.filter(user => user.userID === 1));
  });
});
