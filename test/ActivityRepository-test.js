const chai = require('chai');
const expect = chai.expect;
const testData = require('../data/user-test-data');
const userTestData = testData.testUsers;
const activityTestDataFile = require('../data/activity-test-data');
const activityTestDataArray = activityTestDataFile.testSleep;
const Activity = require('../src/Activity');
const User = require('../src/User');

describe('Activity', () => {
  let activityData;

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

  it('should be an instance of Hydration', () => {
    expect(sleepData[0]).to.be.an.instanceof(ActivityRepository);
  })
