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

  it("should calculate average fluid intake by user", () => {
    expect(hydration1.calculateDailyWater()).to.equal(67.85714285714286);
    expect(hydration2.calculateDailyWater()).to.equal(81.42857142857143);
  })

  it("should return oz drank on a specific date", () => {
    expect(hydration1.ozDrankOnDate("2019/06/15")).to.equal(37);
    expect(hydration2.ozDrankOnDate("2019/06/16")).to.equal(84);
  })

  it("should return how many fluid oz were drank each day over a 1 week period", () => {
    expect(hydration1.dailyDrinkDuringWeek("2019/06/15", "numOunces")).to.deep.equal([
      {"2019/06/15": 37}, {"2019/06/16": 73}, {"2019/06/17": 73}, {"2019/06/18": 73}, {"2019/06/19": 73}, {"2019/06/20": 73}, {"2019/06/21": 73}
    ]);
    expect(hydration2.dailyDrinkDuringWeek("2019/06/15", "numOunces")).to.deep.equal([
      {"2019/06/15": 66}, {"2019/06/16": 84}, {"2019/06/17": 84}, {"2019/06/18": 84}, {"2019/06/19": 84}, {"2019/06/20": 84}, {"2019/06/21": 84}
    ])
  })
})
