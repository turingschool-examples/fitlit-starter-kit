import { expect } from "chai";
import UserRepository from "../src/UserRepository";
const userTestData = require("../src/data/userTestData");

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
    userRepo.findAverageStepGoal();
    expect(userRepo.avgUserStepGoal).to.equal(6667);
  });
});
