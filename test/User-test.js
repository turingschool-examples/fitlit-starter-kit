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

  it('Should have a name', function() {
    expect(user.name).to.equal('Luisa Hane')
  })
});
