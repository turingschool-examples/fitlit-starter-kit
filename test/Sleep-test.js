const chai = require('chai');
const expect = chai.expect;

const Sleep = require('../src/Sleep');
const SleepRepo = require('../src/SleepRepo');
const sampleData = require('../data/sample-sleep');
const sampleSleepData = sampleData.sampleSleepData;

describe('Sleep', () => {

  let sleep, givenDate;
  beforeEach(() => {
    sleepRepo = new SleepRepo(sampleSleepData);
    sleep = new Sleep(sleepRepo.returnUserData(2));
    givenDate = "2019/06/23";
  });

  it('should be a function', () => {
    expect(Sleep).to.be.a('function');
  });

  it('should be an instance of Sleep', () => {
    expect(sleep).to.be.an.instanceOf(Sleep);
  });

  it('should return the average of a given user\'s sleep hours', () => {
    let average = sleep.returnUserAverageSleepHours();
    expect(average).to.equal(7);
  });

  it('should return the average of a given user\'s sleep quality', () => {
    let average = sleep.returnUserAverageSleepQuality();
    expect(average).to.equal(2);
  });

  it('should return a given user\'s hours slept for a given date', () => {
    let hours = sleep.returnUserSleepHoursDate(givenDate);
    expect(hours).to.equal(7);
  });

  it('should return a given user\'s sleep quality for a given date', () => {
    let quality = sleep.returnUserSleepQualityDate(givenDate);
    expect(quality).to.equal(2);
  });

  it('should return the hours slept for a user in a given week', () => {
    let hours = sleep.returnUserSleepHoursWeek(givenDate);
    expect(hours[0]['y']).to.equal(7);
  });

  it('should return the sleep quality for a user in a given week', () => {
    let hours = sleep.returnUserSleepQualityWeek(givenDate);
    expect(hours[0]['y']).to.equal(2);
  });

  it('should return a user\'s all time hours slept', () => {
    let hours = sleep.returnUserAllTimeSleepHours();
    expect(hours).to.equal(63);
  })

})