const chai = require('chai');
const expect = chai.expect;
const SleepRepo = require('../src/sleepRepo');
const sleepDataSample = require('../data/sleep-sample');


describe('SleepRepo', () => {
  let sleepRepo;
  let id = 2;
  let userSleepData = sleepDataSample.filter(data => data.userID === id);


  beforeEach(() => {
    sleepRepo = new SleepRepo(sleepDataSample);
  });

  it('should be a function', () => {
    expect(SleepRepo).to.be.a('function');
  });

  it('should be an instance of UserRepo', () => {
    expect(sleepRepo).to.be.an.instanceOf(SleepRepo);
  });

  it('should contain the sleep data for all users', () => {
    expect(sleepRepo.sleepData).to.deep.equal(sleepDataSample);
  });

  it('should be able to get the users specific sleep data', () => {
    expect(sleepRepo.getUserSleepData(id)).to.deep.equal(userSleepData);
  });

  it('should be able to get the average sleep quality of all users', () => {
    expect(sleepRepo.getAvgSleepQuality()).to.deep.equal(2.93);
  });

  // it('should be able to find users who average sleep quality more than 3 in a week', () => {
  //   expect(sleepRepo.getGreatSleepersByweek("2019/06/24")).to.equal();
  // });

  it('should be able to find the users who slept the most number of hours in a day', () => {
    expect(sleepRepo.getMostSleepUserByDay("2019/06/15")).to.deep.equal([ { userID: 3,
    date: '2019/06/15',
    hoursSlept: 10.8,
    sleepQuality: 4.7 } ]);
  });

});
