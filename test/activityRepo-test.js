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
    expect(activityRepo.activityData).to.deep.equal(activitySampleData);
  });

  it('should be able get activity data from specific user', () => {
    expect(activityRepo.getUserActivityData(1)).to.deep.equal(userActivityData);
  });

  it('should calculate all users stairs climbed by date', () => {
    console.log();
    expect(activityRepo.calcAvgStairsClimbedByDay("2019/06/15")).to.equal(24);
  });

  it('should calculate avg steps for all users by date', () => {
    console.log();
    expect(activityRepo.calcAvgStepsTakenByDay("2019/06/15")).to.equal(8386);
  });

  it('should calculate avg minutes active for all users by date', () => {
    console.log();
    expect(activityRepo.calcMinsActiveByDay("2019/06/15")).to.equal(156);
  });
});
