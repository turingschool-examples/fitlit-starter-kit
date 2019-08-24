const chai = require('chai');
const expect = chai.expect;
const SleepRepository = require('../src/SleepRepository');
const sampleSleep = require('./sampleSleep');
const sampleData = require('../test/sampleData');
const User = require('../src/User');

const user4 = [{
  userID: 4,
  date: 1560578400000,
  hoursSlept: 5.4,
  sleepQuality: 3
},
{
  userID: 4,
  date: 1560664800000,
  hoursSlept: 8.3,
  sleepQuality: 4.5
},
{
  userID: 4,
  date: 1560751200000,
  hoursSlept: 5.7,
  sleepQuality: 1.1
},
{
  userID: 4,
  date: 1560837600000,
  hoursSlept: 5.9,
  sleepQuality: 2.5
},
{
  userID: 4,
  date: 1560924000000,
  hoursSlept: 5.2,
  sleepQuality: 2.3
},
{
  userID: 4,
  date: 1561010400000,
  hoursSlept: 8.3,
  sleepQuality: 1.9
},
{
  userID: 4,
  date: 1561096800000,
  hoursSlept: 10.6,
  sleepQuality: 2.7
},
{
  userID: 4,
  date: 1561183200000,
  hoursSlept: 7.7,
  sleepQuality: 1.5
},
{
  userID: 4,
  date: 1561269600000,
  hoursSlept: 9.9,
  sleepQuality: 2.6
},
{
  userID: 4,
  date: 1561356000000,
  hoursSlept: 5,
  sleepQuality: 3.5
},
{
  userID: 4,
  date: 1561442400000,
  hoursSlept: 7.2,
  sleepQuality: 2.4
},
{
  userID: 4,
  date: 1561528800000,
  hoursSlept: 10.5,
  sleepQuality: 5
},
{
  userID: 4,
  date: 1561615200000,
  hoursSlept: 4.3,
  sleepQuality: 2.9
}]

describe('SleepRepository', () => {
  it('Should be an instance of SleepRepository', () => {
    const sleepRepo = new SleepRepository(sampleSleep);
    expect(sleepRepo).to.be.an.instanceOf(SleepRepository)
  })

  it('should get users data by id', () => {
    const sleepRepo = new SleepRepository(sampleSleep);
    expect(sleepRepo.getUserData(4)).to.eql(user4)
  })


  it('should get the average hours slept of all users', ()=> {
    const sleepRepo = new SleepRepository(sampleSleep);
    expect(sleepRepo.getAvgSleepStatsAllUsers(sleepRepo.data, 'hoursSlept')).to.equal(7.6)

  })
  it('should get the average quality slept of all users', () => {
    const sleepRepo = new SleepRepository(sampleSleep);
    expect(sleepRepo.getAvgSleepStatsAllUsers(sleepRepo.data, 'sleepQuality')).to.equal(3)
  })

  it('should find the average hours slept by all users for a specific week', () => {
    const sleepRepo = new SleepRepository(sampleSleep);
    expect(sleepRepo.getAvgSleepStatsAllUsers(sleepRepo.getWeekOfUsers('2019/06/23'), 'hoursSlept')).to.equal(7.8)
  })

  it('should find the average sleep quality by all users for a specific week', () => {
    const sleepRepo = new SleepRepository(sampleSleep);
    expect(sleepRepo.getAvgSleepStatsAllUsers(sleepRepo.getWeekOfUsers('2019/06/23'), 'sleepQuality')).to.equal(3)
  })

  it('should find all users who average a sleep quality grater than 3 for a given week', () => {
    const sleepRepo = new SleepRepository(sampleSleep);
    expect(sleepRepo.findBestSleepers('2019/06/22')).to.eql([2, 3, 5])
  });
  it('should find the longest sleeper(s) for a given day', () => {
    const sleepRepo = new SleepRepository(sampleSleep);
    expect(sleepRepo.findTopSleeperByDay('2019/06/23')).to.eql([{
      userID: 4,
      date: 1561269600000,
      hoursSlept: 9.9,
      sleepQuality: 2.6
    }])
  })
})