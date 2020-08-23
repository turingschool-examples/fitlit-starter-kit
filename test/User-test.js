const chai = require("chai");
const expect = chai.expect;
const User = require("../src/User")

describe("User", () => {
  it("should be a function", () => {
    expect(User).to.be.a("function")
  });

  it("should instance of User", () => {
    let user = new User;
    expect(user).to.be.an.instanceOf(User)
  })

  
})


//
