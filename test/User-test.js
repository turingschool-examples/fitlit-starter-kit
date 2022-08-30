import { expect } from "chai";
import User from "../src/User";

describe("User", () => {
  let user1;
  let user2;
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

  it.skip("should be a function", () => {
    expect(User).to.be.a("function");
  });

  it.skip("should be an instance of user", () => {
    expect(user1).to.be.an.instanceof(User);
  });

});
