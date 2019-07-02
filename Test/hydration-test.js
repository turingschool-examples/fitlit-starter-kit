const chai = require('chai');
const expect = chai.expect;
const hydrationData = require('../data/hydration-test-data');
const hydrationData2 = require('../data/hydration-test-2');
const Hydration = require('../src/hydration');
const HydrationRepository = require('../src/hydration-repository')

describe("Hydration", () => {

  beforeEach(function() {
    hydrationRepository = new HydrationRepository(hydrationData);
    hydration = new Hydration(hydrationRepository.returnUserHydrationData(1));
  });

  it("should be a function", () => {
    expect(Hydration).to.be.a("function")
  });

  it("should be an instance", () => {
    expect(hydration).to.be.an.instanceof(Hydration)
  });

  it("should return number of fluid ounces they consumed for a specific day", () => {
    expect(hydration.returnFluidOunces("2019/06/15")).to.eql(37)
  });

  it("should return a weeks worth of data", () => {
    hydrationRepository = new HydrationRepository(hydrationData2);
    hydration = new Hydration(hydrationRepository.returnUserHydrationData(1));
    expect(hydration.returnAWeek("2019/06/15").length).to.eql(7)
  });

  it("should return number of fluid ounces consumed each day over a week", () => {
    hydrationRepository = new HydrationRepository(hydrationData2);
    hydration = new Hydration(hydrationRepository.returnUserHydrationData(1));
    // expect(hydration.returnAverageWeeklyFluidOunces("2019/06/15")).to.eql(43);
    expect(hydration.returnAverageWeeklyFluidOunces("2019/06/17")).to.eql(46)
  });

});