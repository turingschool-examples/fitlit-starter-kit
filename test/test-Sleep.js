const chai = require('chai');
const expect = chai.expect;
const UserRepository = require('../src/UserRepository');
const sampleHydration = require('./sampleHydratation');
const User = require('../src/User');

const SleepRepository = require('../src/SleepRepository');
const Sleep = require('../src/Sleep');
const sampleSleep = require('./sampleSleep');

describe('Sleep', () => {

  it('should be an instance of class Sleep', () => {
    const sleepyPerson = new Sleep(sampleSleep);
    expect(sleepyPerson).to.be.an.instanceOf(Sleep)
  })

  it('should find average number of hours slept per day', () => {
    const sleepRepo = new SleepRepository(sampleSleep);
    const sleepyPerson = new Sleep(sleepRepo.getUserData(6));
    expect(sleepyPerson.userTotalAvg('hoursSlept')).to.equal(8);
  })

  it('should find average sleep quality per day over time', () => {
    const sleepRepo = new SleepRepository(sampleSleep);
    const sleepyPerson = new Sleep(sleepRepo.getUserData(6));
    expect(sleepyPerson.userTotalAvg('sleepQuality')).to.equal(3);
  })

  it('should find how many hours a user slept on a specific day', () => {
    const sleepRepo = new SleepRepository(sampleSleep);
    const sleepyPerson = new Sleep(sleepRepo.getUserData(6));
    expect(sleepyPerson.getStatsFromDay('2019/06/23', 'hoursSlept')).to.equal(8.5);
  })

  it('should find sleep quality of a useer on a specific day', () => {
    const sleepRepo = new SleepRepository(sampleSleep);
    const sleepyPerson = new Sleep(sleepRepo.getUserData(1));
    expect(sleepyPerson.getStatsFromDay('2019/06/24', 'sleepQuality')).to.equal(1.3);
  })

  it('should show how average hours a user slept each day over the course of a given week (any week given)', () => {
    const sleepRepo = new SleepRepository(sampleSleep);
    const sleepyPerson = new Sleep(sleepRepo.getUserData(1));
    expect(sleepyPerson.getWeek('2019/06/24')).to.eql([{
      userID: 1,
      date: 1561356000000,
      hoursSlept: 8,
      sleepQuality: 1.3
    },
    {
      userID: 1,
      date: 1561269600000,
      hoursSlept: 7.8,
      sleepQuality: 1.5
    },
    { userID: 1, 
      date: 1561183200000, 
      hoursSlept: 7, 
      sleepQuality: 3 
    },
    {
      userID: 1,
      date: 1561096800000,
      hoursSlept: 7.8,
      sleepQuality: 4.2
    },
    {
      userID: 1,
      date: 1561010400000,
      hoursSlept: 9.3,
      sleepQuality: 1.2
    },
    {
      userID: 1,
      date: 1560924000000,
      hoursSlept: 10.7,
      sleepQuality: 1.2
    },
    {
      userID: 1,
      date: 1560837600000,
      hoursSlept: 10.4,
      sleepQuality: 3.1
    }])
    
    expect(sleepyPerson.getWeeklyAvg('2019/06/24', 'hoursSlept')).to.equal(8.7)

  })


  it('should find average sleep quality of a user each day over the course of a given week (any week given)', () => {
    const sleepRepo = new SleepRepository(sampleSleep);
    const sleepyPerson = new Sleep(sleepRepo.getUserData(1));
    expect(sleepyPerson.getWeeklyAvg('2019/06/24', 'sleepQuality')).to.equal(2.2)
  })

  it('should show pull user data for a given week (any week given)', () => {
    const sleepRepo = new SleepRepository(sampleSleep);
    const sleepyPerson = new Sleep(sleepRepo.getUserData(1));
    expect(sleepyPerson.getWeek('2019/06/24')).to.eql([{
      userID: 1,
      date: 1561356000000,
      hoursSlept: 8,
      sleepQuality: 1.3
    },
    {
      userID: 1,
      date: 1561269600000,
      hoursSlept: 7.8,
      sleepQuality: 1.5
    },
    {
      userID: 1,
      date: 1561183200000,
      hoursSlept: 7,
      sleepQuality: 3
    },
    {
      userID: 1,
      date: 1561096800000,
      hoursSlept: 7.8,
      sleepQuality: 4.2
    },
    {
      userID: 1,
      date: 1561010400000,
      hoursSlept: 9.3,
      sleepQuality: 1.2
    },
    {
      userID: 1,
      date: 1560924000000,
      hoursSlept: 10.7,
      sleepQuality: 1.2
    },
    {
      userID: 1,
      date: 1560837600000,
      hoursSlept: 10.4,
      sleepQuality: 3.1
    }])
  })
})