const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User');
const UserRepo = require('../src/UserRepo');
const Sleep = require('../src/Sleep');
const data = require('../data/sleep-test-data')

describe('Sleep Test', function () {
  let person;
  let userRepo;
  let sleep;

  beforeEach(function () {
    person = new User(1)
    userRepo = new UserRepo()
    sleep = new Sleep(0)
  })

  it('should be a function', function () {
    expect(User).to.be.a('function')
  })

  it('should be an instantiation of Sleep', function () {
    expect(person).to.be.a.instanceOf(User)
  })

  it('should find the speciifc sleep data per user', function () {
    expect(sleep.findSleepData().userID).to.be.equal(sleep.userID)
    expect(sleep.findSleepData()).to.be.equal(data[0])
  })

  it('should average their hours slept per day', function () {
    expect(sleep.averageSleepPerDay()).to.be.a('number')
    expect(sleep.averageSleepPerDay()).to.be.equal(7.06)
  })

  it('should return their average sleep quality per day over all time', function () {
    expect(sleep.averageSleepAllTime()).to.be.a('number')
    expect(sleep.averageSleepAllTime()).to.equal(2.48)
  })

  it('should return how many hours they slept for a specific day(identified by a date)', function () {
    expect(sleep.hoursSleptOnDay('06/05/2019')).to.equal(8)
  })

  it('should return how many hours slept each day over the course of a given week(7 days)', function () {
    expect(sleep.hoursSleptGivenWeek('06/05/2019')).to.have.length(7)
    expect(sleep.hoursSleptGivenWeek('06/05/2019')).to.deep.include({ date: '08/05/2019', hoursSlept: 8.1 })
  })

  it('should return their sleep quality each day over the course of a given week(7 days)', function () {
    expect(sleep.sleepQualityGivenWeek('06/05/2019')).to.have.length(7)
    expect(sleep.sleepQualityGivenWeek('06/05/2019')).to.deep.include({ date: '11/05/2019', quality: 3.5 })
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