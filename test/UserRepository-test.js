const chai = require("chai");
const expect = chai.expect;
const UserRepository = require("../src/UserRepository")

describe("UserRepository", () => {
  let user1, user2, user3;
  beforeEach(function() => {
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
    user2 =  {
                "id": 2,
                "name": "Jarvis Considine",
                "address": "30086 Kathryn Port, Ciceroland NE 07273",
                "email": "Dimitri.Bechtelar11@gmail.com",
                "strideLength": 4.5,
                "dailyStepGoal": 5000,
                "friends": [
                  9,
                  18,
                  24,
                  19
                ]
              },
    user3 =  {
              "id": 3,
              "name": "Herminia Witting",
              "address": "85823 Bosco Fork, East Oscarstad MI 85126-5660",
              "email": "Elwin.Tromp@yahoo.com",
              "strideLength": 4.4,
              "dailyStepGoal": 5000,
              "friends": [
                19,
                11,
                42,
                33
              ]
            },
  })

  it("should be a function", () => {
    expect(UserRepository).to.be.a("function")
  });

  it("should be an instance of UserRepository", () => {
    expect(userRepository).to.be.an.instanceOf(UserRepository)
  });

  
})
