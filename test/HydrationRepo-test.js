const chai = require("chai");
const expect = chai.expect;

const HydrationRepo = require("../src/HydrationRepo");

describe("hydrationRepo", () => {
  let hydrationRepo;

  beforeEach(() => {
    hydrationRepo = new HydrationRepo(1);
  });

  it.only("should be a function", () => {
    expect(HydrationRepo).to.be.a("function");
  });

  it.only("should be an instance of Hydration", () => {
    expect(hydrationRepo).to.be.a.instanceOf(HydrationRepo);
  });

  it.only("should be able to access all user data", () => {
    expect(hydrationData.length).to.equal(40);
  });

  it.only("should be able to access a specific user", () => {
    hydrationRepo.findHydrationData(4);
    expect(hydrationRepo.hydrationUserData.length).to.deep.equal(8);
  });

  it.only("should return the amount consumed by the user on a date", () => {
    hydrationRepo.findHydrationData(4);
    hydrationRepo.findDailyConsumption("2019/06/18");
    expect(hydrationRepo.hydrationUserData[3].numOunces).to.equal(61);
  });

  it.only("should return a users weekly average value", () => {
    hydrationRepo.findHydrationData(5);
    expect(hydrationRepo.weeklyConsumptionAverage("2019/06/22")).to.equal(65);
  });
});
