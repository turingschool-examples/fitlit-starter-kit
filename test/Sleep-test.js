import { expect } from "chai";
import Sleep from "../src/Sleep";
const sleepData = require("../src/data/sleepTestData");

describe("Sleep", () => {
  let sleep1Data;

  beforeEach(() => {
    sleep1Data = new Sleep(sleepData[0]);
  });

  it("should be a function", () => {
    expect(Sleep).to.be.a("function");
  });

  it("should be an instance of Sleep", () => {
    expect(sleep1Data).to.be.an.instanceOf(Sleep);
  });

  it("should have user ID", () => {
    expect(sleep1Data.userID).to.equal(1);
  });

  it("should have a date", () => {
    expect(sleep1Data.date).to.equal("2019/06/15");
  });

  it("should have hours slept", () => {
    expect(sleep1Data.hoursSlept).to.equal(6.1);
  });

  it("should have a sleep quality score", () => {
    expect(sleep1Data.sleepQuality).to.equal(2.2);
  });
});
