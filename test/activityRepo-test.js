const chai = require('chai');
const expect = chai.expect;
const ActivityRepo = require('../src/activityRepo');
const activitySampleData = require('../data/activity-sample');

describe('activityRepo', () => {

  let activityRepo;
  let id = 1;
  let userActivityData = activitySampleData.filter(data => data.userID === id);

  beforeEach(() => {
    activityRepo = new ActivityRepo(activitySampleData);
  });

  it('should be a function', () => {
    expect(ActivityRepo).to.be.a('function');
  });

  it('should be an instance of UserRepo', () => {
    expect(activityRepo).to.be.an.instanceOf(ActivityRepo);
  });

  it('should have activity data', () => {
    expect(activityRepo.activityData).to.equal(activitySampleData);
  });
});
