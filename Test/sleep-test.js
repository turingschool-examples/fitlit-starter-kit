const chai = require('chai');
const expect = chai.expect;
const sleepData = require('../data/sleep-test-data');
const Sleep = require('../src/sleep');
const SleepRepository = require('../src/sleep-repository')

describe("Sleep", () => {

  beforeEach(function() {
    sleepRepository = new SleepRepository(sleepData);
    sleep1 = new Sleep(sleepRepository.returnUserSleepData(1));
  });

  it("should be a function", () => {
    expect(Sleep).to.be.a("function")
  });

  it("should be an instance", () => {
    expect(sleep1).to.be.an.instanceof(Sleep)
  });

  it.skip("should return total average sleep quality for a user", () => {
    expect(sleep1.userSleepAve()).to.eql(3)
  });

  it.skip("should return for a user how many hours slept for a specific date", () => {
    expect(sleep1.userHoursSleptForDay("2019/06/15")).to.eql(6.1)
  });

  it.skip("should return for a user sleep quality for a specific date", () => {
    expect(sleep1.userQualitySleepForDay("2019/06/15")).to.eql(2.2)
  });

  it.skip("should return hours slept for each day over the course of a week", () => {
    expect(sleep1.userWeeklySleep("2019/06/15")).to.eql(8.1)
  });

  it.skip("should sleep quality for each day over the course of a week", () => {
    expect(sleep1.userWeeklyQualitySleep("2019/06/15")).to.eql(2.6)
  });


});
