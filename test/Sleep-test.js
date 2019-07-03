const chai = require('chai');
const expect = chai.expect;

//const User = require('../src/User');
const Sleep = require('../src/Sleep');
const sleepSub = require('../data/sleepSub')


describe('Sleep', function () {
  it("should be a function", function() {
    expect(Sleep).to.be.a("function");
  });

  it("should be an instance of Sleep", function() {
    const sleep = new Sleep();
    expect(sleep).to.be.an.instanceof(Sleep);
  });

  it('should return average hours slept for a given userID', function () {
    const sleep = new Sleep();
    expect(sleep.getAvgHoursSlept(2)).to.equal('7.3');
  });

  it('should return average hours slept for a given userID', function () {
    const sleep = new Sleep();
    expect(sleep.getAvgHoursSlept(3)).to.equal('7.0');
  });

  it('should return average sleep quality for a given userID', function () {
    const sleep = new Sleep();
    expect(sleep.getAvgSleepQuality(2)).to.equal('2.5');
  });

  it('should return hours slept on a given dayfor a given userID', function () {
    const sleep = new Sleep();
    expect(sleep.getHoursSleptOnDay(2, '2019/06/19')).to.equal(8);
  });

  it('should return hours slept on a given dayfor a given userID', function () {
    const sleep = new Sleep();
    expect(sleep.getHoursSleptOnDay(1, '2019/06/21')).to.equal(5.1);
  });

  it('should return sleep quality on a given dayfor a given userID', function () {
    const sleep = new Sleep();
    expect(sleep.geSleepQualityOnDay(3, '2019/06/16')).to.equal(3.5);
  });

  it('should return sleep quality on a given dayfor a given userID', function () {
    const sleep = new Sleep();
    expect(sleep.geSleepQualityOnDay(2, '2019/06/19')).to.equal(3.4);
  });
});