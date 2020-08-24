const chai = require("chai");
const expect = chai.expect;
const HydrationRepository = require("../src/HydrationRepository")

describe("HydrationRepository", () => {
  let sampleHydrationData, hydrationRepository, filterUser1, filterUser2
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
    hydrationRepository = new HydrationRepository();
  });

  it("should be a function", () => {
    expect(HydrationRepository).to.be.a("function")
  });

  it("should be an instance of DailyHydration", () => {
    expect(hydrationRepository).to.be.an.instanceof(HydrationRepository)
  });

  it("should store user hydration data", () => {
    hydrationRepository.userHydrationData(sampleHydrationData, 1);
    expect(hydrationRepository.userHydration).to.be.deep.equal(filterUser1);
  });

  it("should store another users data", () => {
    hydrationRepository.userHydrationData(sampleHydrationData, 2);
    expect(hydrationRepository.userHydration).to.be.deep.equal(filterUser2);
  });
});
//
