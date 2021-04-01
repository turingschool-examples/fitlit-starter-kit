const expect = require("chai").expect;

const Hydration = require("../src/Hydration");
const testData = [
  {
    "userID": 1,
    "date": "2019/06/15",
    "numOunces": 37
  }, {
    "userID": 2,
    "date": "2019/06/15",
    "numOunces": 66
  }, {
    "userID": 1,
    "date": "2019/06/16",
    "numOunces": 73
  }, {
    "userID": 2,
    "date": "2019/06/16",
    "numOunces": 84
  }]

describe("Hydration class", () => {

  let hydration;
  beforeEach(() => {
    hydration1 = new Hydration(1, testData);
    hydration2 = new Hydration(2, testData);
  })

  it("should instantiate a new Hydration object for a user", () => {
    expect(hydration1).to.be.an.instanceOf(Hydration);
    expect(hydration2).to.be.an.instanceOf(Hydration);
  })

  it("should take in an id", () => {
    console.log("hydration >>>", hydration);
    // console.log("id? ", testData.forEach((data) => userID));
    expect(hydration.id).to.equal(1);
  })

  // it("should have an array of hydration data objects", () => {
  //   expect(hydration.hydrationData).to.equal(testData);
  // })

  // it.skip("should be able to identify user by id", () => {
  //   const id = hydration.hydrationData[0].userID;
  //   expect(id).to.equal(1);
  // })

  it("should have a method to calculate average fluid intake", () => {
    expect(hydration.calculateDailyWater).to.be.a("function");
  })
  // calculate average fluid oz drank daily over all time
  it("should calculate average fluid intake by user", () => {
    const id = hydration.hydrationData[0].userID;
    // console.log("id >>>", id);
    expect(hydration.calculateDailyWater(id)).to.equal(55);
  })
})
// it should have a method to:
  // return how many oz were drank on a specific date

// it should have a method to:
  // return how many fluid oz were drank each day over a 1 week period
  // return the amount for each day

  // Create classes and methods that can calculate:
  //
  // √ For a user (√ identified by their userID - this is the same for all methods requiring a specific user’s data), √ the average fluid ounces consumed per day for all time
  // For a user, how many fluid ounces they √ consumed for a specific day √ (identified by a date)
  // For a user, √ how many fluid ounces of water consumed each day over the course of a week (7 days) - √ return the amount for each day


  // it should take in a user and a user repository as properties -- should it?? hydration data includes an id, date, and numOunces

  // it should be able to select a specific date -- should it? this might be something that comes later; shouldn't need to test the dependencies
