import { expect } from "chai";
import User from "../src/User";

describe("User", () => {
  let userData;
  let user;

  beforeEach(() => {
    userData = {
        id: 1,
        name: "Luisa Hane",
        address: "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
        email: "Diana.Hayes1@hotmail.com",
        strideLength: 4.3,
        dailyStepGoal: 10000,
        friends: [
        16,
        4,
        8
        ]
    }

    user = new User(userData);
  });

  it("should have a parameter to take in a userData object", () => {
    expect(userData).to.be.an("object");
  });

  it("should have an id", () => {
    expect(user.id).to.equal(1)
  });

  it("should have a name", () => {
    expect(user.name).to.equal("Luisa Hane")
  });

  it('should have an address', ()=>{
    expect(user.address).to.equal("15195 Nakia Tunnel, Erdmanport VA 19901-1697")
  })

  it("should have a email", () => {
    expect(user.email).to.deep.equal("Diana.Hayes1@hotmail.com")
  });

  it("should have a stride length", () => {
    expect(user.strideLength).to.equal(4.3)
  });

  it("should have a daily step goal", () => {
    expect(user.dailyStepGoal).to.equal(10000)
  });

  it("should have array of friend user IDs", ()=>{
    expect(user.friends).to.deep.equal([
      16,
      4,
      8
      ])
  });

  it("should have have a method that returns users first name only", () => {
    let firstName = user.getFirstName()
    expect(firstName).to.equal("Luisa")
  });
});
