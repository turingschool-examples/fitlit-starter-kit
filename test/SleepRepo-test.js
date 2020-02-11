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

  it('should be return the user with the most sleep this week', () => {
    expect(sleepRepo.usersWithMostSleep('2019/06/15')).to.deep.equal({ userID: 3, date: '2019/06/15', hoursSlept: 10.8, sleepQuality: 4.7 });
  })

  it('should be return the user with the higest user sleep quality for the week.', () => {
    expect(sleepRepo.usersWithHigestSleepQuality('2019/06/15')).to.deep.equal({ userID: 2, date: '2019/06/15', hoursSlept: 7, sleepQuality: 4.7 });
  })

  it.skip('should be return the user with the best sleep quality for the week', () => {
    expect(sleepRepo.usersWithSleepQualityOver3('2019/06/15').to.equal(3));
  })
});
