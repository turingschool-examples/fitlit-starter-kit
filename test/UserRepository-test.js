const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User');
const UserRepo = require('../src/UserRepository');
const UserSub = require('../data/UserSub')

var user1

const UserRepository = require("../src/UserRepository");

// beforeEach(() => {
//     user1 = new User({
//         "id": 1,
//         "name": "Luisa Hane",
//         "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
//         "email": "Diana.Hayes1@hotmail.com",
//         "strideLength": 4.3,
//         "dailyStepGoal": 10000,
//         "friends": [
//           16,
//           4,
//           8
//         ]
//       });
//   });

describe("UserRepository", function() {
  it("should be a function", function() {
    expect(UserRepository).to.be.a("function");
  });

  it("should be an instance of UserRepository", function() {
    const userRepository = new UserRepository();
    expect(userRepository).to.be.an.instanceof(UserRepository);
  });

  it("should return user data given a user ID", function() {
    const userRepository = new UserRepository("../data/usersSub.js");
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
});
