const chai = require('chai');
const expect = chai.expect;

const Sleep = require('../src/Sleep');
const sleepSampleData = require('../sample-data/sleep-sample')

describe('Sleep', () => {
  let sleep1, sleep2, sleep3, sleep4, sleep5, 
    sleep6, sleep7, sleep8, sleep9, 
    sleep10, sleep11, sleep12, sleep13;

  let sleepData;
  let sleep;

  beforeEach(() => {
    sleep1 = sleepSampleData[0];
    sleep2 = sleepSampleData[1];
    sleep3 = sleepSampleData[2];
    sleep4 = sleepSampleData[3];
    sleep5 = sleepSampleData[4];
    sleep6 = sleepSampleData[5];
    sleep7 = sleepSampleData[6];
    sleep8 = sleepSampleData[7];
    sleep9 = sleepSampleData[8];
    sleep10 = sleepSampleData[9];
    sleep11 = sleepSampleData[10];
    sleep12 = sleepSampleData[11];
    sleep13 = sleepSampleData[12];

    sleepData = [
      sleep1, sleep2, sleep3, sleep4,
      sleep5, sleep6, sleep7, sleep8,
      sleep9, sleep10, sleep11, sleep12,
      sleep13
    ]

    sleep = new Sleep(1, sleepData)
  })

  it('should be a function', () => {
    expect(Sleep).to.be.a('function')
  })

  it('should be an instance of Sleep', () => {
    expect(sleep).to.be.an.instanceOf(Sleep)
  })

  it('should throw an error if no arguments is passed as an argument', () => {
    expect(() => { new Sleep() }).to.throw(Error);
  })

  it('should throw an error if an invalid id is passed as an argument', () => {
    sleep2 = new Sleep(500, sleepData)
    expect(sleep2).to.deep.equal({ userSleep: [] });
  })

  it('should return user Sleep data', () => {
    expect(sleepData.length).to.equal(13)
  })

  it('should return Sleep Data for a specific user', () => {
    expect(sleep.userSleep.length).to.equal(10)
  })

  it('should return a date', () => {
    expect(sleep.checkDate('2019/06/15')).to.equal('2019/06/15');
  })

  it('should return hours slept for a given day', () => {
    expect(sleep.getDailySleepHours("2019/06/23")).to.equal(8.9)
  })

  it('should only take a date as an argument', () => {
    expect(sleep.getDailySleepHours('test')).to.equal('You must pass a valid date');
  })

  it('should only take a date in the correct format as an argument', () => {
    expect(sleep.getDailySleepHours('2019-06-24')).to.equal('You must pass a valid date');
  })

  it('should return sleep quality for a given day', () => {
    expect(sleep.getDailySleepQual("2019/06/23")).to.equal(2.2)
  })
  
  it('should only take a date as an argument', () => {
    expect(sleep.getDailySleepQual('test')).to.equal('You must pass a valid date');
  })

  it('should only take a date in the correct format as an argument', () => {
    expect(sleep.getDailySleepQual('2019-06-24')).to.equal('You must pass a valid date');
  })

  it('should calculate average all time sleep hours', () => {
    expect(sleep.getAvgSleepHours()).to.equal(6.95)
  })

  it('should calculate average all time sleep hours even when an argument is passed', () => {
    expect(sleep.getAvgSleepHours('test')).to.equal(6.95);
  })

  it('should calculate average all time sleep quality', () => {
    expect(sleep.getAvgSleepQual()).to.equal(3.1)
  })

  it('should calculate average all time sleep quality even when an argument is passed', () => {
    expect(sleep.getAvgSleepQual('test')).to.equal(3.1);
  })

  it('should return specific sleep hours over 7 days', () => {
    expect(sleep.getWeeklySleepHours("2019/06/15")).to.deep.equal([6.1, 7, 10.8, 5.4, 4.1, 9.6, 5.1])
  })

  it('should return specific sleep hours over x days if there aren\'t 7 days worth of data', () => {
    expect(sleep.getWeeklySleepHours('2019/06/20')).to.deep.equal([9.6, 5.1, 8.1, 8.9, 4.4]);
  })

  it('should only take a date as an argument', () => {
    expect(sleep.getWeeklySleepHours('test')).to.equal('You must pass a valid date');
  })

  it('should only take a date in the correct format as an argument', () => {
    expect(sleep.getWeeklySleepHours('2019-06-20')).to.equal('You must pass a valid date');
  })

  it('should return specific sleep quality over 7 days', () => {
    expect(sleep.getWeeklySleepQual("2019/06/15")).to.deep.equal([2.2, 4.7, 4.7, 3, 3.6, 2.9, 2.6])
  })

  it('should return specific sleep quality over x days if there aren\'t 7 days worth of data', () => {
    expect(sleep.getWeeklySleepQual('2019/06/20')).to.deep.equal([2.9, 2.6, 3.5, 2.2, 1.6]);
  })

  it('should only take a date as an argument', () => {
    expect(sleep.getWeeklySleepQual('test')).to.equal('You must pass a valid date');
  })

  it('should only take a date in the correct format as an argument', () => {
    expect(sleep.getWeeklySleepQual('2019-06-20')).to.equal('You must pass a valid date');
  })

  // it('should return specific sleep hours over 7 days', () => {
  //   expect(sleep.getWeeklySleepProp("2019/06/15", 'hoursSlept')).to.deep.equal([6.1, 7, 10.8, 5.4, 4.1, 9.6, 5.1])
  // })

  // it('should return specific sleep quality over 7 days', () => {
  //   expect(sleep.getWeeklySleepProp("2019/06/15", 'sleepQuality')).to.deep.equal([2.2, 4.7, 4.7, 3, 3.6, 2.9, 2.6])
  // })
})