import { expect } from "chai";
import HydrationSeries from "../src/HydrationSeries";
const hydrationTestData = require("../src/data/hydrationTestData");

describe("HydrationSeries", () => {
  let userFluid, emptyHydrationData;

  beforeEach(() => {
    userFluid = new HydrationSeries(
      hydrationTestData.filter((entry) => entry.userID === 1)
    );
    emptyHydrationData = new HydrationSeries();
  });

  it("should be empty if no user hydration data is passed into the constructor", () => {
    expect(emptyHydrationData.data).to.deep.equal([]);
  });

  it("should return a users average fluid ounces consumed per day over all time", () => {
    expect(userFluid.calAverageFluid()).to.equal(63);
  });

  it("should return fluid ounces they consumed for a specific day (identified by a date)", () => {
    expect(userFluid.getDayFluid("2019/06/15")).to.equal(37);
  });

  it("should return 0 fluid ounces consumed for a specific date if there is no data on that date", () => {
    expect(userFluid.getDayFluid("2019/06/24")).to.equal(0);
  });

  it("should return fluid ounces of water consumed each day over the course of a week (7 days)", () => {
    expect(userFluid.getWeeklyFluids("2019/06/22")).to.deep.equal([
      { date: "2019/06/16", numOunces: 69 },
      { date: "2019/06/17", numOunces: 96 },
      { date: "2019/06/18", numOunces: 61 },
      { date: "2019/06/19", numOunces: 91 },
      { date: "2019/06/20", numOunces: 50 },
      { date: "2019/06/21", numOunces: 50 },
      { date: "2019/06/22", numOunces: 50 },
    ]);
  });

  it("should return remaining fluid ounces of water consumed each day over the course of a week and 0 fluid ounces for days with missing data", () => {
    expect(userFluid.getWeeklyFluids("2019/06/24")).to.deep.equal([
      { date: "2019/06/18", numOunces: 61 },
      { date: "2019/06/19", numOunces: 91 },
      { date: "2019/06/20", numOunces: 50 },
      { date: "2019/06/21", numOunces: 50 },
      { date: "2019/06/22", numOunces: 50 },
      { date: "2019/06/23", numOunces: 0 },
      { date: "2019/06/24", numOunces: 0 },
    ]);
  });
});
