const chai = require('chai');
const expect = chai.expect;

const User = require('../src/User');
const UserRepository = require('../src/User-repository');

describe('UserRepository', () => {
  let user1, user2, user3, userRepo;
  beforeEach(() => {
    user1 = new User({
      "id": 1,
      "name": "Luisa Hane",
      "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
      "email": "Diana.Hayes1@hotmail.com",
      "strideLength": 4.3,
      "dailyStepGoal": 10000,
      "friends": [16, 4, 8]
    });
    user2 = new User({
      "id": 2,
      "name": "Jarvis Considine",
      "address": "30086 Kathryn Port, Ciceroland NE 07273",
      "email": "Dimitri.Bechtelar11@gmail.com",
      "strideLength": 4.5,
      "dailyStepGoal": 5000,
      "friends": [9, 18, 24, 19]
    });
    user3 = new User({
      "id": 3,
      "name": "Herminia Witting",
      "address": "85823 Bosco Fork, East Oscarstad MI 85126-5660",
      "email": "Elwin.Tromp@yahoo.com",
      "strideLength": 4.4,
      "dailyStepGoal": 5000,
      "friends": [19, 11, 42, 33]
    });

    userRepo = new UserRepository([user1, user2, user3]);
  });

  it('should take in an array of users', () => {
    expect(userRepo.users.length).to.equal(3);
  })

  it("should return an individual user's data", () => {
    expect(userRepo.returnUserData(1)).to.equal(user1);
  })

  it("should return the average step count of all users", () => {
    expect(userRepo.returnAllUsersAverageStepGoal()).to.equal(6666);
  })
})