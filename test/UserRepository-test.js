const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User');
const UserRepo = require('../src/UserRepository');
const UserSub = require('../data/UserSub')

var user1

const UserRepository = require("../src/UserRepository");

 beforeEach(() => {
  const userRepository = new UserRepository("../data/usersSub.js");
 });

describe("UserRepository", function() {
  it("should be a function", function() {
    expect(UserRepository).to.be.a("function");
  });

  it("should be an instance of UserRepository", function() {
    const userRepository = new UserRepository();
    expect(userRepository).to.be.an.instanceof(UserRepository);
  });

  it("should return user data given a user ID", function() {
    const userRepository = new UserRepository("../data/userSub.js");
    expect(userRepository.returnUserData(2)).to.deep.equal({
      "id": 2,
      "name": "Jarvis Considine",
      "address": "30086 Kathryn Port, Ciceroland NE 07273",
      "email": "Dimitri.Bechtelar11@gmail.com",
      "strideLength": 4.5,
      "dailyStepGoal": 5000,
      "friends": [
        9,
        18,
        24,
        19
      ]
    });
  });

  it("should return user data given a user ID", function() {
    const userRepository = new UserRepository("../data/usersSub.js");
    expect(userRepository.returnUserData(8)).to.deep.equal({
      "id": 8,
      "name": "Laney Abshire",
      "address": "86416 Koch Inlet, North Kaciefurt MA 80635",
      "email": "Janice_Nitzsche2@yahoo.com",
      "strideLength": 2.8,
      "dailyStepGoal": 2000,
      "friends": [
        11,
        41,
        23,
        49
      ]
    });

  it("should return the average step goal amongst all users", function() {
    const userRepository = new UserRepository("../data/userSub.js");
    expect(userRepository.returnAvgStepGoal()).equal(6200)
  });

  it("should give an error if the average step goal is incorrect", function() {
    const userRepository = new UserRepository("../data/userSub.js");
    expect(userRepository.returnAvgStepGoal()).not.equal(5000)

  });
});
