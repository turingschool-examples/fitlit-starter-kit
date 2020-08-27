const chai = require('chai');
const expect = chai.expect;

const activityData = require('./testdata/activity-test-data');
const ActivityRepo = require('../src/ActivityRepo');

describe('ActivityRepo', () => {
  let activityRepo;
  beforeEach(() => {
    activityRepo = new ActivityRepo(activityData);
  });

  it('should be a function', () => {
    expect(ActivityRepo).to.be.a('function');
  });

  it('should instantiate a class of Hydration', () => {
    expect(activityRepo).to.be.an.instanceof(ActivityRepo);
  });

  it('should store an array of activity logs', () => {
    expect(activityRepo.activityData).to.deep.equal(activityData);
  });

  it('should calculate how many miles a user has walked on a given date', () => {
    expect(activityRepo.calculateMilesWalked(DATE)).to.equal(#);
  });

});