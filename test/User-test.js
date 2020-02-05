const chai = require("chai");
const { expect } = chai;
const User = require("../src/classes/User");
const userDataTest = require("../test-data/users-test");

describe("User", function() {
  let user;

  beforeEach("instantiate new User", function() {
    user = new User(userDataTest[0]);
  });

  it("should be an instance of User", function() {
    expect(user).to.be.an.instanceOf(User);
  });

  it("should accept userData object", function() {
    expect(user.id).to.equal(userDataTest[0].id);
    expect(user.name).to.equal(userDataTest[0].name);
    expect(user.address).to.equal(userDataTest[0].address);
    expect(user.email).to.equal(userDataTest[0].email);
    expect(user.strideLength).to.equal(userDataTest[0].strideLength);
    expect(user.dailyStepGoal).to.equal(userDataTest[0].dailyStepGoal);
    expect(user.friends).to.equal(userDataTest[0].friends);
  });

  it("should return the first name", function() {
    expect(user.getFirstName()).to.equal("Luisa");
    expect(user.name).to.equal("Luisa Hane");
  });
});
