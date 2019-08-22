const chai = require('chai');
const expect = chai.expect;
const SleepRepository = require('../src/SleepRepository');
const sampleSleep = require('./sampleSleep');
const sampleData = require('../test/sampleData');
const User = require('../src/User');

const user4 = [{
  userID: 4,
  date: '2019/06/15',
  hoursSlept: 5.4,
  sleepQuality: 3
},
{
  userID: 4,
  date: '2019/06/16',
  hoursSlept: 8.3,
  sleepQuality: 4.5
},
{
  userID: 4,
  date: '2019/06/17',
  hoursSlept: 5.7,
  sleepQuality: 1.1
},
{
  userID: 4,
  date: '2019/06/18',
  hoursSlept: 5.9,
  sleepQuality: 2.5
},
{
  userID: 4,
  date: '2019/06/19',
  hoursSlept: 5.2,
  sleepQuality: 2.3
},
{
  userID: 4,
  date: '2019/06/20',
  hoursSlept: 8.3,
  sleepQuality: 1.9
},
{
  userID: 4,
  date: '2019/06/21',
  hoursSlept: 10.6,
  sleepQuality: 2.7
},
{
  userID: 4,
  date: '2019/06/22',
  hoursSlept: 7.7,
  sleepQuality: 1.5
},
{
  userID: 4,
  date: '2019/06/23',
  hoursSlept: 9.9,
  sleepQuality: 2.6
},
{
  userID: 4,
  date: '2019/06/24',
  hoursSlept: 5,
  sleepQuality: 3.5
},
{
  userID: 4,
  date: '2019/06/25',
  hoursSlept: 7.2,
  sleepQuality: 2.4
},
{
  userID: 4,
  date: '2019/06/26',
  hoursSlept: 10.5,
  sleepQuality: 5
},
{
  userID: 4,
  date: '2019/06/27',
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
    console.log(sleepRepo.data)
    expect(sleepRepo.getUserData(4)).to.eql(user4)
  })


  it('should get the average hours slept of all users', ()=> {
    const sleepRepo = new SleepRepository(sampleSleep);
    expect(sleepRepo.getAvgHoursSleptAllUsers()).to.equal(7.6)

  })
  it('should get the average quality slept of all users', () => {
    const sleepRepo = new SleepRepository(sampleSleep);
    expect(sleepRepo.getAvgQualitySleptAllUsers()).to.equal(2.9)
  })

  it.skip('should find all users who average a sleep quality grater than 3 for a given week', () => {
    const sleepRepo = new SleepRepository(sampleSleep);
    expect()
  })

  it.only('should return a weeks worth of data for all users', () => {
    const sleepRepo = new SleepRepository(sampleSleep);
  })
})