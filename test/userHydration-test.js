'use strict'

const chai = require('chai')
const expect = chai.expect

const UserHydration = require("../src/userHydration");

describe("UserHydration", () => {
  let hydrationData,
    userHydrationData1,
    userHydrationData2,
    userHydrationData3,
    userHydrationData4,
    userHydrationData5,
    userHydrationData6,
    userHydrationData7,
    userHydrationData8,
    user2HydrationData;

  beforeEach(() => {
    (userHydrationData1 = {
      userID: 1,
      date: "2019/06/12",
      numOunces: 38,
    }),
    (userHydrationData2 = {
      userID: 1,
      date: "2019/06/13",
      numOunces: 60,
    }),
    (userHydrationData3 = {
      userID: 1,
      date: "2019/06/14",
      numOunces: 40,
    }),
    (userHydrationData4 = {
      userID: 1,
      date: "2019/06/15",
      numOunces: 50,
    }),
    (userHydrationData5 = {
      userID: 1,
      date: "2019/06/16",
      numOunces: 51,
    }),
    (userHydrationData6 = {
      userID: 1,
      date: "2019/06/17",
      numOunces: 65,
    }),
    (userHydrationData7 = {
      userID: 1,
      date: "2019/06/18",
      numOunces: 60,
    }),
    (userHydrationData8 = {
      userID: 1,
      date: "2019/06/19",
      numOunces: 60,
    }),
    (user2HydrationData = {
      userID: 2,
      date: '2019/06/20',
      numOunces: 20,
    }),
    (hydrationData = new UserHydration([
      userHydrationData1,
      userHydrationData2,
      userHydrationData3,
      userHydrationData4,
      userHydrationData5,
      userHydrationData6,
      userHydrationData7,
      userHydrationData8,
      user2HydrationData
    ]));
  });

  it("should be a function", () => {
    expect(UserHydration).to.be.a("function");
  });

  it("should be an instance of User", () => {
    expect(hydrationData).to.be.an.instanceof(UserHydration);
  });

  it("should return average fluid ounces per day all time per user", () => {
    // const allNumOunces = hydrationData.getUserWaterConsumption(1);
    expect(hydrationData.getAverage([38, 60, 40, 50, 51, 65, 60, 60])).to.equal(
      47.111111111111114
    );
  });

  it("should return total fluid ounces consumed for a day", () => {
    expect(hydrationData.getOneDayOfData("2019/06/12", 'numOunces')).to.equal(38);
  });

  it("should return an array of numOunces for a given user for a given week", () => {
    expect(hydrationData.calculateWaterPerWeek("2019/06/12")).to.deep.equal([
      38,
      60,
      40,
      50,
      51,
      65,
      60,
    ]);
  });

});