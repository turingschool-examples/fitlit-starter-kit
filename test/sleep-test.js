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

  it.only('should calculate average hours slept for any given week', function() {
    expect(sleepUser.findAverageHoursSlept("2019/06/16", "2019/06/22", 2)).to.equal(7.5)
  })

  it.only('should calculate average quality of sleep for any given week', function() {
    expect(sleepUser.findAverageQualitySlept("2019/06/16", "2019/06/22", 2)).to.equal(3.3)
  })

  
})