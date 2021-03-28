const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User');
// const Users = require('../data/users.js');

describe('User', function() {
  let users, user1, user2, user3;

  beforeEach(() => {
    users = [{"id": 1, "name": "Luisa Hane", "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697", "email": "Diana.Hayes1@hotmail.com", "strideLength": 4.3, "dailyStepGoal": 10000, "numOunces": 96, "friends": [16, 4, 8]},
      {"id": 2,"name": "Jarvis Considine", "address": "30086 Kathryn Port, Ciceroland NE 07273", "email": "Dimitri.Bechtelar11@gmail.com", "strideLength": 4.5, "dailyStepGoal": 5000, "friends": [9, 18, 24, 19]},
      {"id": 3, "name": "Herminia Witting", "address": "85823 Bosco Fork, East Oscarstad MI 85126-5660", "email": "Elwin.Tromp@yahoo.com", "strideLength": 4.4, "dailyStepGoal": 5000, "friends": [19,11,42,33]},];
    user1 = new User(users[0]);
    user2 = new User(users[1]);
    user3 = new User(users[2]);
  });

  it("should be a function", function() {
    expect(User).to.be.a('function');
  });

  it("should be an instance of User", function() {
    expect(user1).to.be.an.instanceof(User);
  });

  it("should store a User's id", function() {
    expect(user1.id).to.equal(1);
    expect(user2.id).to.equal(2);
    expect(user3.id).to.equal(3);
  });

  it("should store a User's name", function() {
    expect(user1.name).to.equal("Luisa Hane");
    expect(user2.name).to.equal("Jarvis Considine");
    expect(user3.name).to.equal("Herminia Witting");
  });

  it("should store a User's address", function() {
    expect(user1.address).to.equal("15195 Nakia Tunnel, Erdmanport VA 19901-1697");
    expect(user2.address).to.equal("30086 Kathryn Port, Ciceroland NE 07273");
    expect(user3.address).to.equal("85823 Bosco Fork, East Oscarstad MI 85126-5660");
  });

  it("should store a User's email", function() {
    expect(user1.email).to.equal("Diana.Hayes1@hotmail.com");
    expect(user2.email).to.equal("Dimitri.Bechtelar11@gmail.com");
    expect(user3.email).to.equal("Elwin.Tromp@yahoo.com");
  });

  it("should store a User's stride length", function() {
    expect(user1.stride).to.equal(4.3);
    expect(user2.stride).to.equal(4.5);
    expect(user3.stride).to.equal(4.4);
  });

  it("should store a User's daily step goal", function() {
    expect(user1.stepGoal).to.equal(10000);
    expect(user2.stepGoal).to.equal(5000);
    expect(user3.stepGoal).to.equal(5000);
  });

  it("should store a User's friends", function() {
    expect(user1.friends[0]).to.equal(16);
    expect(user2.friends).to.deep.equal([9, 18, 24, 19]);
    expect(user3.friends[3]).to.equal(33);
  });

  it("should store a User's hydration data", function() {
    expect(user1.hydrationData).to.deep.equal([]);
  });

  it("should store a User's average daily water intake", function() {
    expect(user1.avgDailyWater).to.equal(0);
  });

  it("should be able to return a User's first name", function() {
    expect(user1.returnFirstName()).to.equal("Luisa");
  });
});