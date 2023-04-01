import chai from "chai";
const expect = chai.expect;

import data from "../src/data/hydration";
const hydrationData = data.hydrationData;
import User from "../src/user";
import UserHydration from "../src/userHydration"

describe('userHydration', () => {
   let hydrationObj;

  beforeEach(() => {
    hydrationObj = [
      { "userID": 1, "date": "2023/03/24", "numOunces": 28 },
      { "userID": 1, "date": "2023/03/25", "numOunces": 50 },
      { "userID": 1, "date": "2023/03/26", "numOunces": 21 },  
      { "userID": 1, "date": "2023/03/27", "numOunces": 63 },  
      { "userID": 1, "date": "2023/03/28", "numOunces": 97 },
      { "userID": 1, "date": "2023/03/29", "numOunces": 20 },
      { "userID": 1, "date": "2023/03/30", "numOunces": 76 },
      { "userID": 1, "date": "2023/03/31", "numOunces": 51 },
      { "userID": 1, "date": "2023/04/01", "numOunces": 88 },
      { "userID": 1, "date": "2023/04/02", "numOunces": 22 }
    ]
  });

  it("Should calculate the all time average daily ounces", () => {
    const average = hydrationObj.calculateAllTimeAverageDailyOunces();
    console.log(average)
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
