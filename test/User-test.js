const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User');
const userData = require('./test-data/user-data');


describe('User', function() {
  let user1, user2, user3;

  beforeEach(() => {
    user1 = new User(userData[0]);
    user2 = new User(userData[1]);
    user3 = new User(userData[2]);
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
    expect(user1.dailyStepGoal).to.equal(10000);
    expect(user2.dailyStepGoal).to.equal(5000);
    expect(user3.dailyStepGoal).to.equal(5000);
  });

  it("should store a User's friends", function() {
    expect(user1.friends[0]).to.equal(16);
    expect(user2.friends).to.deep.equal([9, 18, 24, 19]);
    expect(user3.friends[3]).to.equal(33);
  });

  it("should be able to return a User's first name", function() {
    expect(user1.returnFirstName()).to.equal("Luisa");
  });
});

// NEW CODE