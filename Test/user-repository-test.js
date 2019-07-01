const chai = require('chai');
const expect = chai.expect;
const data = require('../data/user-test-data')
const UserRepository = require('../src/user-repository')

  describe("User-Repository", () => {

  beforeEach(function() {
    userRepository = new UserRepository(data);
  });

  it("should be a function", () => {
    expect(UserRepository).to.be.a("function")
  });

  it("should be an instance", () => {
    expect(userRepository).to.be.an.instanceof(UserRepository)
  });

  it("should return a users data based on its id", () => {
    expect(userRepository.returnUserData(2)).to.eql(data[1])
    expect(userRepository.returnUserData(1)).to.eql(data[0])
  });

  it("should return average step goal amongst all users", () => {
    expect(userRepository.returnAverageStepGoal()).to.eql(6667)

  });



})
