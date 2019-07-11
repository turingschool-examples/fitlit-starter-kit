const chai = require('chai')
const expect = chai.expect;

const SleepRepository = require('../src/sleepRepository');
const fakeSleep = require('../fakeData/fakeSleep');
const sleepData = require('../data/sleep')


describe('SleepRepository', function() {

  it('should be a function', function() {

    expect(SleepRepository).to.be.a('function')
  }),

  it('should be able to find the users sleep data', function() {

    const data = new SleepRepository(fakeSleep, 1)

    let user = data.getUserData();

    expect(user.length).to.equal(9)
  }),

  it('Should be able to take the average of the users hours slept per day', function() {

    const data = new SleepRepository(fakeSleep, 1)
  
    let user = data.getUserAvg('hoursSlept')

    expect(user).to.equal(7.91)

  })

  it('Should be able to take the average of the users hours slept quality day', function () {

    const data = new SleepRepository(fakeSleep, 1)

    let user = data.getUserAvg('sleepQuality')

    expect(user).to.equal(2.53)
  }),
  
  it('Should be able to find the average sleep quality of all users', function() {

    const data = new SleepRepository(fakeSleep)

    let user = data.getTotalAvg('sleepQuality')

    expect(user).to.equal(2.82)
  }),

  it('Should be able to find the user with the most hours slept on a given date', function () {

    const data = new SleepRepository(fakeSleep)

    const date = data.mostHoursSlept('2019/06/15');

    expect(date).to.deep.equal([{
      userID: 3,
      date: '2019/06/15',
      hoursSlept: 10.8,
      sleepQuality: 4.7
    }])
  }),

  it('Should be able to find the users who have averaged over 3 slept quality for a week', function() {

    const data = new SleepRepository(sleepData)

    const date = data.bestSleepQualtiy('2019/06/26')

  })

});