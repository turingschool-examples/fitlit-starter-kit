const chai = require("chai");
const expect = chai.expect;
const Hydration = require("../src/Hydration")

describe("Hydration", () => {
  let sampleHydrationData, hydration, filterUser1, filterUser2
  beforeEach(() => {
    sampleHydrationData = [ {
                              "userID": 1,
                              "date": "2019/06/15",
                              "numOunces": 37
                            },
                            {
                              "userID": 1,
                              "date": "2019/06/16",
                              "numOunces": 69
                            },
                            {
                              "userID": 1,
                              "date": "2019/06/17",
                              "numOunces": 96
                            },
                            {
                              "userID": 2,
                              "date": "2019/06/15",
                              "numOunces": 75
                            },
                            {
                              "userID": 2,
                              "date": "2019/06/16",
                              "numOunces": 91
                            },
                            {
                              "userID": 2,
                              "date": "2019/06/17",
                              "numOunces": 96
                            },
                          ]
    filterUser1 = [
                    sampleHydrationData[0],
                    sampleHydrationData[1],
                    sampleHydrationData[2]
                  ]
    filterUser2 = [
                    sampleHydrationData[3],
                    sampleHydrationData[4],
                    sampleHydrationData[5]
                  ]
    hydration = new Hydration();
  });

  it("should be a function", () => {
    expect(Hydration).to.be.a("function")
  });

  it("should be an instance of Hydration", () => {
    expect(hydration).to.be.an.instanceof(Hydration)
  });

  it("should return ounces consumed per day for all time", () => {
    expect(hydration.returnAllTimeHydration(
      sampleHydrationData, 1)).to.be.deep.equal(filterUser1);
  });

  it("should return ounces consumed for another user", () => {
    expect(hydration.returnAllTimeHydration(
      sampleHydrationData, 2)).to.be.deep.equal(filterUser2);
  });
});
//
