const chai = require('chai');
const expect = chai.expect;

const Activity = require('../src/activity');

const activityData = require('../data/activity');
const User = require('../src/user');
const UserRepository = require('../src/users-repository')
const userData = require('../data/users');

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
    expect(activity.calculateMilesWalked("2019/06/15")).to.equal(0);
  })

    // it('should be able to return avg minutes active for a week', () => {
  //   expect(activityRepo.calculateAvgMinActive('2019/06/15', 1)).to.equal(0)
  // });
});
