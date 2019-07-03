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
    expect(sleep1.UserSleepAve()).to.be.an.instanceof(Sleep)
  });

  it.skip("should return total average sleep quality for a user", () => {
    expect(sleep1).to.be.an.instanceof(Sleep)
  });








});
