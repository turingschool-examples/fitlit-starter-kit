const chai = require('chai');
const expect = chai.expect;
const sleepData = require('../data/sleep-test-data');
const sleepData2 = require('../data/sleep-test-data-2');
const Sleep = require('../src/sleep');
const SleepRepository = require('../src/sleep-repository')

describe("Sleep", () => {
  let sleepRepository
  let sleep1
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

  it("should return total average sleep quality for a user", () => {
    expect(sleep1.userSleepAve()).to.eql(3)
  });

  it("should return for a user how many hours slept for a specific date", () => {
    expect(sleep1.userHoursSleptForDay("2019/06/15")).to.eql(6.1)
  });

  it("should return for a user sleep quality for a specific date", () => {
    expect(sleep1.userQualitySleepForDay("2019/06/15")).to.eql(2.2)
  });

  it("should return hours slept for each day over the course of a week", () => {
    sleepRepository2 = new SleepRepository(sleepData2);
    sleep2 = new Sleep(sleepRepository2.returnUserSleepData(1));
    expect(sleep2.userWeeklySleep("2019/06/15")).to.eql([ 6.1, 4.1, 8, 10.4, 10.7, 9.3, 7.8 ])
  });

  it("should sleep quality for each day over the course of a week", () => {
    sleepRepository2 = new SleepRepository(sleepData2);
    sleep2 = new Sleep(sleepRepository2.returnUserSleepData(1));
    expect(sleep2.userWeeklyQualitySleep("2019/06/15")).to.eql([ 2.2, 3.8, 2.6, 3.1, 1.2, 1.2, 4.2 ])
  });


});
