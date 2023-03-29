import chai from "chai";
const expect = chai.expect;

import data from "../src/data/hydration";
const hydrationData = data.hydrationData;
import User from "../src/user";
import UserHydration from "../src/userHydration"

describe('userHydration', () => {
   let hydrationObj;

  beforeEach(() => {
    hydrationObj = new UserHydration(1, hydrationData)
  });

  it("Should calculate the all time average daily ounces", () => {
    const average = hydrationObj.calculateAllTimeAverageDailyOunces();
    
    expect(average).to.equal(58.43);
  });

  it.skip("Should calculate how many ounces are consumed for a specific day ", () => {
    const specificDayOz = hydrationObj.calculateSingleDayOunces('date-string');
    expect(specificDayOz).to.equal('specificOz');
  });
  it.skip("should calculate how many fluid ounces of water were consumed through 7 days", () => {
    const weekOfOz = hydrationObj.calculateWeekOfOunces();
    expect(weekOfOz).to.deep.equal([undefined, undefined, undefined, undefined, undefined, undefined, undefined])
  });
})
