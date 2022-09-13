import { expect } from "chai";
import User from "../src/User";
const userTestData = require("../src/data/userTestData");
const sleepTestData = require("../src/data/sleepTestData");
const hydrationData = require("../src/data/hydrationTestData");

describe("User", () => {
  let user;
  
  beforeEach(() => {
    user = new User(userTestData[0]);
  });

  it("should have a parameter to take in a userData object", () => {
    expect(userTestData[0]).to.be.an("object");
  });

  it("should have an id", () => {
    expect(user.id).to.equal(1);
  });

  it("should have a name", () => {
    expect(user.name).to.equal("Luisa Hane");
  });

  it("should have an address", () => {
    expect(user.address).to.equal(
      "15195 Nakia Tunnel, Erdmanport VA 19901-1697"
    );
  });

  it("should have a email", () => {
    expect(user.email).to.equal("Diana.Hayes1@hotmail.com");
  });

  it("should have a stride length", () => {
    expect(user.strideLength).to.equal(4.3);
  });

  it("should have a daily step goal", () => {
    expect(user.dailyStepGoal).to.equal(10000);
  });

  it("should have array of friend user IDs", () => {
    expect(user.friends).to.deep.equal([16, 4, 8]);
  });

  it("should have have a method that returns users first name only", () => {
    let firstName = user.getFirstName();
    expect(firstName).to.equal("Luisa");
  });

  it("should return the average fluid ounces consumed per day for all time", () => {
    expect(user.calAverageFluid(hydrationData)).to.equal(63);
  });

  it("should return fluid ounces they consumed for a specific day (identified by a date)", () => {
    expect(user.getDayFluid(hydrationData, "2019/06/15")).to.equal(37);
  });

  it("should return fluid ounces of water consumed each day over the course of a week (7 days)", () => {
    expect(user.getWeeklyFluids(hydrationData, "2019/06/22")).to.deep.equal([
      { date: "2019/06/21", numOunces: 50 },
      { date: "2019/06/20", numOunces: 50 },
      { date: "2019/06/19", numOunces: 91 },
      { date: "2019/06/18", numOunces: 61 },
      { date: "2019/06/17", numOunces: 96 },
      { date: "2019/06/16", numOunces: 69 },
    ]);
  });
});
