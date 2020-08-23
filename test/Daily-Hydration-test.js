const chai = require("chai");
const expect = chai.expect;
const DailyHydration = require("../src/Daily-Hydration")


describe("DailyHydration", () => {
  let day1, day2, day3;
  let dailyHydration;
  beforeEach(() => {
    day1 = {
              "userID": 1,
              "date": "2019/06/15",
              "numOunces": 37
            },
    day2 =   {
                "userID": 1,
                "date": "2019/06/16",
                "numOunces": 69
              },
    day3 =   {
                "userID": 1,
                "date": "2019/06/17",
                "numOunces": 96
              },
    dailyHydration = new DailyHydration(day1);
  });

  it("should be a function", () => {
    expect(DailyHydration).to.be.a("function")
  });

  it("should be an instance of DailyHydration", () => {
    expect(dailyHydration).to.be.an.instanceof(DailyHydration)
  });

  it("should be able to access users hydration data", () => {
    expect(dailyHydration.userHydration).to.be.equal(day1);
  });

  it("should be able to return oz of water for a specific day", () => {
    expect(dailyHydration.returnDailyOz()).to.be.equal(37);
  });

  it("should be able to return oz of water for another specific day", () => {
    expect(dailyHydration.returnDailyOz()).to.be.equal(37);
  });
});
