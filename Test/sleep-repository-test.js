const chai = require('chai');
const expect = chai.expect;
const sleepData = require('../data/sleep-test-data');
const SleepRepository = require('../src/sleep-repository');

describe("Sleep-Repository", () => {

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








});
