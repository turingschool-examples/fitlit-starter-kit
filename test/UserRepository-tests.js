const expect = require("chai").expect;

const User = require("../src/User");
const UserRepository = require("../src/UserRepository");

describe("UserRepository class", () => {
  let user1, user2, user3, userRepo;
  beforeEach(() => {
    user1 = new User({
        "id": 15,
        "name": "Ezequiel Feest",
        "address": "78801 Lauryn Plain, Lake Elinor MN 27856-9054",
        "email": "Anthony_Toy@hotmail.com",
        "strideLength": 4.4,
        "dailyStepGoal": 5000,
        "friends": [10, 23, 35, 20, 5]
      });
    user2 = new User({
      "id": 16,
      "name": "Garnett Cruickshank",
      "address": "992 Zita Mall, North Tremainemouth MA 19312-3532",
      "email": "Laverna47@hotmail.com",
      "strideLength": 3.9,
      "dailyStepGoal": 10000,
      "friends": [25, 31, 3, 16]
    });
    user3 = new User({
      "id": 33,
      "name": "Leilani Quitzon",
      "address": "60013 Golden Overpass, Lake Dejon WI 77309-0820",
      "email": "Trinity_Rowe@hotmail.com",
      "strideLength": 3.5,
      "dailyStepGoal": 8000,
      "friends": [4, 18, 36, 30]
    });
    userRepo = new UserRepository([user1, user2, user3]);
  })
  it.skip("Should have a parameter to take in user data", () => {
    expect(userRepo).to.deep.equal([user1, user2, user3]);
  });
  it.skip("Should have a method to determine user data given a user ID", () => {
    const dataById = userRepo.determineUserData(33);
    expect(dataById).to.deep.equal(user3);
  });
  it.skip("Should determine the average step goal amongst all users", () => {
    const avgStepGoal = userRepo.calculateAvgStepGoal();
    expect(avgStepGoal).to.equal(17666.67);
  });
});
