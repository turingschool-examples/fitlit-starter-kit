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
    challenge.getUsersData(Calculator, activityDataTest, userDataTest);
  })

  it("should be an instance of Challenge", function() {
    expect(challenge).to.be.an.instanceof(Challenge);
  });

  it("should be able to log trends, a goal, its current users, and their ranking",
      function() {
        expect(challenge.challengeGoal).to.equal(50000);
        expect(challenge.userIDs).to.be.an.instanceof(Array);
    });
  it("Should be able to get users for the challenge", function() {
    expect(challenge.userIDs).to.be.an.instanceof(Array);
    expect(challenge.userIDs[0]).to.equal(user.id);
    expect(challenge.userIDs[1]).to.equal(user.friends[0]);
    expect(challenge.userIDs[2]).to.equal(user.friends[1]);
    expect(challenge.userIDs[3]).to.equal(user.friends[2]);
  });

  it.skip("Should be able to get the names of each user", function() {
    let names = challenge.getFriendNames(userRepository);
    expect(names).to.deep.equal([ 'Luisa', 'Mae', 'Laney', 'Garnett' ]);
  });

  it("Should be able to get the total step counts for each user", function() {
    console.log(challenge);
  });
});
