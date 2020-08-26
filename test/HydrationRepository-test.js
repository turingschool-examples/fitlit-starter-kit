const chai = require("chai");
const expect = chai.expect;
const HydrationRepository = require("../src/HydrationRepository")

describe("HydrationRepository", () => {
  let sampleHydrationData, hydrationRepository, filterUser1, filterUser2, user1Data, weeklyData;
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
       "userID": 1,
       "date": "2019/06/18",
       "numOunces": 61
    },
    {
        "userID": 1,
        "date": "2019/06/19",
        "numOunces": 91
    },
    {
        "userID": 1,
        "date": "2019/06/20",
        "numOunces": 50
    },
    {
        "userID": 1,
        "date": "2019/06/21",
        "numOunces": 50
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
      sampleHydrationData[2],
      sampleHydrationData[3],
      sampleHydrationData[4],
      sampleHydrationData[5],
      sampleHydrationData[6]
    ]
    filterUser2 = [
      sampleHydrationData[7],
      sampleHydrationData[8],
      sampleHydrationData[9]
    ]
    weeklyData = [
      sampleHydrationData[0].numOunces,
      sampleHydrationData[1].numOunces,
      sampleHydrationData[2].numOunces,
      sampleHydrationData[3].numOunces,
      sampleHydrationData[4].numOunces,
      sampleHydrationData[5].numOunces,
      sampleHydrationData[6].numOunces
    ]
    hydrationRepository = new HydrationRepository(sampleHydrationData);
    user1Data = hydrationRepository.userHydrationData(sampleHydrationData, 1);
  });

  it("should be a function", () => {
    expect(HydrationRepository).to.be.a("function")
  });

  it("should be an instance of DailyHydration", () => {
    expect(hydrationRepository).to.be.an.instanceof(HydrationRepository)
  });

  it("should store user hydration data", () => {
    expect(hydrationRepository.userHydrationData(1)).to.be.deep.equal(filterUser1);
  });

  it("should store another users data", () => {
    user2Data = hydrationRepository.userHydrationData(sampleHydrationData, 2);
    expect(hydrationRepository.userHydrationData(2)).to.be.deep.equal(filterUser2);
  });

  it("should return average all-time ounces per a user", () =>{
    expect(hydrationRepository.averageAllTimeOunces(1)).to.be.equal(65)
  });

  it("should should return ounces for a specified day", () =>{
    expect(hydrationRepository.dayOunces("2019/06/16")).to.equal(69)
  });

  it("should return daily ounces over 7 day period", () => {
    expect(hydrationRepository.dailyOuncesPerGivenWeek("2019/06/15")).to.deep.equal(weeklyData)
  });

});
