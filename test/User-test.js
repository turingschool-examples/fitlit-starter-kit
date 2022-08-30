import { expect } from "chai";
import User from "../src/User";

describe("User", () => {
  let user1;

  beforeEach(() => {
    user1 = new User({
      id: 1,
      name: "Luisa Hane",
      address: "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
      email: "Diana.Hayes1@hotmail.com",
      strideLength: 4.3,
      dailyStepGoal: 10000,
      friends: [16, 4, 8]
    });
  });

  it("should be a function", () => {
    expect(User).to.be.a("function");
  });

  it("should be an instance of user", () => {
    expect(user1).to.be.an.instanceof(User);
  });

  it("should be able to store a users id", () => {
    expect(user1.id).to.equal(1);
  });

  it("should be able to store a users name", () => {
    expect(user1.name).to.equal("Luisa Hane");
  });

  it("should be able to store a users address", () => {
    expect(user1.address).to.equal("15195 Nakia Tunnel, Erdmanport VA 19901-1697");
  });

  it("should be able to store a users email", () => {
    expect(user1.email).to.equal("Diana.Hayes1@hotmail.com");
  });

  it("should be able to store a users stride length", () => {
    expect(user1.strideLength).to.equal(4.3);
  });

  it("should be able to store a users daily step goal", () => {
    expect(user1.dailyStepGoal).to.equal(10000);
  });

  it("should be able to store a users friends", () => {
    expect(user1.friends).to.deep.equal([16, 4, 8]);
  });

  it.skip("should only return the users first name", () => {
    const firstName = user1.returnFirstName();
    expect(firstName).to.equal("Luisa");
  });

});
