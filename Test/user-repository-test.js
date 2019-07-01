const chai = require('chai');
const expect = chai.expect;
const data = require('../data/user-test')
const UserRepository = require('../src/user-repository')

  describe("User-Repository", () => {

  beforeEach(function() {
    userRepository = new UserRepository();
  });

  it("should be a function", () => {
    expect(UserRepository).to.be.a("function")
  });

  it("should be an instance", () => {
    expect(userRepository).to.be.an.instanceof(UserRepository)
  });

})
