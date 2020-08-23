const chai = require("chai");
const expect = chai.expect;
const DailyHydration = require("../src/Daily-Hydration")


describe("DailyHydration", () => {
  let user1, user2, user3;
  beforeEach(() => {
    user1 = {
              "userID": 1,
              "date": "2019/06/15",
              "numOunces": 37
            },
    user2 = {
              "userID": 2,
              "date": "2019/06/15",
              "numOunces": 75
            },
    user3 = {
              "userID": 3,
              "date": "2019/06/15",
              "numOunces": 47
            }
  });

  it("should be a function", () => {
    expect(DailyHydration).to.be.a("function")
  });


});
