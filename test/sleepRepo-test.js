const chai = require('chai');
const expect = chai.expect;
const SleepRepository = require('../src/sleepRepository');
const sampleSleepData = require('../data/sampleSleepData');


describe ('SleepRepository', () => {

  let sleepRepository;

  beforeEach(() => {
    sleepRepository = new SleepRepository(sampleSleepData)
  });

  it('should be a function', () => {
    expect(SleepRepository).to.be.a('function');
  });

  it('should hold sleep info for all users', () => {
    expect(sleepRepository.sleepData).to.equal(sampleSleepData);
  });

  it('should get a single users info', () => {
    expect(sleepRepository.getUserById(3)).to.eql([
      { userID: 3, date: '2019/06/15', hoursSlept: 10.8, sleepQuality: 4.7 },
      { userID: 3, date: '2019/06/16', hoursSlept: 10.7, sleepQuality: 3.4 },
      { userID: 3, date: '2019/06/17', hoursSlept: 5.3, sleepQuality: 4.9 },
      { userID: 3, date: '2019/06/18', hoursSlept: 9.8, sleepQuality: 2.6 },
      { userID: 3, date: '2019/06/19', hoursSlept: 7.2, sleepQuality: 3.4 },
      { userID: 3, date: '2019/06/20', hoursSlept: 9.4, sleepQuality: 1.2 },
      { userID: 3, date: '2019/06/21', hoursSlept: 8.9, sleepQuality: 3.7 },
      { userID: 3, date: '2019/06/22', hoursSlept: 9.8, sleepQuality: 2.1 }
    ]);
  });

  it('should get average sleep quality for all users', () => {
    expect(sleepRepository.getAllAvgSleepQuality()).to.equal(3.02);
  });
})
