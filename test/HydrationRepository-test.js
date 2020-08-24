const chai = require("chai");
const expect = chai.expect;
const HydrationRepository = require("../src/HydrationRepository")

describe("HydrationRepository", () => {
  let sampleHydrationData, hydrationRepository, filterUser1, filterUser2, user1Data;
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
    user1Data = hydrationRepository.userHydrationData(sampleHydrationData, 1);
  });

  it("should be a function", () => {
    expect(HydrationRepository).to.be.a("function")
  });

  it("should be an instance of DailyHydration", () => {
    expect(hydrationRepository).to.be.an.instanceof(HydrationRepository)
  });

  it("should store user hydration data", () => {
    expect(hydrationRepository.userHydration).to.be.deep.equal(filterUser1);
  });

  it("should store another users data", () => {
    user2Data = hydrationRepository.userHydrationData(sampleHydrationData, 2);
    expect(hydrationRepository.userHydration).to.be.deep.equal(filterUser2);
  });

  it("should return average all-time ounces per a user", () =>{
    expect(hydrationRepository.averageAllTimeOunces()).to.be.equal(67)
  });

  it("should should return average daily ounces per a user", () =>{
      
  })
});

