const chai = require('chai');
const expect = chai.expect;

const ActivityRepo = require('../src/ActivityRepo');
const sampleActivity = require('../data/sample-activity');
const sampleActivityData = sampleActivity.sampleActivityData;

const UserRepo = require('../src/UserRepo');
const sampleData = require('../data/sample-users');
const sampleUserData = sampleData.sampleUserData;

describe('ActivityRepo', () => {

  let userRepo, activityRepo, user, date;
  beforeEach(() => {
    userRepo = new UserRepo(sampleUserData);
    activityRepo = new ActivityRepo(sampleActivityData, sampleUserData);
    user = userRepo.returnUserData(2);
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

  it('should return all users\' data for given date', () => {
    const recordsForDate = activityRepo.findAllRecordsForGivenDate("2019/06/23");
    expect(recordsForDate.length).to.equal(5);
  })

  it('should return avg num stairs climbed on given date', () => {
    const avgNumStairs = activityRepo.avgNumStairsClimbedGivenDate("2019/06/23");
    expect(avgNumStairs).to.equal(10);
  });

  it('should return avg num steps taken on given date', () => {
    const avgNumSteps = activityRepo.avgNumStepsTakenGivenDate("2019/06/23");
    expect(avgNumSteps).to.equal(6800);
  });

  it('should return avg num mins active on given date', () => {
    const avgNumMinsActive = activityRepo.avgNumMinActiveGivenDate("2019/06/23");
    expect(avgNumMinsActive).to.equal(140);
  });

  it('should return each friend\'s weekly step total', () => {
    const steps = activityRepo.returnFriendsWeeklyStepData("2019/06/23", user);
    expect(steps.length).to.equal(4);
    expect(steps[0].x).to.equal('Jarvis Considine'); 
  });

  it('should declare the friends step challenge winner\'s name', () => {
    const name = activityRepo.returnFriendsWeeklyStepWinner("2019/06/23", user);
    expect(name.x).to.equal('Jarvis Considine')
  });

})