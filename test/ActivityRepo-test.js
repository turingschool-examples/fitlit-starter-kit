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

  it('should return the user\'s data for given id', () => {
    const name = userRepo.returnUserData(2).name;
    expect(name).to.equal('Jarvis Considine');
  });

  it('should return the user\'s activity data for given id', () => {
    const  userActivity = activityRepo.returnUserActivityData(2);
    expect(userActivity[0].numSteps).to.equal(3000);
  });


})