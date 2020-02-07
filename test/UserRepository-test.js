const chai = require("chai");
const { expect } = chai;
const UserRepository = require("../src/classes/UserRepository");
const User = require("../src/classes/User");
const userDataTest = require("../test-data/users-test");

describe("UserRepository", function() {
  let userRepository;
  let mockUser;

  before("instantiate UserRepository", function() {
    userRepository = new UserRepository(userDataTest);
    userRepository.instantiateUsers(User);
    mockUser = userRepository.users[0];
  });

  it("should be an instance of UserRepository", function() {
    expect(userRepository).to.be.an.instanceof(UserRepository);
  });

  it("should accept user data", function() {
    expect(userRepository.userData).to.deep.equal(userDataTest);
  });

  it("should instantiate all users as instances of class User", function() {
    expect(userRepository.users[0]).to.be.an.instanceof(User);
    expect(userRepository.users.length).to.equal(userDataTest.length);
  });

  it("should return a user's data given an id", function() {
    expect(userRepository.getUserData(1)).to.deep.equal(mockUser);
  });

  it("should return the average step goal for all users", function() {
    expect(userRepository.getAvgStepGoal()).to.equal(6500);
  });

  it("should return a random user id", function() {
    expect(userRepository.getRandomUserId()).to.be.within(1, 50);
  });
});
