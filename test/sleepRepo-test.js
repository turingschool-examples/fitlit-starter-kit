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

  it('should be able to find users who average sleep quality more than 3 in a week', () => {
    expect(sleepRepo.getGreatSleepersByweek("2019/06/24")).to.deep.equal(
        [{ userID: 2, avgSleepQuality: 3.16 },
        { userID: 6, avgSleepQuality: 3.17 },
        { userID: 7, avgSleepQuality: 3.47 },
        { userID: 8, avgSleepQuality: 3.23 },
        { userID: 10, avgSleepQuality: 3.13 },
        { userID: 12, avgSleepQuality: 3.03 },
        { userID: 17, avgSleepQuality: 3.01 },
        { userID: 18, avgSleepQuality: 3.07 },
        { userID: 19, avgSleepQuality: 3.76 },
        { userID: 21, avgSleepQuality: 3.39 },
        { userID: 23, avgSleepQuality: 3.21 },
        { userID: 24, avgSleepQuality: 3.36 },
        { userID: 31, avgSleepQuality: 3.1 },
        { userID: 32, avgSleepQuality: 3.59 },
        { userID: 37, avgSleepQuality: 3.26 },
        { userID: 38, avgSleepQuality: 3.09 },
        { userID: 39, avgSleepQuality: 3.56 },
        { userID: 41, avgSleepQuality: 3.06 },
        { userID: 43, avgSleepQuality: 3.86 },
        { userID: 44, avgSleepQuality: 3.31 },
        { userID: 47, avgSleepQuality: 3.34 },
        { userID: 48, avgSleepQuality: 3.63 },
        { userID: 49, avgSleepQuality: 3.5 }]
    );
  });

  it('should be able to find the users who slept the most number of hours in a day', () => {
    expect(sleepRepo.getMostSleepUserByDay("2019/06/15")).to.deep.equal([{
      userID: 3,
      date: '2019/06/15',
      hoursSlept: 10.8,
      sleepQuality: 4.7
    }]);
  });

});
