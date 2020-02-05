const chai = require("chai");
const { expect } = chai;
const HydrationRepository = require("../src/classes/HydrationRepository");
const hydrationDataTest = require("../test-data/hydration-test");

describe("Hydration", function() {
  let hydrationRepository;

  beforeEach("instantiate new HydrationRepository", function() {
    hydrationRepository = new HydrationRepository(hydrationDataTest);
  });

  it("should be an instance of HydrationRepository", function() {
    expect(hydrationRepository).to.be.an.instanceOf(HydrationRepository);
  });

  it("should accept hydration data", function() {
    expect(hydrationRepository.hydrationData).to.equal(hydrationDataTest);
  });

  it("should return average consumption for a user", function() {});

  it("should return consumption by day", function() {});

  it("should return consumption for today", function() {});

  it("should return consumption data for seven days inclusive before state.currentDate", function() {});
});
