const chai = require('chai');
const expect = chai.expect;

const Sleep = require("../src/sleep");
const sampleSleep = require("../data/sampleSleep");

describe('Sleep', function() {

  it('should be a function', function() {
    expect(Sleep).to.be.a('function');
  })

  it('should be an instance of Sleep', function() {
    let sleep = new Sleep(sampleSleep);
    expect(sleep).to.be.an.instanceof(Sleep);
  })

  it('should return the average of hours slept per day for user', function() {
    let sleep = new Sleep(sampleSleep);
    expect(sleep.avgSleepPerUser(3)).to.equal(8.59);
  })

  it('should return the average sleep quality per day for user', function() {
    let sleep = new Sleep(sampleSleep);
    expect(sleep.avgSleepQualityPerDay(3)).to.equal(3.17);
  })

  it('should return the how many hours the user slept per day for a given week', function() {
    let sleep = new Sleep(sampleSleep);
    expect(sleep.hrsSleepInDayForSpecificDay(10, '2019/06/21')).to.equal(4.5);
  })

  it('should return the user sleep quality from specified date', function() {
    let sleep = new Sleep(sampleSleep);
    expect(sleep.sleepQualityForSpecificDay(10, '2019/06/21')).to.equal(2.5);
  })

  it('should return how many hours user slept each day over the course of a given week', function() {
    let sleep = new Sleep(sampleSleep);
    expect(sleep.hrsSleepInDayPerWeek(10, '2019/06/21')).to.deep.equal([ 
      { date: '2019/06/15', hoursSlept: 4.4 },
      { date: '2019/06/16', hoursSlept: 8 },
      { date: '2019/06/17', hoursSlept: 4.3 },
      { date: '2019/06/18', hoursSlept: 7 },
      { date: '2019/06/19', hoursSlept: 5.3 },
      { date: '2019/06/20', hoursSlept: 5.5 },
      { date: '2019/06/21', hoursSlept: 4.5 } 
      ]);
  })

  it('should return the user sleep quality each day over the course of a given week ', function() {
    let sleep = new Sleep(sampleSleep);
    expect(sleep.sleepQualityInDayPerWeek(10, '2019/06/21')).to.deep.equal([ 
      { date: '2019/06/15', sleepQuality: 1.6 },
      { date: '2019/06/16', sleepQuality: 4.4 },
      { date: '2019/06/17', sleepQuality: 3.6 },
      { date: '2019/06/18', sleepQuality: 3.8 },
      { date: '2019/06/19', sleepQuality: 3.1 },
      { date: '2019/06/20', sleepQuality: 1.1 },
      { date: '2019/06/21', sleepQuality: 2.5 } 
      ]);
  })

  it('should return the average sleep quality for all users', function() {
    let sleep = new Sleep(sampleSleep);
    expect(sleep.averageHoursOfSleepForAllUsers()).to.equal(7.56);
  })

  it('should show users that have a sleep quality average greater than 3', function() {
    let sleep = new Sleep(sampleSleep);
    expect(sleep.averageSleepQualityNumber('2019/06/24', 3)).to.deep.equal([ 2, 6, 7, 8, 10 ]);
  })

  it('should show the lowest hours slept overall', function() {
    let sleep = new Sleep(sampleSleep);
    expect(sleep.leastHourSlept()).to.equal(4.1);
  })
})

