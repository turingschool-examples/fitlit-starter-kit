import { expect } from "chai";
const { give7DayWaterConsumption, giveAverageWaterConsumption} = require("./hydration-functions.js");

describe("7 Day Water Consumption", () => {
  it("should give the daily water consumption of a particular user for a week starting from the date given", () => {
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

    const waterFor7Days = give7DayWaterConsumption(hydrationData, 2, "2023/03/24");
    
    expect(waterFor7Days[0]).to.equal("On 2023/03/24 you consumed 35");
    expect(waterFor7Days[1]).to.equal("On 2023/03/25 you consumed 92");
    expect(waterFor7Days[2]).to.equal("On 2023/03/26 you consumed 88");
    expect(waterFor7Days[3]).to.equal("On 2023/03/27 you consumed 68"); 
    expect(waterFor7Days[4]).to.equal("On 2023/03/28 you consumed 50");
    expect(waterFor7Days[5]).to.equal("On 2023/03/29 you consumed 57");
    expect(waterFor7Days[6]).to.equal("On 2023/03/30 you consumed 28");
  });
});

describe("Average Total Water Consumption", () => {
  it("should give the average number of water consumed by a particular user", () => {
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

    const averageWaterConsumption = giveAverageWaterConsumption(hydrationData, 1)

    expect(averageWaterConsumption).to.equal(50);

    const averageWaterConsumption1 = giveAverageWaterConsumption(hydrationData, 2);
    
    expect(averageWaterConsumption1).to.equal(59);
    
  });
});
