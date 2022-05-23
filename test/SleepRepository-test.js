import { expect } from "chai";
import SleepRepository from "../src/SleepRepository";
import sleepData from "../src/data/sleep";

describe("Sleep", () => {
  let sleepRepository;

  beforeEach(() => {
    sleepRepository = new SleepRepository(sleepData);
  });

  it("should be a function", () => {
    expect(SleepRepository).to.be.a("function");
  });

  it("should be a new instance of SleepRepository", () => {
    expect(sleepRepository).to.be.an.instanceof(SleepRepository);
  });

  it("should hold the users sleep data", () => {
    expect(sleepRepository.sleepData).to.equal(sleepData);
  });

  it("should return all of users sleep data given its id number", () => {
    expect(sleepRepository.getSleepDataForUser(1)).to.deep.equal([
      { date: "2019/06/15", hoursSlept: 6.1, sleepQuality: 2.2, userID: 1 },
      { date: "2019/06/16", hoursSlept: 4.1, sleepQuality: 3.8, userID: 1 },
      { date: "2019/06/17", hoursSlept: 8, sleepQuality: 2.6, userID: 1 },
      { date: "2019/06/18", hoursSlept: 10.4, sleepQuality: 3.1, userID: 1 },
      { date: "2019/06/19", hoursSlept: 10.7, sleepQuality: 1.2, userID: 1 },
      { date: "2019/06/20", hoursSlept: 9.3, sleepQuality: 1.2, userID: 1 },
      { date: "2019/06/21", hoursSlept: 7.8, sleepQuality: 4.2, userID: 1 },
    ]);
  });

  it("should return one  user's average sleep quality for all time", () => {
    expect(sleepRepository.getAverageSleepQualityForUserAllTime(1)).to.deep.equal(2.614285714285714);
  });

  it("should have a function that returns the user's average hours of sleep per day", () => {
    expect(sleepRepository.getAverageSleepHoursForUserAllTime(1)).to.equal(8.057142857142855);
  });

  it("should return hours slept for a specific day", () => {
    expect(sleepRepository.getSleepDataByDate("2019/06/15", "hoursSlept", 1)).to.equal(6.1);
    expect(sleepRepository.getSleepDataByDate("2019/06/15", "hoursSlept", 2)).to.equal(7);
  });

  it("should return user's slept quality for a specific day", () => {
    expect(sleepRepository.getSleepDataByDate("2019/06/15", "sleepQuality", 1)).to.equal(2.2);
    expect(sleepRepository.getSleepDataByDate("2019/06/15", "sleepQuality", 2)).to.equal(4.7);
  });

  it('should show users sleep hours data per week', () => {
    expect(sleepRepository.getUsersSleepDataPerWeek(50, '2019/06/21', 'hoursSlept')).to.deep.equal([
      { '2019/06/15': 8.5 },
      { '2019/06/16': 7.2 },
      { '2019/06/17': 7.6 },
      { '2019/06/18': 5.7 },
      { '2019/06/19': 9.6 },
      { '2019/06/20': 7.8 },
      { '2019/06/21': 9.1 },
    ]);
  });

  it("should show users sleep quality data per week", () => {
    expect(sleepRepository.getUsersSleepDataPerWeek(50, "2019/06/21", "sleepQuality")).to.deep.equal([
      { "2019/06/15": 4.1 },
      { "2019/06/16": 1.5 },
      { "2019/06/17": 4 },
      { "2019/06/18": 1.8 },
      { "2019/06/19": 1 },
      { "2019/06/20": 1.1 },
      { "2019/06/21": 1.2 },
    ]);
  });

  it("should have a function to return the average of all user's sleep quality", () => {
    expect(sleepRepository.getAllUsersAverageSleep()).to.deep.equal(2.917142857142858);
  });
});
