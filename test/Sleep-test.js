const chai = require("chai");
const expect = chai.expect;

const Sleep = require("../src/Sleep");

describe("sleep", () => {
  let sleep;

  beforeEach(() => {
    sleep = new Sleep(1);
  });

  it.only("should be a function", () => {
    expect(Sleep).to.be.a("function");
  });

  it.only("should be an instance of a Sleep", () => {
    expect(sleep).to.be.a.instanceOf(Sleep);
  });

  it.only("should be able to access a specific user", () => {
    sleep.findSleepData(4);
    expect(sleep.findSleepData(4).length).to.deep.equal(11);
  });

  it.only("should be able to identify the average quality of sleep for a user", () => {
    sleep.findSleepData(4);
    expect(sleep.findAverageSleepQualityForUser()).to.be.equal(3);
  });

  it.only("should be able to identify the average hours of sleep for a user", () => {
    sleep.findSleepData(4);
    expect(sleep.findAverageHoursSleptForUser()).to.be.equal(8);
  });

  it.only("should be able to find sleep quality for a specific user on a specific date", () => {
    sleep.findSleepData(4);
    expect(sleep.findSleepQualityForSpecificDay("2019/06/23")).to.equal(1.5);
  });

  it.only("should be able to find the sleep quality of a week for a user", () => {
    sleep.findSleepData(4);
    expect(sleep.findSleepQualityForWeek("2019/06/23")).to.equal(2);
  });

  it.only("should be able to return the hours of sleep for a user", () => {
    sleep.findSleepData(4);
    expect(sleep.findHoursSleptForWeek("2019/06/23")).to.equal(60);
  });
});
