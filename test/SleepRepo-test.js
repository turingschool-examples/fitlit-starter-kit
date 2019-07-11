const chai = require("chai");
const expect = chai.expect;

const SleepRepo = require("../src/SleepRepo");
const Sleep = require("../src/Sleep");

describe("sleepRepo", () => {
  let sleepRepo;

  beforeEach(() => {
    sleepRepo = new SleepRepo();
  });

  it.only("should be a function", () => {
    expect(SleepRepo).to.be.a("function");
  });

  it.only("should be an instance of a SleepRepo", () => {
    expect(sleepRepo).to.be.a.instanceOf(SleepRepo);
  });

  it.only("should have access to all the users sleep information", () => {
    expect(sleepRepo.sleepData.length).to.equal(55);
  });

  it.only("should calculate the quality of sleep for all users", () => {
    expect(sleepRepo.findAverageSleep()).to.equal(3);
  });

  it.only("should give a list of above average sleepers", () => {
    expect(sleepRepo.findAboveAverageSleepers("2019/06/22")).to.eql([2, 3, 5]);
  });

  it.only("should provide the user or users with the most hours of sleep", () => {
    expect(sleepRepo.findUserWithMostHours("2019/06/22")).to.equal(9.8);
  });

  it.only("should shame the worst sleeper for a specific date", () => {
    expect(sleepRepo.findWorstSleeper("2019/06/22")).to.equal(4.8);
  });
});
