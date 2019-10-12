const chai = require('chai');
const expect = chai.expect;
const ActivityUser = require('../src/activityUser');
const activitySampleData = require('../data/activity-sample');
const ActivityRepo = require('../src/activityRepo');

describe('activityUser', () => {

  let activityUser;
  let activityRepo;
  let userActivityData;

  beforeEach(() => {
    activityRepo = new ActivityRepo(activitySampleData);
    userActivityData = activityRepo.getUserActivityData(1);
    activityUser = new ActivityUser(userActivityData);
  });

  it('should be a function', () => {
    expect(ActivityUser).to.be.a('function');
  });

  it('should be an instance of UserActivity', () => {
    expect(activityUser).to.be.an.instanceOf(ActivityUser);
  });
});
