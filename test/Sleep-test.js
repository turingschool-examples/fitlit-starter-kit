const chai = require('chai');
const expect = chai.expect;

const Sleep = require('../src/Sleep');
const data = require('../data/sleep-test-data')

describe('Sleep Test', function () {
  let sleep;

  beforeEach(function () {
    sleep = new Sleep()
  })

  it('should be a function', function () {
    expect(Sleep).to.be.a('function')
  })

  it('should be an instantiation of Sleep', function () {
    expect(sleep).to.be.a.instanceOf(Sleep)
  })

  it('should find the specific sleep data per user', function () {
    expect(sleep.findSleepData(1)).to.be.equal(sleep.data)
    expect(sleep.findSleepData(1)).to.be.equal(data[0])
  })

  it('should average their hours slept per day', function () {
    expect(sleep.averageSleepPerDay()).to.be.a('number')
    expect(sleep.averageSleepPerDay()).to.be.equal(7.06)
  })

  it('should return their average sleep quality per day over all time', function () {
    expect(sleep.averageSleepQualAllTime()).to.be.a('number')
    expect(sleep.averageSleepQualAllTime()).to.equal(2.48)
  })

  it('should return their average sleep hours per day over all time', function () {
    expect(sleep.averageSleepHoursAllTime()).to.be.a('number')
    expect(sleep.averageSleepHoursAllTime()).to.equal(7.06)
  })

  it('should return how many hours they slept for a specific day(identified by a date)', function () {
    expect(sleep.hoursSleptOnDay('06/05/2019')).to.equal(8)
  })

  it('should return how many hours slept each day over the course of a given week(7 days)', function () {
    expect(sleep.hoursSleptGivenWeek('10/05/2019')).to.have.length(7)
    console.log(sleep.hoursSleptGivenWeek('06/05/2019'))
  })

  it('should return their sleep quality each day over the course of a given week(7 days)', function () {
    expect(sleep.sleepQualityGivenWeek('06/05/2019')).to.have.length(7)
  })

  it('should return for all users, the average sleep quality', function () {
    expect(sleep.allUsersSleepQuality()).to.be.a('number')
    expect(sleep.allUsersSleepQuality()).to.equal(2.57)
  })

  it('should', function () {
    sleep.allUsersGoodSleepGivenWeek()
    
    // expect(sleep.allUsersGoodSleepGivenWeek())
  })


})