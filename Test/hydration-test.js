const chai = require('chai');
const expect = chai.expect;
const hydrationData = require('../data/hydration-test-data');
const Hydration = require('../src/hydration');
const 

describe("Hydration", () => {

  beforeEach(function() {
    hydration = new Hydration(hydrationData[0]);
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

  it("should return number of fluid ounces consumed each day over a week", () => {
    expect(hydration.returnAverageWeeklyFluidOunces()).to.eql(Hydration)
  });


});