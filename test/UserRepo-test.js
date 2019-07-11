const chai = require("chai");
const expect = chai.expect;

const User = require("../src/User");

describe("userRepo", () => {
  let userRepo;

  beforeEach(() => {
    user = new User(4); 
    userRepo = new UserRepo();
  });

  it.only("should be a function", () => {
    expect(UserRepo).to.be.a("function");
  });

  it.only("should be an instance of UserRepo", () => {
    expect(userRepo).to.be.a.instanceOf(UserRepo);
  });

  it.only("should have access to all users", () => {
    expect(userRepo.users.length).to.equal(12);
  });

  it.only("should acquire user's data by id", () => {
    userRepo.findUserData(4);
    expect(userRepo.users[3].id).to.equal(4);
  });

  it.only("should give the average step goal of all users", () => {
    expect(userRepo.findAverageStepGoal()).to.equal(6833);
  });
});
