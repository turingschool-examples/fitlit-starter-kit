const chai = require('chai');
const expect = chai.expect;

const data = require('./data/sleep.js');
const sleepData = data.sleepData;
const Sleep = require('../src/Sleep.js');

describe('Sleep', function() {
  let sleep;
  beforeEach(function() {
    sleep = new Sleep(sleepData);
  });

  it('should be a function', function() {
    expect(Sleep).to.be.a('function');
  });

  it('should be an instance of Sleep', function() {
    expect(sleep).to.be.an.instanceof(Sleep);
  });

  it('should be able to filter userData', function() {
    let userData = sleepData.slice(0, 7);
    expect(sleep.getUserData(1)).to.deep.equal(userData);
  })

  it('can calculate average hours slept per day', function() {
    expect(sleep.calculateAverageHours(111)).to.equal(8)
  })

  it('can calculate average sleep quality', function() {
    expect(sleep.calculateAverageQuality(1)).to.equal(4)
  })

  it('can find hours on exact date', function() {
    expect(sleep.getDayHours(1, '2020/02/03')).to.equal(9.1)
  })

  it('should find quality on exact date', function() {
    expect(sleep.getDayQuality(1, '2020/02/03')).to.equal(2.7)
  })

  it('should be able to find sleep hr values by week', function() {
    let weekData = sleepData.slice(0, 7)
    let filteredData = weekData.map(day => day.hoursSlept)
    expect(sleep.getHoursByWeek(1, '2020/02/08')).to.deep.equal(filteredData)
  })

  it('should be able to find quality values by week', function() {
    let weekData = sleepData.slice(0, 7)
    let filteredData = weekData.map(day => day.sleepQuality)
    expect(sleep.getQualityByWeek(1, '2020/02/08')).to.deep.equal(filteredData)
  })

  it('should be able to find average quality for all users', function() {
    expect(sleep.getAverageQualityOfUsers()).to.equal('2.71')
  })

  it('should be able to find users with high quality sleep', function() {
    
  })
})