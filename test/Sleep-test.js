const chai = require("chai");
const expect = chai.expect;

const Sleep = require('../src/Sleep');
const sleepData = require('../data/Sleep-test-data.js');
const User = require('../src/User');
const userData = require('../data/user-test-data');

let sleep;
let user;

describe('Sleep default properties', () => {

  beforeEach(() => {
    user = new User(userData[0], sleepData);
    sleep = user.sleep;
  })

  it('it should be a function', () => {
    expect(Sleep).to.be.a('function');
  })

  it('it should be an instance of sleep', () => {
    expect(sleep).to.be.an.instanceof(Sleep);
  })

  it('it should have a unique ID', () => {
    expect(sleep.userID).to.equal(1);
  })

  it('it should have a date', () => {
    expect(sleep.sleepData[0].date).to.equal("2019/06/15");
  })

  it('it should have the average number of hours slept', () => {
    expect(user.avgHoursSlept()).to.equal('7.92');
  })
  
  it('it should have the average sleep quality', () => {
    expect(user.avgSleepQuality()).to.equal('2.66');
  })

  it('it should have the hours slept for that day', () => {
    let sleepDate = '2019/06/15';
    let hoursSlept = user.hoursSlept(sleepDate);
    expect(hoursSlept).to.equal(6.1)
  })

  it('it should have the numbers of hours slept for a week', () => {
    let weekStart = '2019/06/15';
    let sleepWeek = user.hoursSleptWeekOf(weekStart);
    expect(sleepWeek).to.be.an('array');
    expect(sleepWeek.length).to.equal(7);
  })

  it('it should have the quality of sleep for a week', () => {
    let weekStart = '2019/06/15';
    let qualityWeek = user.qualitySleptWeekOf(weekStart);
    expect(qualityWeek).to.be.an('array');
    expect(qualityWeek.length).to.equal(7);
  })


})

