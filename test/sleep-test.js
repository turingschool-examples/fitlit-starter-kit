const chai = require('chai');
const expect = chai.expect;

const userData = require('../data-subsets/users-subset');
const Sleep = require('../src/Sleep');

describe('Sleep', () => {

  it('should be a function', () => {
    expect(Sleep).to.be.a('function');
  });

  it('should be an instance of Sleep', () => {
    const sleep = new Sleep(userData[0]);
    expect(sleep).to.be.an.instanceof(Sleep);
  });

  it('should be able to output user\'s average hours slept per day', () => {
    const sleep = new Sleep(userData[0]);
    expect(sleep.findAvgHoursSlept()).to.equal(8.1);
  });

  it('should be able to retrieve a set of sleep data for a given date', () => {
    const sleep = new Sleep(userData[0]);
    expect(sleep.findDay('2019/06/18')).to.deep.equal(
      { userID: 1,
        date: '2019/06/18',
        hoursSlept: 10.4,
        sleepQuality: 3.1 });
  });

  it('should be able to retrieve sleep quality for a given date', () => {
    const sleep = new Sleep(userData[0]);
    expect(sleep.findSleepQualityDay('2019/06/18')).to.equal(3.1);
  });

  it('should be able to retrieve hoursSlept for a given date', () => {
    const sleep = new Sleep(userData[0]);
    expect(sleep.findSleepHoursDay('2019/06/18')).to.equal(10.4);
  });

  it('should be able to output user\'s average sleep quality per day', () => {
    const sleep = new Sleep(userData[0]);
    expect(sleep.findAvgSleepQual()).to.equal(2.7);
  });

  it('should be able to produce sleep data for a week, given the starting day', () => {
    const sleep = new Sleep(userData[0]);
    expect(sleep.findWeek('2019/06/18')).to.deep.equal([ { userID: 1,
      date: '2019/06/18',
      hoursSlept: 10.4,
      sleepQuality: 3.1 },
    { userID: 1,
      date: '2019/06/19',
      hoursSlept: 10.7,
      sleepQuality: 1.2 },
    { userID: 1,
      date: '2019/06/20',
      hoursSlept: 9.3,
      sleepQuality: 1.2 },
    { userID: 1,
      date: '2019/06/21',
      hoursSlept: 7.8,
      sleepQuality: 4.2 },
    { userID: 1, date: '2019/06/22', hoursSlept: 7, sleepQuality: 3 },
    { userID: 1,
      date: '2019/06/23',
      hoursSlept: 7.8,
      sleepQuality: 1.5 },
    { userID: 1,
      date: '2019/06/24',
      hoursSlept: 8,
      sleepQuality: 1.3 } ]);
  });

  it('should be able to produce sleep quality per day for a week, given the starting day', () => {
    const sleep = new Sleep(userData[0]);
    expect(sleep.findSleepQualityWeek('2019/06/15')).to.deep.equal([2.2, 2.6, 3.1, 1.2, 1.2, 4.2, 3]);
  });

  it('should be able to produce hours slept per day for a week, given the starting day', () => {
    const sleep = new Sleep(userData[0]);
    expect(sleep.findSleepHoursWeek('2019/06/18')).to.deep.equal([10.4, 10.7, 9.3, 7.8, 7, 7.8, 8]);
  });

  it('should be able to display the best and worst nights of sleep for the user\'s week', () => {
    const sleep = new Sleep(userData[0]);
    expect(sleep.findBestAndWorstSleep('2019/06/18')).to.deep.equal([7, 10.7]);
  });

});