const chai = require('chai');
const expect = chai.expect;

const activityData = require('../data/activity-test-data');
const userData = require('../data/users-test-data');

const ActivityRepo = require('../src/ActivityRepo');

describe('ActivityRepo', () => {

  let activityRepo;
  beforeEach(() => {
    activityRepo = new ActivityRepo(activityData, userData)
  })

  it('should be a function', () => {
    expect(ActivityRepo).to.be.a('function');
  });

  it('should return the average number of stair climbed for all users for a specific date', () => {
    expect(activityRepo.returnAverage("2019/06/15", 'flightsOfStairs')).to.equal(21);
  });

  it('should return the average number of steps for all users taken for a specific date', () => {
    expect(activityRepo.returnAverage("2019/06/15", 'numSteps')).to.equal(6027);
  });

  it('should return the average minutes active for a specific date for all users', () => {
    expect(activityRepo.returnAverage("2019/06/15", 'minutesActive')).to.equal(144);
  });

  it('should return the highest minutes active of all time', () => {
    expect(activityRepo.returnMostActive()).to.eql(['Luisa Hane', 275]);
  });

})