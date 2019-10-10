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
    expect(sleep.showHoursSlept(sleep.userID, "2019/06/16", sleepData)).to.equal(8.1);
  });
  
});
