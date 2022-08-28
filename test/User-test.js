import { expect } from "chai";
import User from "../src/User";
//import userData from "../src/data/users"
// import { beforeEach } from "mocha";

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
    console.log(user)
    expect(user).to.be.an("object");
  });

  it("should have an id", () => {
    expect(user.id).to.deep.equal(1)
  });

  it("should have a name", () => {
    expect(user.name).to.deep.equal("Luisa Hane")
  });

  it('should have an address', ()=>{
    expect(user.address).to.deep.equal("15195 Nakia Tunnel, Erdmanport VA 19901-1697")
  })

  it("should have a email", () => {
    expect(user.email).to.deep.equal("Diana.Hayes1@hotmail.com")
  });

  it("should have a strideLength", () => {
    expect(user.strideLength).to.deep.equal(4.3)
  });

  it("should have friend array", ()=>{
    expect(user.friends).to.be.an('array')
  })

  it("should save a friends in a array by their id ", () => {
    expect(user.friends[0]).to.be.an('number')
  });

  it("should have have a method that returns users first name only", () => {
    let firstName = user.getFirstName()
    expect(firstName).to.deep.equal("Luisa")
  });

  it("should represents a single user", () => {
    expect(user).to.eql(userData);
    }
  );
});
