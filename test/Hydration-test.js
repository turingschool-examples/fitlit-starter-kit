const expect = require("chai").expect;

const Hydration = require("../src/Hydration");
const User = require("../src/User");

const hydrationData = [
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
    "numOunces": 72
  }, {
    "userID": 2,
    "date": "2019/06/16",
    "numOunces": 84
  }]

describe("Hydration class", () => {

  let hydration;
  beforeEach(() => {
    hydration = new Hydration();
  })

  it("should instantiate a new Hydration object for a user", () => {
    expect(hydration).to.be.an.instanceOf(Hydration);
  })

  it("should have an array of hydration data objects", () => {
    expect(hydration.hydrationData).to.be.an.array.of("objects");
  })

  // it("should be able to identify user by id", () => {
  //
  // })

})



// it should take in a user and a user repository as properties -- should it?? hydration data includes an id, date, and numOunces

// it should be able to select a specific date

// it should have a method to:
  // calculate average fluid oz drank daily over all time

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
