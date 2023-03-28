const { use } = require("chai");
const chai = require("chai");
const expect = chai.expect;

const data = require("../src/data");
const hydrationData = data.hydrationData;
const User = require("../src/user");
const userHydration = require("../src/userHydration")

describe('userHydration', () => {
  let userHydration;

  beforeEach(() => {
    userHydration = new userHydration(User.userId, hydrationData)
  });

  it("Should calculate the all time average daily ounces", () => {
    const average = userHydration.calculateDailyOunces();
    expect(average).to.equal('avgNumOz');
  });

  it("Should calculate how many ounces are consumed for a specific day ", () => {
    const specificDayOz = userHydration.calculateSingleDayOunces('date-string');
    expect(specificDayOz).to.equal('specificOz');
  });
  it("should calculate how many fluid ounces of water were consumed through 7 days", () => {
    const weekOfOz = userHydration.calculateWeekOfOunces();
    expect(weekOfOz).to.deep.equal([undefined, undefined, undefined, undefined, undefined, undefined, undefined])
  });
})
