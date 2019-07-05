const chai = require('chai');
const expect = chai.expect;

const Activity = require('../src/Activity');
const sampleActivity = require('../data/sample-activity');
const sampleActivityData = sampleActivity.sampleActivityData;

const ActivityRepo = require('../src/ActivityRepo');

const UserRepo = require('../src/UserRepo');
const sampleData = require('../data/sample-users');
const sampleUserData = sampleData.sampleUserData;


describe('Activity', () => {

  let userRepo, user, activityRepo, userActivity, activity;
  beforeEach(() => {
    userRepo = new UserRepo(sampleUserData);
    user = userRepo.returnUserData(2);
    activityRepo = new ActivityRepo(sampleActivityData);
    activity = new Activity(activityRepo.returnUserActivityData(2), user);
  });

  it('should be a function', () => {
    expect(Activity).to.be.a('function');
  });

  it('should be an instance of Activity', () => {
    expect(activity).to.be.an.instanceOf(Activity);
  });

  it('should return the miles walked for a given user and day', () => {
    const miles = activity.returnMilesWalkedForDate("2019/06/23");
    expect(miles).to.equal(8.52);
  })

})