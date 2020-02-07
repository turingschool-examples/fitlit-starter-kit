const chai = require('chai');
const { expect } = chai;
const Challenge = require('../src/classes/Challenge');
const User = require('../src/classes/User');
const UserRepository = require('../src/classes/UserRepository');
const Calculator = require('../src/classes/Calculator');
const userDataTest = require("../test-data/users-test");
const activityDataTest = require("../test-data/activity-test");

describe("Challenge", function() {
  let userRepository;
  let user;
  let challenge;
  let calculatorA;
  let calculatorB;
  let database;

  before("Set globals", function() {
    calculatorA = new Calculator(1);
    calculatorB = new Calculator(4);
    userRepository = new UserRepository(userDataTest);
    userRepository.instantiateUsers(User);
    user = new User(userRepository.getUserData(1));
    challenge = new Challenge();

    challenge.getUsers(user);
    challenge.getUsersSteps(Calculator, activityDataTest);
  })

  it("should be an instance of Challenge", function() {
    expect(challenge).to.be.an.instanceof(Challenge);
  });

  it("should be able to log trends, a goal, its current users, and their ranking",
      function() {
        expect(challenge.trends).to.equal(null);
        expect(challenge.leaderboard).to.equal(null);
        expect(challenge.challengeGoal).to.equal(5000);
        expect(challenge.users).to.be.an.instanceof(Array);
    });
  it("Should be able to get users for the challenge", function() {
    expect(challenge.users).to.be.an.instanceof(Array);
    expect(challenge.users[0]).to.equal(user.id);
    expect(challenge.users[1]).to.equal(user.friends[0]);
    expect(challenge.users[2]).to.equal(user.friends[1]);
    expect(challenge.users[3]).to.equal(user.friends[2]);
  });

  it("Should be able to get step counts for each user", function() {
    const test = calculatorA.getUserWeekTotal(activityDataTest, "2019/06/21", "numSteps");
    console.log(test);

    expect(challenge.stepCounts[0]).to.deep.equal(
      calculatorA.getUserWeekTotal(activityDataTest, "2019/06/21", "numSteps")
      // calculatorB.getUserWeekTotal(database.activityData, "2019/06/15", "numSteps"),
      // calculatorC.getUserWeekTotal(database.activityData, "2019/06/15", "numSteps"),
      // calculatorD.getUserWeekTotal(database.activityData, "2019/06/15", "numSteps")
    );
  });
});
