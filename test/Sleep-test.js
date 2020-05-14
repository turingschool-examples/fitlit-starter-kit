const chai = require('chai');
const expect = chai.expect;

const Sleep = require('../src/Sleep');

describe('Sleep', () => {
  let sleep;

  beforeEach(() => {
    sleep = new Sleep

  })
  it('should be a function', () => {
    expect(Sleep).to.be.a('function')
  })

  it('should be an instance of Sleep', () => {
    expect(sleep).to.be.an.instanceOf(Sleep)
  })

//
  it('should return user Sleep data', () => {
    expect(sleepData.length).to.equal()
  })

  it('should return Sleep Data for a specific user', () => {
    expect(userSleep.length).to.equal()
  })

  it('should return hours slept for a given day', () => {
    expect(sleep.getDailySleepHours()).to.equal()
  })

  it('should return sleep quality for a given day', () => {
    expect(sleep.getDailySleepQual()).to.equal()
  })

  it('should calculate average all time sleep hours', () => {
    expect(sleep.getAvgSleepHours()).to.equal()
  })

  it('should calculate average all time sleep quality', () => {
    expect(sleep.getAvgSleepQual()).to.equal()
  })

  it('should return specific sleep hours over 7 days', () => {
    expect(sleep.getWeeklySleepHours).to.equal()
  })

  it('should return specific sleep quality over 7 days', () => {
    expect(sleep.getWeeklySleepQual).to.equal()
  })
})