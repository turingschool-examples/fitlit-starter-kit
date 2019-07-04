const chai = require('chai');
const expect = chai.expect;

const sleepData = require('../data/practice-sleep');
const Sleep = require('../src/Sleep');

describe('Sleep', function() {

  let sleep;
  beforeEach(() => {
    sleep = new Sleep(sleepData);
  });

  it('should be a function', function() {
    expect(Sleep).to.be.a('function');
  });
    
  it('should be an instance of Sleep', function() {
    expect(sleep).to.be.an.instanceof(Sleep);
  });

  it('should return a list of current user sleep data', function() {
    expect(sleep.consumerInfo(3)).to.eql([sleepData[0], sleepData[1],sleepData[2],sleepData[3],sleepData[4],sleepData[5],sleepData[6],sleepData[7],sleepData[8]]); 
  });

  it('should return the average hours slept per day', function() {
    expect(sleep.averageHoursSlept(3)).to.equal(9)
  });

  it('should return the average sleep quality per day', function() {
    expect(sleep.averageQualitySleep(3)).to.equal(3)
  });

  it('should return total hours slept for user for specific date', function() {
    expect(sleep.hoursSleptByDate('2019/06/15', 3)).to.eql(10.8);
  });

  it('should return total sleep quality for user for specific date', function() {
    expect(sleep.sleepQualityByDate('2019/06/15', 3)).to.eql(4.7);
  });

  it('should return a list of hours slept over a week for user', function() {
    expect(sleep.dailyHoursPerWeek(3)).to.eql([5.3, 9.8, 7.2, 9.4, 8.9, 9.8, 4.7]);
  });

  it('should return a list of quality sleep over a week for user', function() {
    expect(sleep. dailySleepQualityPerWeek(3)).to.eql([4.9, 2.6, 3.4, 1.2, 3.7, 2.1, 3.9]);
  });

  it('should return the average sleep quality for all users', function() {
    expect(sleep.averageSleepQuality()).to.eql(3);
  });

  it.skip('should return users whose average quality is above 3', function() {
    expect(sleep.userSleepQualityAboveThree("2019/06/15")).to.eql(3);
  });

  it('should return user or users who slept the most number of hours given a date', function() {
    expect(sleep.bestSleeper("2019/06/15")).to.eql([sleepData[0]]);
  });

});