const chai = require('chai');
const expect = chai.expect;
const SleepUser = require('../src/SleepUser');
const sleepTestData = require('../data/test-data/sleep-test-data')

beforeEach(() => {
  sleepUser = new SleepUser(sleepTestData)
})

describe('SleepUser', function() {

  it.only('should be a function', function() {
    expect(SleepUser).to.be.a('function')
  });

  it.only('should find sleep info based on date', function() {
    expect(sleepUser.findDailySleep('2019/06/26', 3)).to.equal(6.1)
  });


  it.only('should find sleep quality based on date', function() {
    expect(sleepUser.findDailySleepQuality('2019/06/19', 3)).to.equal(3.4)
  });
  
  it.only('should calculate average hours slept for any given week', function() {
    expect(sleepUser.findAverageHoursSlept("2019/06/16", "2019/06/22", 2)).to.equal(7.5)

  });

  it.only('should calculate average quality of sleep for any given week', function() {
    expect(sleepUser.findAverageQualitySlept("2019/06/16", "2019/06/22", 2)).to.equal(3.3)
  });

  it.only('should tell user how much sleep they got compared to the night before', function() {
    expect(sleepUser.findSleepComparison("2019/06/28", 2)).to.equal('You slept 42% less than yesteday.')
  });

  it.only('should find weekly information on hours slept', function() {
    expect(sleepUser.findWeeklyHoursSlept("2019/06/16", "2019/06/22", 2)).to.eql([7.5, 5.7, 10.8, 9.6, 10.1, 4.3, 4.8])
  });

  it.only('should find weekly information on hours slept', function() {
    expect(sleepUser.findWeeklySleepQuality("2019/06/16", "2019/06/22", 2)).to.eql([3.8, 3, 3.2, 2.5, 2.4, 4.8, 3.3])
  });


  
})
