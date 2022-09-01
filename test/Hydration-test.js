import {expect} from "chai";
const mockHydrationData = require("../src/data/hydration-data");

describe("Hydration", () => {
  let userHydration;

  beforeEach(() => {
    userHydration = new Hydration(1, mockHydrationData);
  });

  it.skip("should be a function", () => {
    expect(Hydration).to.be.a("function");
  });

  it.skip("should be an instance of Hydration", () => {
    expect(userHydration).to.be.an.instanceof(Hydration);
  });

  it.skip("should be able to store a user id", () => {
    expect(userHydration.userID).to.equal(1);
  });

  it.skip("should be able to store a date", () => {
    expect(userHydration.date).to.equal("2019/06/15");
  });

  it.skip("should be able to store fluid ounces consumed", () => {
    expect(userHydration.numOunces).to.equal(37);
  });

  it.skip("should return the average of fluid ounces consumed per day for all time", () => {
    const hydrationAvgPerDay = userHydration.returnDailyHydrateAvg();
    expect(hydrationAvgPerDay).to.equal(65);
  });
});
