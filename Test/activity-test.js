const chai = require('chai');
const expect = chai.expect;
const activityData = require('../data/activity-test-data');
const activityData2 = require('../data/sleep-test-data-2');
const Activity = require('../src/activity');
const ActivityRepository = require('../src/activity-repository')

describe("Sleep", () => {
  let activityRepository
  let activity1
  beforeEach(function() {
    activityRepository = new ActivityRepository(activityData);
    activity1 = new Activity(activityRepository.returnUserSleepData(1));
  });

  it("should be a function", () => {
    expect(Activity).to.be.a("function")
  });

  it("should be an instance", () => {
    expect(activity1).to.be.an.instanceof(Activity)
  });

});
