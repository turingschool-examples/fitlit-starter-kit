const chai = require('chai');
const expect = chai.expect;
const testData = require('../data/user-test-data');
const userTestData = testData.testUsers;
const activityTestDataFile = require('../data/activity-test-data');
const activityTestDataArray = activityTestDataFile.testActivity;
const Activity = require('../src/Activity');
const ActivityRepository = require('../src/ActivityRepository');
const User = require('../src/User');

describe('Activity', () => {
  let activityData, activityRepository;

  beforeEach(() => {
    activityData = activityTestDataArray.map(activityObject => {
      const activity = new Activity(activityObject);
      return activity;
    });
    activityRepository = new ActivityRepository(activityData);
  })

  it('should be a function', () => {
    expect(ActivityRepository).to.be.a('function');
  })

  it('should be an instance of ActivityRepository', () => {
    expect(activityRepository).to.be.an.instanceof(ActivityRepository);
  })

  it('should hold all Activity objects', () => {
    expect(activityRepository.activityInstanceData[0]).to.deep.equal(activityData[0]);
  })

  it('should return miles walked on date', () => {
    expect(activityRepository.returnMilesWalked(1, "2019/06/15")).to.equal(3.9);
    expect(activityRepository.returnMilesWalked(2, "2019/06/15")).to.equal(1.0);
  })

  it('should return minutes active on date', () => {
    expect(activityRepository.returnMinutesActive(1, "2019/06/15")).to.equal(3.9);
    expect(activityRepository.returnMinutesActive(2, "2019/06/15")).to.equal(1.0);
  })

})
