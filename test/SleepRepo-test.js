const chai = require("chai");
const expect = chai.expect;

const SleepRepo = require('../src/sleepRepo');
const allSleepInfo = require('../data/sleep-test-data');

let sleepRepo;


describe('User Repo', () => {

  beforeEach(() => {
    sleepRepo = new SleepRepo(allSleepInfo);
  })

  it('should be a function', () => {
    expect(SleepRepo).to.be.a('function');
  })

  it('should be an instance of the user repo', () => {
    expect(sleepRepo).to.be.an.instanceof(SleepRepo);
  })

  it('should be return all users average sleep quality', () => {
    expect(sleepRepo.averageSleepQuality()).to.equal(3);
  })
});
