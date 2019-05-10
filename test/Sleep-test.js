const chai = require('chai');
const expect = chai.expect;
const Sleep = require('../src/Sleep');
const SleepRepository = require('../src/SleepRepository');

describe('Sleep', function() {
let sleep
  beforeEach(function() {
     sleep = new Sleep(2);
  })

  it('should be a function', function() {
    expect(Sleep).to.be.a('function');
  });

  it('should be an instance of Sleep', function() {
    expect(sleep).to.be.an.instanceof(Sleep);
  });

  it('userSleepData method should return sleep data of one user using ID', function() {
    const sleep = new Sleep(5);    
    expect(sleep.userSleepData()).to.eql([{
      "date": "06/05/2019",
      "hoursSlept": 7.6,
      "sleepQuality": 1.5
    }])
  })

  it('averageHrsSlept method should return users average of hours slept', function() {
    expect(sleep.averageHrsSlept()).to.equal(8.3);
  });

  it('averageSleepQuality method should return users average of quality hours', function() {
    expect(sleep.averageSleepQuality()).to.equal(3.9);
  });

  it('hoursSleptInDay should return hours slept in one day', function() {
    expect(sleep.hoursSleptInDate("07/05/2019")).to.equal(9.2);
  });

  it('hoursSleptQualityInDate should return hours slept in one day', function() {
    expect(sleep.hoursSleptQualityInDate("08/05/2019")).to.equal(4.5);
  });

  it('hoursSleptWeek should return hours slept of one week', function() {
    expect(sleep.hoursSleptWeek("08/05/2019")).to.eql([6.6, 10.3, 10.2, 10.2, 5.3, 8, 10.7]);
  });

  it('qualitySleptWeek should return sleeping quality of one week', function() {
    expect(sleep.qualitySleptWeek("07/05/2019")).to.eql([4.8, 4.5, 4, 3.2, 3.2, 4.9, 4.8]);
  });

});