import { expect } from "chai";
///import Hydration from "../src/Hydration";
import User from "../src/User";
const userTestData = require("../src/data/userTestData");

describe("Hydration", () => {
  let data;
  let user;
  let hydrationData;
  beforeEach(() => {
    hydrationData = [
      {
        userID: 1,
        date: "2019/06/15",
        numOunces: 37,
      },
      {
        userID: 2,
        date: "2019/06/15",
        numOunces: 75,
      },
      {
        userID: 3,
        date: "2019/06/15",
        numOunces: 47,
      },
      {
        userID: 1,
        date: "2019/06/15",
        numOunces: 37,
      },
      {
        userID: 1,
        date: "2019/06/18",
        numOunces: 61,
      },
      {
        userID: 1,
        date: "2019/06/16",
        numOunces: 69,
      },
    ];
    data = userTestData;
    user = new User(data[0]);
  });

  it("should return the average fluid ounces consumed per day for all time", () => {
    expect(user.calAverageFluid(hydrationData, 1)).to.equal(204);
  });

  it("should return fluid ounces they consumed for a specific day (identified by a date)", () => {
    expect(user.getDayFluid(hydrationData, "2019/06/15")).to.equal(74);
  });

  it("should return fluid ounces of water consumed each day over the course of a week (7 days)", () => {
    console.log(user.getWeeklyFluids(hydrationData));
    expect(user.getWeeklyFluids(hydrationData)).to.deep.equal([
      { date: "2019/06/15", numOunces: 37 },
      { date: "2019/06/15", numOunces: 37 },
      { date: "2019/06/18", numOunces: 61 },
      { date: "2019/06/16", numOunces: 69 },
    ]);
  });
});
