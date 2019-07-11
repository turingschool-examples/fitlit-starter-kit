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
    expect(sleep.avgHoursSleepPerUser(3)).to.equal(8.59);
  })

  it('should return the average sleep quality per day for user', function() {
    let sleep = new Sleep(sampleSleep);
    expect(sleep.avgSleepQualityAllTime(3)).to.equal(3.17);
  })

  it('should return the how many hours the user slept per day for a given week', function() {
    let sleep = new Sleep(sampleSleep);
    expect(sleep.hrsSleepForSpecificDay(10, '2019/06/21')).to.equal(4.5);
  })

  it('should return the user sleep quality from specified date', function() {
    let sleep = new Sleep(sampleSleep);
    expect(sleep.sleepQualityForSpecificDay(10, '2019/06/21')).to.equal(2.5);
  })

  it('should return how many hours user slept each day over the course of a given week', function() {
    let sleep = new Sleep(sampleSleep);
    expect(sleep.userHrsSleepPerWeek(10, '2019/06/21')).to.deep.eql({ '2019/06/15': 4.4,
    '2019/06/16': 8,
    '2019/06/17': 4.3,
    '2019/06/18': 7,
    '2019/06/19': 5.3,
    '2019/06/20': 5.5,
    '2019/06/21': 4.5 });
  })

  it('should return the user sleep quality each day over the course of a given week ', function() {
    let sleep = new Sleep(sampleSleep);
    expect(sleep.userSleepQualityPerWeek(10, '2019/06/21')).to.deep.eql({'2019/06/15': 1.6,
    '2019/06/16': 4.4,
    '2019/06/17': 3.6,
    '2019/06/18': 3.8,
    '2019/06/19': 3.1,
    '2019/06/20': 1.1,
    '2019/06/21': 2.5 }
    );
  })

  it('should return the average sleep quality for all users', function() {
    let sleep = new Sleep(sampleSleep);
    expect(sleep.averageHoursOfSleepForAllUsers()).to.equal(7.56);
  })

  it('should show users that have a sleep quality average greater than 3', function() {
    let sleep = new Sleep(sampleSleep);
    expect(sleep.averageSleepQualityNumber('2019/06/24', 3)).to.deep.equal([ 2, 6, 7, 8, 10 ]);
  })

  it('should show the lowest hours slept overall for a user', function() {
    let sleep = new Sleep(sampleSleep);
    expect(sleep.userFewestHoursSlept(5)).to.equal(4.1);
  })

  it('should show the most hours slept overall for a user', function() {
    let sleep = new Sleep(sampleSleep);
    expect(sleep.userMostHoursSlept(5)).to.equal(10.5);
  })

})

