import { expect } from "chai";

describe("Hydration", () => {
  it("should have an id", () => {
    expect(hydration.id).to.equal(1);
  });

  it.skip("should have a date", () => {
    expect(hydration.date).to.equal("2019/06/15");
  });

  it.skip("should have number of ounces", () => {
    expect(hydration.numOunces).to.equal(37);
  });

  it.skip("should return the average fluid ounces consumed per day for all time", () => {
    expect(hydration.calAverageFluid()).to.equal();
  });

  it.skip("should return fluid ounces they consumed for a specific day (identified by a date)", () => {
    expect(hydration.getDayFluid("2019/06/15")).to.equal(37);
  });

  it.skip("should return fluid ounces of water consumed each day over the course of a week (7 days)", () => {
    expect(hydration.getWeeklyFluids()).to.equal("2019/06/15");
  });
});
