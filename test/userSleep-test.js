/* eslint-disable max-len */
'use strict'

const chai = require('chai')
const expect = chai.expect

const UserSleep = require('../src/userSleep')

describe('UserSleep', () => {
  let userSleep,
    userSleepAll,
    userSleep1,
    userSleep2,
    userSleep3,
    userSleep4,
    userSleep5,
    userSleep6,
    userSleep7,
    userSleep8,
    user2Sleep

  beforeEach(() => {
    userSleep1 = {
        'userID': 1,
        'date': '2019/06/15',
        'hoursSlept': 6.1,
        'sleepQuality': 2.2
      },
      userSleep2 = {
        'userID': 1,
        'date': '2019/06/16',
        'hoursSlept': 7.3,
        'sleepQuality': 3.8
      },
      userSleep3 = {
        'userID': 1,
        'date': '2019/06/17',
        'hoursSlept': 7,
        'sleepQuality': 3
      },
      userSleep4 = {
        'userID': 1,
        'date': '2019/06/18',
        'hoursSlept': 7.8,
        'sleepQuality': 1.5
      },
      userSleep5 = {
        'userID': 1,
        'date': '2019/06/19',
        'hoursSlept': 8,
        'sleepQuality': 1.3
      },
      userSleep6 = {
        'userID': 1,
        'date': '2019/06/20',
        'hoursSlept': 5.1,
        'sleepQuality': 3.7
      },
      userSleep7 = {
        'userID': 1,
        'date': '2019/06/21',
        'hoursSlept': 5.1,
        'sleepQuality': 3.7
      },
      userSleep8 = {
        'userID': 1,
        'date': '2019/06/22',
        'hoursSlept': 5.1,
        'sleepQuality': 3.7
      },
      user2Sleep = {
        'userID': 2,
        'date': '2019/06/15',
        'hoursSlept': 10.2,
        'sleepQuality': 5.2
      },
      userSleep = new UserSleep([
        userSleep1,
        userSleep2,
        userSleep3,
        userSleep4,
        userSleep5,
        userSleep6,
        userSleep7,
        userSleep8,
      ]),
      userSleepAll = new UserSleep([
        userSleep1,
        userSleep2,
        userSleep3,
        userSleep4,
        userSleep5,
        userSleep6,
        userSleep7,
        userSleep8,
        user2Sleep
      ])
  })

  it('should be a function', () => {
    expect(UserSleep).to.be.a('function')
  })

  it('should be an instance of User', () => {
    expect(userSleep).to.be.an.instanceof(UserSleep)
  })

  it('should return average number of hours slept per day for one user', () => {
    expect(userSleep.calculateAvgSleepItem('hoursSlept')).to.equal(
      6.437500000000001
    )
  })

  it('should return a user\'s average sleep quality for all time', () => {
    expect(userSleep.calculateAvgSleepItem('sleepQuality')).to.equal(2.8625)
  })

  it('should return the number of hours a user slept for a day', () => {
    expect(userSleep.getOneDayOfData('2019/06/15', 'hoursSlept')).to.equal(6.1)
  })

  it('should return the sleep quality for a user for a day', () => {
    expect(userSleep.getOneDayOfData('2019/06/15', 'sleepQuality')).to.equal(2.2)
  })

  it('should return number of hours slept each day for a user for a week', () => {
    expect(userSleep.calculateSleepItemPerWeek('2019/06/15', 'hoursSlept')).to.deep.equal([6.1, 7.3, 7, 7.8, 8, 5.1, 5.1])
  })

  it('should return sleep quality for each day for a user for a week', () => {
    expect(userSleep.calculateSleepItemPerWeek('2019/06/15', 'sleepQuality')).to.deep.equal([2.2, 3.8, 3, 1.5, 1.3, 3.7, 3.7])
  })
})