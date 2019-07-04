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

  it("should return average stairs climbed for a certain date", () => {
    expect(activityRepository.aveFlightsOfStairsClimbedForDay("2019/06/15")).to.eql(19.7)
  });

  it("should return average steps taken for a certain date", () => {
    expect(activityRepository.aveStepsTakenForDay("2019/06/15")).to.eql(5091)
  });

  it("should return average minutes active for a certain date", () => {
    expect(activityRepository.aveMinutesActiveForDay("2019/06/15")).to.eql(131.3)
  });

  it("should return how many minutes active for a given day, identified by ID", () => {
    expect(activityRepository.minutesActiveForUser(1, "2019/06/15")).to.eql(140)
  });

});
