import {expect} from "chai";
import Hydration from "../src/Hydration";

const mockHydrationData = require("../src/data/hydration-data");

describe("Hydration", () => {
  let userHydration;

  beforeEach(() => {
    userHydration = new Hydration(1, mockHydrationData);
  });

  it("should be a function", () => {
    expect(Hydration).to.be.a("function");
  });

  it("should be an instance of Hydration", () => {
    expect(userHydration).to.be.an.instanceof(Hydration);
  });

  it("should be able to store a user id", () => {
    expect(userHydration.userID).to.equal(1);
  });

  it("should be able to store a date", () => {
    expect(userHydration.date).to.equal("2019/06/15");
  });

  it.skip("should be able to store fluid ounces consumed", () => {
    expect(userHydration.numOunces).to.equal(37);
  });

  it.skip("should return the average of fluid ounces consumed per day for all time", () => {
    const hydrationAvgPerDay = userHydration.returnDailyHydrateAvg();
    expect(hydrationAvgPerDay).to.equal(65);
  });

  it.skip("should return the amount of ounces the user consumed on a specific day", () => {
    const ouncesConsumedByDate = userHydration.returnOuncesByDate("2019/06/18");
    expect(ouncesConsumedByDate).to.equal(61);
  });

  it.skip("should return the date and amount of ounces consumed over a week", () => {
    const ouncesConsumedByWeek = userHydration.returnOuncesByWeek("2019/06/21");
    expect(ouncesConsumedByWeek).to.deep.equal({
      date: [
        "2019/06/15",
        "2019/06/16",
        "2019/06/17",
        "2019/06/18",
        "2019/06/19",
        "2019/06/20",
        "2019/06/21",
      ],
      numOunces: [
        37, 69, 96, 61,
        91, 50, 50
      ]
    });
  });
});
