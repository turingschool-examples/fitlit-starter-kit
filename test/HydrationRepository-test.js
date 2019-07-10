const chai = require('chai');
const expect = chai.expect;

const HydrationRepository = require('../src/HydrationRepository');
const hydrationSub = require('../data/HydrationSub');

describe("HydrationRepository", function() {
  it("should be a function", function() {
  expect(HydrationRepository).to.be.a("function");
  });

  it("should be an instance of HydrationRepository", function() {
    const hydrationRepository = new HydrationRepository();
    expect(hydrationRepository).to.be.an.instanceof(HydrationRepository);
  });

  it("should return the correct user based on a user ID", function() {
    const hydrationRepository = new HydrationRepository(1);
    expect(hydrationRepository.findId().length).to.equal(8);
  });
});