const chai = require('chai');
const expect = chai.expect;
const data = require('../data/user-test-data');
const currentUser = data[0];
const User = require('../src/user');


describe("User", () => {

  beforeEach(function() {
    user1 = new User(currentUser);
  });

  it("should be a function", () => {
    expect(User).to.be.a("function")
  });

  it("should be an instance", () => {
    expect(user1).to.be.an.instanceof(User)
  });

  it("should have a user", () => {
    expect(user1).to.eql(currentUser)
  })

  it("should have properties", () => {
    expect(user1.address).to.eql("15195 Nakia Tunnel, Erdmanport VA 19901-1697")
    expect(user1.name).to.eql("Luisa Hane")
    expect(user1.strideLength).to.eql(4.3)
  })

  it("should be able to return a user's first name", () => {
    expect(user1.returnFirstName()).to.eql("Luisa")
  })

});
