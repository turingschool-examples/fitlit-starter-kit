const chai = require("chai");
const expect = chai.expect;
const HydrationRepository = require("../src/HydrationRepository")

describe("HydrationRepository", () => {
  let sampleHydrationData, hydrationRepository, filterUser1, filterUser2, weeklyData;
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
    filterUser1 = sampleHydrationData.slice(0, 7);
    filterUser2 = sampleHydrationData.slice(7, 10);
    weeklyData = { date: sampleHydrationData[0].date, ounces: sampleHydrationData[0].numOunces}
    hydrationRepository = new HydrationRepository(sampleHydrationData);
  });

  it("should be a function", () => {
    expect(HydrationRepository).to.be.a("function")
  });

  it("should be an instance of HydrationRepository", () => {
    expect(hydrationRepository).to.be.an.instanceof(HydrationRepository)
  });

  it("should store user hydration data", () => {
    expect(hydrationRepository.userHydrationData(1)).to.be.deep.equal(filterUser1);
  });

  it("should store another users data", () => {
    expect(hydrationRepository.userHydrationData(2)).to.be.deep.equal(filterUser2);
  });

  it("should return average all-time ounces per a user", () =>{
    expect(hydrationRepository.averageAllTimeOunces(1)).to.be.equal(65)
  });

  it("should should return ounces for a specified day", () =>{
    expect(hydrationRepository.dayOunces("2019/06/16", 1)).to.equal(69)
  });

  it("should return daily ounces over 7 day period", () => {
    expect(hydrationRepository.dailyOuncesPerGivenWeek("2019/06/15", 1)[0]).to.deep.equal(weeklyData)
  });

  

});
