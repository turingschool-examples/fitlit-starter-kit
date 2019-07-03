const chai = require('chai');
const expect = chai.expect;


const ActivityRepository = require('../src/ActivityRepository');
const activityData = require('../test-data/activity-fixtures');

describe('ActivityRepository', function() {

  it('should be a function', function() {
    const activityRepository = new ActivityRepository();
    expect(ActivityRepository).to.be.a('function');
  });

  it('should store user information', function() {
    const activityRepository = new ActivityRepository(activityData);
    expect(activityData).to.be.a('array')
  });

  it('should calculate the average stairs climbed for a specific date', function() {
    const activityRepository = new ActivityRepository(activityData);
    expect(activityRepository.calculateAverageStairs('2019/06/15')).to.equal(21);
  });

  it('should calculate the average number of steps taken on a specific date', function() {
    const activityRepository = new ActivityRepository(activityData);
    expect(activityRepository.calculateAverageSteps('2019/06/15')).to.equal(6027);
  });

  it('should calculate the average number of minutes active on a specific date', function() {
    const activityRepository = new ActivityRepository(activityData);
    expect(activityRepository.calculateAverageMinutesActive('2019/06/15')).to.equal(145);
  });
});