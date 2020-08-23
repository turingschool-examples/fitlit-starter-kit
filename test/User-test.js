const chai = require("chai");
const expect = chai.expect;
const User = require("../src/User")
const UserRepository = require("../src/UserRepository")

describe("User", () => {
  beforeEach(() =>{
    user1 =  {
                "id": 1,
                "name": "Luisa Hane",
                "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
                "email": "Diana.Hayes1@hotmail.com",
                "strideLength": 4.3,
                "dailyStepGoal": 10000,
                "friends": [
                  16,
                  4,
                  8
                ]
              },
    userRepository = new UserRepository([user1,user2,user3]);
    user = new User(userRepository.userData[0]);
  });

  it("should be a function", () => {
    expect(User).to.be.a("function")
  });

  it("should instance of User", () => {
    expect(user).to.be.an.instanceOf(User)
  });

  it("should store a user data", () => {
    expect(user.userData).to.be.equal(userRepository.userData[0])
  });

  it("should returns a user first name only", () => {
    expect(user.returnFristName()).to.be.equal("Luisa")
  });
})


//
