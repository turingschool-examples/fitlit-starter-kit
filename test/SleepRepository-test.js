const chai = require('chai');
const expect = chai.expect;

//const User = require('../src/User');
const SleepRepository = require('../src/SleepRepository');
const sleepSub = require('../data/sleepSub');
const Sleep = require('../data/sleep')


describe('SleepRepository', function () {
  it("should be a function", function() {
    expect(SleepRepository).to.be.a("function");
  });

  it("should be an instance of Sleep", function() {
    const sleepRepo = new SleepRepository();
    expect(sleepRepo).to.be.an.instanceof(SleepRepository);
  });

  it('should calculate and return average sleep quality', function() {
    const sleepRepo = new SleepRepository();
    expect(sleepRepo.getAvgSleepQuality()).to.equal('3.1');
  });

  it('should find user(s) who slept the most on given day', function() {
    const sleepRepo = new SleepRepository();
    expect(sleepRepo.getSleptMostOnDay('2019/06/20')).to.equal('Jarvis Considine');
  });

  it('should find user(s) who slept the most on given day', function() {
    const sleepRepo = new SleepRepository();
    expect(sleepRepo.getSleptMostOnDay('2019/06/17')).to.equal('Erick Schaden');
  });

  it('should find users hours slept each day for the past 7 days', function() {
    const sleepRepo = new SleepRepository();
    expect(sleepRepo.getHoursSleptForWeek(5, "2019/06/21")).to.deep.equal([ 4.1, 7.4, 10.5, 5.2, 4.8, 10.1, 9.6 ]);
  });

  it('should find users hours slept each day for the past 7 days', function() {
    const sleepRepo = new SleepRepository();
    expect(sleepRepo.getHoursSleptForWeek(9, "2019/06/21")).to.deep.equal([ 8.9, 9.1, 7.2, 5.5, 10.4, 9.8, 7.7  ]);
  });

  it('should find users hours slept each day for the past 7 days', function() {
    const sleepRepo = new SleepRepository();
    expect(sleepRepo.getHoursSleptForWeek(1, "2019/06/23")).to.deep.equal([ 8, 10.4, 10.7, 9.3, 7.8, 7, 7.8  ]);
  });

  it('should find users hours slept each day for the past 7 days', function() {
    const sleepRepo = new SleepRepository();
    expect(sleepRepo.getHoursSleptForWeek(3, "2019/06/20")).to.deep.equal([ 10.8, 10.7, 5.3, 9.8, 7.2, 9.4 ]);
  });

  it('should find user sleep qualituy each day for the past 7 days', function() {
    const sleepRepo = new SleepRepository();
    expect(sleepRepo.getSleepQualityForWeek(6, "2019/06/21")).to.deep.equal([  2.9, 4.3, 1.4, 4, 2, 1.8, 3.2  ]);
  });

  it('should find user sleep qualituy each day for the past 7 days', function() {
    const sleepRepo = new SleepRepository();
    expect(sleepRepo.getSleepQualityForWeek(2, "2019/06/22")).to.deep.equal([ 3.8, 3, 3.2, 2.5, 2.4, 4.8, 3.3]);
  });

  it('should find all users who average sleep quality over 3 for a given week', function () {
    const sleepRepo = new SleepRepository();
    expect(sleepRepo.getSleepQualityAvgOverThree('2019/06/21')).to.equal([3, 5, 8])
  });

});