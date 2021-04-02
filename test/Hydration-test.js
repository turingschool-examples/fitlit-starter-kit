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
    expect(hydration1.id).to.equal(1);
    expect(hydration2.id).to.equal(2);
  })

  it("should store user hydration data", () => {
    expect(hydration1.hydrationData[0]).to.deep.equal({
      "userID": 1,
      "date": "2019/06/15",
      "numOunces": 37
    });
    expect(hydration2.hydrationData[1]).to.deep.equal({
      "userID": 2,
      "date": "2019/06/16",
      "numOunces": 84
    })
  })

  // calculate average fluid oz drank daily over all time
  it("should calculate average fluid intake by user", () => {
    console.log(hydration1.calculateDailyWater());
    expect(hydration.calculateDailyWater(1)).to.equal(55);
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
