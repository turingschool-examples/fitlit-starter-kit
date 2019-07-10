const chai = require('chai');
const expect = chai.expect;

const ActivityRepository = require('../src/ActivityRepository');
const activitySub = require('../data/activitySub');

describe("Activity", function() {
  it("should be a function", function() {
    expect(ActivityRepository).to.be.a("function");
  });

  it("should return an array of users with the correct ID", function() {
    const repo = new ActivityRepository(1)
    expect(repo.findId().length).to.equal(7);
  });

  it("should return average steps taken for all users on a specific date", function() {
    const repo = new ActivityRepository(1)
    expect(repo.returnAvgSteps("2019/06/15")).to.equal(7577.25);
  });

  it("should return average stairs climbed for all users on a specific date", function() {
    const repo = new ActivityRepository(1)
    expect(repo.returnAvgStairs("2019/06/15")).to.equal(23.125);
  });

  it("should return average minutes active for all users on a specific date", function() {
    const repo = new ActivityRepository(1)
    expect(repo.returnAvgMins("2019/06/15")).to.equal(140.25);
  });
});