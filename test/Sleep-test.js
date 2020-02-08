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

  it('Should be a function', function() {
    expect(Sleep).to.be.a('function');
  });

  it('Should be an instance of Sleep', function() {
    expect(sleep).to.be.an.instanceof(Sleep);
  });

  it('Can calculate average hours slept per day', function() {
    expect(sleep.calculateAverageHours(111)).to.equal(7.1);
  })

  it('Can calculate average sleep quality', function() {
    expect(sleep.calculateAverageQuality(1)).to.equal(3.4);
  })

  it('Can find hours on exact date', function() {
    expect(sleep.getDayHours(1, '2020/02/03')).to.equal(9.1);
  })

  it('Should find quality on exact date', function() {
    expect(sleep.getDayQuality(1, '2020/02/03')).to.equal(2.7);
  })

  it('Should be able to find sleep hr values by week', function() {
    let weekData = sleepData.slice(0, 7);
    let filteredData = weekData.map(day => day.hoursSlept);
    expect(sleep.getHoursByWeek(1, '2020/02/08')).to.deep.equal(filteredData);
  })

  it('Should be able to find quality values by week', function() {
    let weekData = sleepData.slice(0, 7);
    let filteredData = weekData.map(day => day.sleepQuality);
    expect(sleep.getQualityByWeek(1, '2020/02/08')).to.deep.equal(filteredData);
  })

  it('Should be able to find average quality for all users', function() {
    expect(sleep.getAverageQualityOfUsers()).to.equal('2.71');
  })

  it('Should be able to find users with high quality sleep', function() {
    expect(sleep.findGoodSleepers('2020/02/08')).to.deep.equal([1]);
  })

  it('Can find a single longest sleeper', function() {
    expect(sleep.findLongestSleeper('2020/02/02')).to.deep.equal([1])
  })

  it('Can find multiple longest sleepers', function() {
    expect(sleep.findLongestSleeper('2020/02/07')).to.deep.equal([1, 111])
  })

  it('Should be able to find day with most sleep', function() {
    expect(sleep.findMostSleepHours(1, '2020/02/08')).to.equal(10.3)
  })
})
