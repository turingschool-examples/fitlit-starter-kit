const chai = require('chai');
const expect = chai.expect;
const sleepData = require('../data/sleep-test-data');
const Sleep = require('../src/sleep');
const SleepRepository = require('../src/sleep-repository')

describe("Sleep", () => {

  beforeEach(function() {
    sleepRepository = new SleepRepository(sleepData);
    sleep = new Sleep(sleepRepository.returnUserSleepData(1));
  });

  it("should be a function", () => {
    expect(Sleep).to.be.a("function")
  });

  it("should be an instance", () => {
    expect(sleep).to.be.an.instanceof(Sleep)
  });




});
