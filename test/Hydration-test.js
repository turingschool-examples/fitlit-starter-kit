const expect = require("chai").expect;

const UserHydration = require("../src/UserHydration");
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
  }, {
    "userID": 1,
    "date": "2019/06/17",
    "numOunces": 73
  }, {
    "userID": 2,
    "date": "2019/06/17",
    "numOunces": 84
  }, {
    "userID": 1,
    "date": "2019/06/18",
    "numOunces": 73
  }, {
    "userID": 2,
    "date": "2019/06/18",
    "numOunces": 84
  }, {
    "userID": 1,
    "date": "2019/06/19",
    "numOunces": 73
  }, {
    "userID": 2,
    "date": "2019/06/19",
    "numOunces": 84
  }, {
    "userID": 1,
    "date": "2019/06/20",
    "numOunces": 73
  }, {
    "userID": 2,
    "date": "2019/06/20",
    "numOunces": 84
  }, {
    "userID": 1,
    "date": "2019/06/21",
    "numOunces": 73
  }, {
    "userID": 2,
    "date": "2019/06/21",
    "numOunces": 84
  }]

describe("Hydration class", () => {

  let hydration;
  beforeEach(() => {
    thirstyUser1 = new UserHydration(1, testData);
    thirstyUser2 = new UserHydration(2, testData);
  });
  it("should instantiate a new Hydration object for a user", () => {
    expect(thirstyUser1).to.be.an.instanceOf(UserHydration);
    expect(thirstyUser2).to.be.an.instanceOf(UserHydration);
  });
  it("should take in an id", () => {
    expect(thirstyUser1.id).to.equal(1);
    expect(thirstyUser2.id).to.equal(2);
  });
  it("should store user hydration data", () => {
    expect(thirstyUser1.hydrationData[0]).to.deep.equal({
      "userID": 1,
      "date": "2019/06/15",
      "numOunces": 37
    });
    expect(thirstyUser2.hydrationData[1]).to.deep.equal({
      "userID": 2,
      "date": "2019/06/16",
      "numOunces": 84
    })
  });
  it("should find the most recent day with data", () => {
    const recentDayData = thirstyUser1.mostRecentDayData();
    expect(recentDayData).to.deep.equal({"userID": 1, "date": "2019/06/21", "numOunces": 73});
  });
  it("should calculate average fluid intake by user", () => {
    expect(thirstyUser1.calcAvgDailyWater("numOunces")).to.equal(67.85714285714286);
    expect(thirstyUser2.calcAvgDailyWater("numOunces")).to.equal(81.42857142857143);
  });
  it("should return oz drank on a specific date", () => {
    expect(thirstyUser1.calcByDate("2019/06/15", "numOunces")).to.equal(37);
    expect(thirstyUser2.calcByDate("2019/06/16", "numOunces")).to.equal(84);
    expect(thirstyUser2.calcByDate("2021/04/06", "numOunces")).to.equal(undefined);
  });
  it("should return how many fluid oz were drank each day over a 1 week period", () => {
    expect(thirstyUser1.calcOverWeek("2019/06/21", "numOunces")).to.deep.equal([
      {"2019/06/15": 37}, {"2019/06/16": 73}, {"2019/06/17": 73}, {"2019/06/18": 73}, {"2019/06/19": 73}, {"2019/06/20": 73}, {"2019/06/21": 73}
    ]);
    expect(thirstyUser2.calcOverWeek("2019/06/21", "numOunces")).to.deep.equal([
      {"2019/06/15": 66}, {"2019/06/16": 84}, {"2019/06/17": 84}, {"2019/06/18": 84}, {"2019/06/19": 84}, {"2019/06/20": 84}, {"2019/06/21": 84}
    ]);
  });
})
