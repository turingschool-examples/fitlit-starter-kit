const chai = require('chai');
const { expect } = chai;
const Challenge = require('../src/classes/Challenge');
const User = require('../src/classes/User');
const UserRepository = require('../src/classes/UserRepository');
const userDataTest = require("../test-data/users-test");

describe("Challenge", function() {
  let userRepository;
  let user;
  let challenge;

  before("Set globals", function() {
    userRepository = new UserRepository(userDataTest);
    user = new User(userRepository.getUserData(1));
    challenge = new Challenge();

    challenge.getUsers(user);
  })

  it("should be an instance of Challenge", function() {
    expect(challenge).to.be.an.instanceof(Challenge);
  });

  it.skip("should be able to log trends, a goal, its current users, and their ranking",
      function() {
        expect(challenge.trends).to.equal(null);
        expect(challenge.leaderboard).to.equal(null);
        expect(challenge.challengeGoal).to.equal(5000);
        expect(challenge.users).to.equal(null);
    });
  it("Should be able to users for the challenge", function() {
    expect(challenge.users).to.be.an.instanceof(Array);
    expect(challenge.users[0]).to.equal(user);
    expect(challenge.users[1]).to.equal(user.friends[0]);
    expect(challenge.users[2]).to.equal(user.friends[1]);
    expect(challenge.users[3]).to.equal(user.friends[2]);
  });
});
