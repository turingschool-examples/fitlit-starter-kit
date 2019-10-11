const chai = require('chai');
const expect = chai.expect;
const Sleep = require('../src/sleep.js');
const sleepData = require('../test/sleepSample.js');
const sleepData2 = require('../test/sleepSample2.js');

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
    expect(sleep.showAllUserSleep('sleepQuality', sleepData)).to.equal(2.6);
  });

  it('should show sleep quality for any given week for a specific user', function() {
    expect(sleep.findSleepWeek(10, '2019/06/15', 'sleepQuality', sleepData)).to.deep.equal([1.5, 1.6, 1.7, 1.8, 1.9, 2.0, 2.1]);
  });

  it('should show sleep amount for any given week for a specific user', function() {
    expect(sleep.findSleepWeek(10, '2019/06/15', 'hoursSlept', sleepData)).to.deep.equal([4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 5.0]);
  });

  it('should return an array of user IDs for any users who had an average sleepQuality over 3 for the specified dates', function() {
    expect(sleep.findBestSleepers('2019/06/20', sleepData2)).to.deep.equal([ { userID: 48, data: 3.97 },
      { userID: 37, data: 3.86 },
      { userID: 44, data: 3.8 },
      { userID: 43, data: 3.74 },
      { userID: 17, data: 3.66 },
      { userID: 12, data: 3.51 },
      { userID: 7, data: 3.46 },
      { userID: 32, data: 3.43 },
      { userID: 18, data: 3.39 },
      { userID: 19, data: 3.39 },
      { userID: 6, data: 3.3 },
      { userID: 36, data: 3.29 },
      { userID: 49, data: 3.21 },
      { userID: 20, data: 3.2 },
      { userID: 8, data: 3.1 },
      { userID: 23, data: 3.03 } ]);
  });

  it('should find the users who slept the most on any given day', function() {
    expect(sleep.findSleepiestUsers('2019/06/15', sleepData)).to.deep.equal([3, 6, 9, 2, 1])
  });

  it('should be able to calculate the average hours slept for all users', function() {
    expect(sleep.showAllUserSleep('hoursSlept', sleepData)).to.equal(6.06);
  });
});
