const chai = require('chai');
const expect = chai.expect;
const sleepData = require('../data/sleep-test-data');
const sleepData2 = require('../data/sleep-test-data-2');
const SleepRepository = require('../src/sleep-repository');

describe("Sleep-Repository", () => {
  let sleepRepository
  let sleepRepository2
  beforeEach(function() {
    sleepRepository = new SleepRepository(sleepData);
  });

  it("should be a function", () => {
    expect(SleepRepository).to.be.a("function")
  });

  it("should be an instance", () => {
    expect(sleepRepository).to.be.an.instanceof(SleepRepository)
  });

  it("should return return average sleep per day based on ID", () => {
    expect(sleepRepository.returnAverageSleep(1)).to.eql(5.1)
    expect(sleepRepository.returnAverageSleep(2)).to.eql(7.25)
  });

  it("should return average sleep quality for all users", () => {
    expect(sleepRepository.returnAverageSleepForAllUsers()).to.eql(3.8)
  });

  it("should return all users who have average sleep quality over 3 for a given week", () => {
     sleepRepository2 = new SleepRepository(sleepData2);
    expect(sleepRepository2.returnUserSleepQualityAveOver3("2019/06/15")).to.eql([2])
  });

  it("should return the user(s) who slept the most hours in a given day", () => {
    sleepRepository = new SleepRepository(sleepData2);
    expect(sleepRepository2.returnUserWithMostSleepForDate("2019/06/15")).to.eql(2)
  });



});
