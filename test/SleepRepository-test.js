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

  it("should return all of users average sleep quality for all", () => {
    expect(sleepRepository.getAverageSleepQualityForAll(1)).to.deep.equal(
      2.614285714285714
    );
  });
//   it("should have a function that returns the average hours sleep per a day  ", () => {
//     expect(sleepRepository.getAverageSleepHours(1)).to.equal(8.057142857142855);
//   });
})
