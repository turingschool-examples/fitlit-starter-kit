const chai = require('chai');
const expect = chai.expect;
const Sleep = require('../src/sleep.js');
const sleepData = require('../test/sleepSample.js');

let sleep;

describe('sleep', function() {
  beforeEach(() => {
    sleep = new Sleep(1);
  });

  it('should be an instance of Sleep', function() {
    expect(sleep).to.be.an.instanceOf(Sleep);
  });

  it('should be able to calculate the average hours of sleep per night for a user when given their id', function() {
    expect(sleep.calculateAvgSleep(sleep.userID, 'hoursSlept', sleepData)).to.equal(7.1);
  });

  it('should be able to calculate the average sleep quality of sleep per night for a user when given their id', function() {
    expect(sleep.calculateAvgSleep(sleep.userID, 'sleepQuality', sleepData)).to.equal(2.85);
  });

  it('should return the number of hours slept on any given day for a specific user', function() {
    expect(sleep.showSleep(sleep.userID, "2019/06/16", 'hoursSlept', sleepData)).to.equal(8.1);
  });

  it('should return the quality of sleep on any given day for a specific user', function() {
    expect(sleep.showSleep(sleep.userID, "2019/06/16", 'sleepQuality', sleepData)).to.equal(3.5);
  });

  it('should be able to calculate the average sleep quality for all users', function() {
    expect(sleep.showAllUserSleepQual(sleepData)).to.equal(2.6);
  });

  it('should show sleep quality for any given week for a specific user', function() {
    expect(sleep.findSleepWeek(10, '2019/06/15', 'sleepQuality', sleepData)).to.deep.equal([1.5, 1.6, 1.7, 1.8, 1.9, 2.0, 2.1]);
  });

  it('should show sleep amount for any given week for a specific user', function() {
    expect(sleep.findSleepWeek(10, '2019/06/15', 'hoursSlept', sleepData)).to.deep.equal([4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 5.0]);
  });

});
