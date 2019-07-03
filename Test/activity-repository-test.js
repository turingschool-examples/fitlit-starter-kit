const chai = require('chai');
const expect = chai.expect;
const activityData = require('../data/activity-test-data');
// const sleepData2 = require('../data/sleep-test-data-2');
const ActivityRepository = require('../src/activity-repository');

describe("Activity-Repository", () => {
  let activityRepository
  beforeEach(function() {
    activityRepository = new ActivityRepository(activityData);
  });

  it("should be a function", () => {
    expect(ActivityRepository).to.be.a("function")
  });

  it("should be an instance", () => {
    expect(activityRepository).to.be.an.instanceof(ActivityRepository)
  });

});
