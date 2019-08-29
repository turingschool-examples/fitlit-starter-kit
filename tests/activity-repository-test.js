const chai = require('chai');
const expect = chai.expect;

const ActivityRepository = require('../src/activity-repository');
const activityData = require('../data/test-data-activity');
const Activity = require('../src/activity');

describe('ActivityRepository', () => {

  beforeEach(() => {
    activityRepo = new ActivityRepository(activityData);
  });

  it('should be a function', () => {
    expect(ActivityRepository).to.be.a('function');
  });

  it('should be an instance of the ActivityRepository class', () => {
    expect(activityRepo).to.be.an.instanceof(ActivityRepository);
  });

  it('should be able to hold activity data', () => {
    expect(activityRepo.data).to.deep.equal(activityData);
  });

  it('should return the avg number of stairs climbed for all users on a specific date', () => {
    expect(activityRepo.returnAvgStairs('2019/06/20')).to.equal(24);
  });

  it('should return the avg number of steps taken by all users on a given day', () => {
    expect(activityRepo.returnAvgSteps('2019/06/20')).to.equal(7214.8);
  });

  it('should return the avg number of minutes active for all users on a given day', () => {
    expect(activityRepo.returnAvgMinutesActive('2019/06/20')).to.equal(160.4);
  });
});