const expect = require("chai").expect;

const User = require("../src/User");

describe("Hydration class", () => {
  let user1;

  beforeEach(() => {
      user1 = new User({
        "id": 13,
        "name": "River Song",
        "address": "The Library Data Core",
        "email": "RiverSings@universe.everywhere",
        "strideLength": 5.3,
        "dailyStepGoal": 55000,
        "friends": [10, 11, 12, 13]
      })
  })

  it("should instantiate a new Hydration object for a user", () => {
    
  })

})


// it should be able to identify user by id

// it should take in a user and a user repository as properties

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
