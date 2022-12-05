import { expect } from "chai";
import userData from "../src/data/users";
import User from "../src/User";

describe("User", function () {
  let user;
  let user2;

  beforeEach(() => {
    user = new User(userData[0]);
  });

  it("Should be a function", function () {
    expect(User).to.be.a("function");
  });

  it("Should be an instance of User", function () {
    expect(user).to.be.an.instanceof(User);
  });

  it("Should have an id", function () {
    expect(user.id).to.equal(1);
  });

  it("Should have a name", function () {
    expect(user.name).to.equal("Luisa Hane");
  });

  it("Should have address", function () {
    expect(user.address).to.equal(
      "15195 Nakia Tunnel, Erdmanport VA 19901-1697"
    );
  });

  it("Should have an email", function () {
    expect(user.email).to.equal("Diana.Hayes1@hotmail.com");
  });

  it('Should have a stride length', function() {
    expect(user.strideLength).to.equal(4.3)
  })
});
