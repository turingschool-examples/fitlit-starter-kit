const chai = require('chai');
const expect = chai.expect;


const Sleep = require('../src/Sleep');
const sleepData = require('../test-data/sleep-fixtures');

describe('Sleep', function() {

  it('should be a function', function() {
    const sleep = new Sleep();
    expect(Sleep).to.be.a('function');
  });

  it('should store user information', function() {
    const sleep = new Sleep(sleepData);
    expect(sleepData).to.be.a('array')
  });

  it('should be able to find a user by their id', function(){
    const sleep = new Sleep(sleepData);
    expect(sleep.findIdHelper(1)).to.be.a('array')
  })

  it('should calculate average hours slept per day', function(){
    const sleep = new Sleep(sleepData);
    expect(sleep.calculateAverageDailySleepHours(1)).to.equal(5.1)
  })

  it('should calculate average sleep quality per day over all time', function(){
    const sleep = new Sleep(sleepData);
    expect(sleep.calculateAverageSleepQuality(1)).to.equal(3)
  })

  it('should display hours slept for a specific day', function(){
    const sleep = new Sleep(sleepData);
    expect(sleep.displayHoursSlept(1, "2019/06/15")).to.equal(6.1)
  })

  it('should display sleep quality for a specific day', function(){
    const sleep = new Sleep(sleepData);
    expect(sleep.displaySleepQuality(1, "2019/06/15")).to.equal(2.2)
  })

  // it('should calculate hours slept per day for a user', function(){
  //     const sleep = new Sleep(sleepData);
  //     expect(sleep.calulateAverageSleepPerDay(1)).to.deep.eql([6.1])
  // })




})
