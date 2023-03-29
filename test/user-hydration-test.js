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

  it("Should calculate how many ounces are consumed for a specific day ", () => {
    const specificDayOz = hydrationObj.calculateSingleDayOunces("2023/03/24");
    expect(specificDayOz).to.equal(28);
  });
  it("should calculate how many fluid ounces of water were consumed through 7 days", () => {
    const weekOfOz = hydrationObj.calculateOuncesLastSevenDays( "2023/03/24", "2023/03/30");
    expect(weekOfOz).to.deep.equal([28, 50, 21, 63, 97, 20, 76])
  });
})
