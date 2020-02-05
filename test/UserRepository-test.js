const chai = require("chai");
const { expect } = chai;
const UserRepository = require("../src/classes/UserRepository");
const userDataTest = require("../test-data/users-test");

describe("UserRepository", function() {
  let userRepository;
  let testUser;

  before("instantiate UserRepository", function() {
    userRepository = new UserRepository(userDataTest);
    testUser = userRepository.getUserData(1);
  });

  it("should be an instance of UserRepository", function() {
    expect(userRepository).to.be.an.instanceof(UserRepository);
  });

  it("should accept user data", function() {
    expect(userRepository.userData).to.deep.equal(userDataTest);
  });

  it("should return a user's data given an id", function() {
    expect(userRepository.getUserData(1)).to.deep.equal(testUser);
  });

  it("should return the average step goal for all users", function() {
    expect(userRepository.getAvgStepGoal()).to.equal(6500);
  });

  it("should return multiple objects from an array of ids", function() {
    expect(userRepository.getGroupData([2, 3, 4])).to.deep.equal([
      {
        id: 2,
        name: "Mae Connelly",
        address: "28926 Schinner Islands, Turnermouth NE 23720-3230",
        email: "Marcos_Pollich@hotmail.com",
        strideLength: 3.1,
        dailyStepGoal: 4000,
        friends: [48, 7, 44, 8]
      },
      {
        id: 3,
        name: "Laney Abshire",
        address: "86416 Koch Inlet, North Kaciefurt MA 80635",
        email: "Janice_Nitzsche2@yahoo.com",
        strideLength: 2.8,
        dailyStepGoal: 2000,
        friends: [11, 41, 23, 49]
      },
      {
        id: 4,
        name: "Garnett Cruickshank",
        address: "992 Zita Mall, North Tremainemouth MA 19312-3532",
        email: "Laverna47@hotmail.com",
        strideLength: 3.9,
        dailyStepGoal: 10000,
        friends: [25, 31, 3, 16]
      }
    ]);
  });

  it("should create objects for friends", function() {
    expect(testUser.friends[0]).to.deep.equal({
      id: 2,
      name: "Mae Connelly",
      address: "28926 Schinner Islands, Turnermouth NE 23720-3230",
      email: "Marcos_Pollich@hotmail.com",
      strideLength: 3.1,
      dailyStepGoal: 4000,
      friends: [48, 7, 44, 8]
    });
  });
});
