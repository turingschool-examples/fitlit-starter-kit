const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User');
const UsersRepo = require('../src/UsersRepo');
const UserActivity = require('../src/UserActivity');
const userData = require('../subset_data/users-subset');
const activityData = require('../subset_data/activity-subset');

describe('UserActivity', () => {
  let usersRepo, userActivity;
  
  beforeEach( () => {
    usersRepo = new UsersRepo(userData);
    userActivity = new UserActivity(usersRepo.getUserById(1), activityData);
  });

  it('should be a function', () => {
    expect(UserActivity).to.be.a('function');
  });

  it('should be an instance of user activity', () => {
    expect(userActivity).to.be.an.instanceof(UserActivity);
  });

  it('should return user steps in miles for one specific date', () => {
    expect(userActivity.userMilesByDate()).to.equal(11.34);
  });

  it('should return user minutes active for one specific date', () => {
    expect(userActivity.userMinutesActiveByDate('2019/06/15')).to.equal(218);
  });

  it('should return user minutes active for one week', () => {
    expect(userActivity.userMinutesActiveByWeek()).to.deep.equal(219.29);
  });

  it('should return user stepgoal met for one specific date', () => {
    expect(userActivity.userStepGoalMetByDate('2019/06/15')).to.equal(false);
    expect(userActivity.userStepGoalMetByDate('2019/06/17')).to.equal(true);
  });

  it('should return user stepgoal met by date', () => {
    expect(userActivity.userStepGoalMetAllTime()).to.deep.equal(["2019/06/17", "2019/06/20", "2019/06/22", "2019/06/23"]);
  });

  it('should return user stair highscore', () => {
    expect(userActivity.userStairClimbedAllTime()).to.equal(36);
  });

  describe('usersActivityAvgByDate', () => {
    it('should return all users average for one date and metric (numsteps)', () => {
      expect(userActivity.usersActivityAvgByDate('numSteps')).to.equal(8726.4);
    });

    it('should return all users average for one date and metric (minutesActive)', () => {
      expect(userActivity.usersActivityAvgByDate('minutesActive')).to.equal(162.5);
    });

    it('should return all users average for one date and metric (flightsOfStairs)', () => {
      expect(userActivity.usersActivityAvgByDate('flightsOfStairs')).to.equal(22.4);
    });
  });


})
