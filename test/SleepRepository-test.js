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
    expect(sleepRepo.getAvgSleepQuality()).to.equal('2.7');
  });

  it('should find user(s) who slept the most on given day', function() {
    const sleepRepo = new SleepRepository();
    //console.log(sleepRepo);
    expect(sleepRepo.getSleptMostOnDay('2019/06/20')).to.equal('Jarvis Considine');
  });

  it('should find user(s) who slept the most on given day', function() {
    const sleepRepo = new SleepRepository();
    //console.log(sleepRepo);
    expect(sleepRepo.getSleptMostOnDay('2019/06/17')).to.equal('Luisa Hane');
  });

});