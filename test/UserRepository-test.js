import { expect } from "chai";
import UserRepository from "../src/UserRepository";
const userTestData = require("../src/data/userTestData");
const sleepTestData = require("../src/data/sleepTestData");

describe("User Repository", () => {
  let userRepo;

  beforeEach(() => {
    userRepo = new UserRepository(userTestData);
  });

  it("should be a function", () => {
    expect(UserRepository).to.be.a("function");
  });

  it("should be a an instance of UserRepository", () => {
    expect(userRepo).to.be.an.instanceOf(UserRepository);
  });

  it("should hold all user data objects", () => {
    expect(userRepo.allUserData).to.deep.equal(userTestData);
  });

  it("have a method to return a users data from a given user ID", () => {
    expect(userRepo.findUserData(2)).to.deep.equal(userTestData[1]);
  });

  it("should have a method to calculate average step goal of all users", () => {
    expect(userRepo.findAverageStepGoal()).to.equal(6667);
  });

  it("should have a method to calculate average hours slept of all users", () => {
    let averageHoursSlept = userRepo.findAverageSleepDetail(sleepTestData, "hoursSlept");
    expect(averageHoursSlept).to.equal(7.5);
  });

  it("should have a method to calculate average sleep quality of all users", () => {
    let averageSleepQuality = userRepo.findAverageSleepDetail(sleepTestData, "sleepQuality");
    expect(averageSleepQuality).to.equal(2.8);
  });
});
