const chai = require('chai');
const expect = chai.expect;

const Hydration = require('../src/Hydration');
const hydrationSub = require('../data/HydrationSub');

describe("Hydration", function() {
  it("should be a function", function() {
    expect(Hydration).to.be.a("function");
  });

  it("should be an instance of Hydration", function() {
    const hydration = new Hydration();
    expect(hydration).to.be.an.instanceof(Hydration);
  });

  it("should give average hydration data for all time", function() {
    const hydration = new Hydration();
    expect(hydration.returnAllTimeAvg(1)).to.equal(59);
  });

  it.only("should give how many fluid ounces a user consumed on a specific day", function() {
    const hydration = new Hydration(1);
    expect(hydration.returnSpecificDayOz("2019/06/15")).to.equal(37);
  });

  it("should give how many fluid ounces a user consumed every day", function() {
    const hydration = new Hydration();
    expect(hydration.returnWaterEachDay(1)).to.deep.equal([37, 85, 94, 75, 30, 40, 62, 55]);
  });

  it.only("should give a week's worth of hydration data", function() {
    const hydration = new Hydration(1);
    expect(hydration.returnWeeklyHydration("2019/06/15", "2019/06/22").length).to.equal(7);
  });
    
});