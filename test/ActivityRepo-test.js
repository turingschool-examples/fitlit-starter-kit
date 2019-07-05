const chai = require('chai');
const expect = chai.expect;

const ActivityRepo = require('../src/ActivityRepo');
const sampleActivity = require('../data/sample-activity');
const sampleActivityData = sampleActivity.sampleActivityData;

const UserRepo = require('../src/UserRepo');
const sampleData = require('../data/sample-users');
const sampleUserData = sampleData.sampleUserData;

describe('ActivityRepo', () => {

  let userRepo, activityRepo;
  beforeEach(() => {
    userRepo = new UserRepo(sampleUserData);
    activityRepo = new ActivityRepo(sampleActivityData);
  });

  it('should be a function', () => {
    expect(ActivityRepo).to.be.a('function');
  });

  it('should be an instance of ActivityRepo', () => {
    expect(activityRepo).to.be.an.instanceOf(ActivityRepo);
  });

  it('should return the user\'s activity data for given id', () => {
    const  userActivity = activityRepo.returnUserActivityData(2);
    expect(userActivity[0].numSteps).to.equal(3000);
  });

  it('should return all user\'s data for given date', () => {
    const recordsForDate = activityRepo.findAllRecordsForGivenDate("2019/06/23");
    expect(recordsForDate.length).to.equal(2);
  })

  it('should return avg num stairs climbed on given date', () => {
    const avgNumStairs = activityRepo.avgNumStairsClimbedGivenDate("2019/06/23");
    expect(avgNumStairs).to.equal(12.5);
  });

  it('should return avg num steps taken on given date', () => {
    const avgNumSteps = activityRepo.avgNumStepsTakenGivenDate("2019/06/23");
    expect(avgNumSteps).to.equal(9500);
  });

  it('should return avg num mins active on given date', () => {
    const avgNumMinsActive = activityRepo.avgNumMinActiveGivenDate("2019/06/23");
    expect(avgNumMinsActive).to.equal(175);
  });

})