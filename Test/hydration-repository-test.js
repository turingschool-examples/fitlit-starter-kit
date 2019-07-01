const chai = require('chai');
const expect = chai.expect;
const hydrationData = require('../data/hydration-test-data');
const HydrationRepository = require('../src/hydration-repository');

describe("Hydration-Repository", () => {

  beforeEach(function() {
    hydrationRepository = new HydrationRepository(hydrationData);
  });

  it("should be a function", () => {
    expect(HydrationRepository).to.be.a("function")
  });

  it("should be an instance", () => {
    expect(hydrationRepository).to.be.an.instanceof(HydrationRepository)
  });

  it("should return a user's hydration data based on its id", () => {
    expect(hydrationRepository.returnUserHydrationData(2)).to.eql(hydrationData[1])
    expect(hydrationRepository.returnUserHydrationData(1)).to.eql(hydrationData[0])
  });

});