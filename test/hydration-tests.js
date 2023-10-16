import { expect } from "chai";
const { give7DayWaterConsumption } = require("./hydration-functions.js");

describe("Weekly Water Consumption", () => {
  it("should give the daily water consumption for a week starting from the date given", () => {
    const hydrationData = [
      {
        userID: 1,
        date: "2023/03/24",
        numOunces: 28,
      },
      {
        userID: 2,
        date: "2023/03/24",
        numOunces: 35,
      },
      {
        userID: 1,
        date: "2023/03/25",
        numOunces: 50,
      },
      {
        userID: 2,
        date: "2023/03/25",
        numOunces: 92,
      },
      {
        userID: 1,
        date: "2023/03/26",
        numOunces: 21,
      },
      {
        userID: 2,
        date: "2023/03/26",
        numOunces: 88,
      },
      {
        userID: 1,
        date: "2023/03/27",
        numOunces: 63,
      },
      {
        userID: 2,
        date: "2023/03/27",
        numOunces: 68,
      },
      {
        userID: 1,
        date: "2023/03/28",
        numOunces: 97,
      },
      {
        userID: 2,
        date: "2023/03/28",
        numOunces: 50,
      },
      {
        userID: 1,
        date: "2023/03/29",
        numOunces: 20,
      },
      {
        userID: 2,
        date: "2023/03/29",
        numOunces: 57,
      },
      {
        userID: 1,
        date: "2023/03/30",
        numOunces: 76,
      },
      {
        userID: 2,
        date: "2023/03/30",
        numOunces: 28,
      },
    ];

    const weekly = give7DayWaterConsumption(hydrationData, 2, "2023/03/24");
    
    expect(weekly[0]).to.equal("On 2023/03/24 you consumed 35");
    expect(weekly[1]).to.equal("On 2023/03/25 you consumed 92");
    expect(weekly[2]).to.equal("On 2023/03/26 you consumed 88");
    expect(weekly[3]).to.equal("On 2023/03/27 you consumed 68"); 
    expect(weekly[4]).to.equal("On 2023/03/28 you consumed 50");
    expect(weekly[5]).to.equal("On 2023/03/29 you consumed 57");
    expect(weekly[6]).to.equal("On 2023/03/30 you consumed 28");
  });
});