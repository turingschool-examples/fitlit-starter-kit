const chai = require("chai");
const { expect } = chai;
const UserRepository = require("../src/classes/UserRepository");
const User = require("../src/classes/User");
const userDataTest = require("../test-data/users-test");

describe("UserRepository", function() {
  let userRepository;

  beforeEach("instantiate UserRepository", function() {
    userRepository = new UserRepository(userDataTest);
  });

  it("should be an instance of UserRepository", function() {
    expect(userRepository).to.be.an.instanceof(UserRepository);
  });

  it("should accept user data", function() {
    expect(userRepository.userData).to.deep.equal(userDataTest);
  });

  it("should return a user's data given an id", function() {
    expect(userRepository.getUserData(1)).to.deep.equal(userDataTest[0]);
  });

  it("should return the average step goal for all users", function() {
    expect(userRepository.getAvgStepGoal()).to.equal(6500);
  });

  it("should set a current user", function() {
    const state = { currentUser: null };
    const randomId = userRepository.getRandomUserId(1, 4);
    const selectedUser = userRepository.getUserData(randomId);
    state.currentUser = new User(selectedUser);
    expect(state.currentUser).to.be.an.instanceof(User);
    expect(state.currentUser.getFirstName()).to.equal("Luisa");
  });

  it("should instantiate the user's friend array as instances of ", function() {});
});
