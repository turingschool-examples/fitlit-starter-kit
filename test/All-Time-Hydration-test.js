const chai = require("chai");
const expect = chai.expect;
const AllTimeHydration = require("../src/All-Time-Hydration")

describe("AllTimeHydration", () => {
  let sampleHydrationData
  let allTimeHydration;
  let filterUser1
  let filterUser2
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
    allTimeHydration = new AllTimeHydration();
  });

  it("should be a function", () => {
    expect(AllTimeHydration).to.be.a("function")
  });

  it("should be an instance of DailyHydration", () => {
    expect(allTimeHydration).to.be.an.instanceof(AllTimeHydration)
  });

  // it("should have access to hydration data", () => {
  //   expect(sampleHydrationData.length).to.be.equal(6)
  // });

  it("should return ounces consumed per day for all time", () => {
    expect(allTimeHydration.returnAllTimeHydration(
      sampleHydrationData, 1)).to.be.deep.equal(filterUser1);
  });

  it("should return ounces consumed for another user", () => {
    expect(allTimeHydration.returnAllTimeHydration(
      sampleHydrationData, 2)).to.be.deep.equal(filterUser2);
  });
});
//
