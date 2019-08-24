const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User');
const ActivityRepository = require('../src/ActivityRepository');
const userData = require('../data-subsets/users-subset')
const activityData = require('../data-subsets/activity-subset');

describe('activityRepository', () => {

  let activityRepository;

  beforeEach( () => {
    activityRepository = new ActivityRepository(activityData);
  });

  it('should be a function', () => {
    expect(ActivityRepository).to.be.a('function');
  });

  it('should be an instance of ActivityRepository', () => {
    expect(activityRepository).to.be.an.instanceof(ActivityRepository);
  });

  it('should find average number of stairs climbed for a specified date', () => {
      expect(activityRepository.avgStepsClimbed('2019/06/15')).to.equal(22);
  });

  it('should find average number of steps taken for a specified date', () => {
    expect(activityRepository.avgStepsTaken('2019/06/15')).to.equal(7231);
  });

  it('should find average minutes active for a specified date', () => {
    expect(activityRepository.avgMinutesActive('2019/06/15')).to.equal(137.6);
  });


});  