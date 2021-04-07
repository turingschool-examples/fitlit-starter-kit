const expect = require("chai").expect

const User = require("../src/User");

describe("User class", () => {
  let user1, user2
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
      "id": 1,
      "name": "L. Katherine Hane",
      "address": undefined,
      "email": undefined,
      "strideLength": undefined,
      "dailyStepGoal": undefined,
      "friends": []
    });
  });
  it("Should have a parameter to take in a userData object", () => {
      expect(user1.id).to.equal(15);
      expect(user2.name).to.equal("L. Katherine Hane");
  });
  it("Should hold on to the user properties from the data file", () => {
    expect(user1.id).to.equal(15);
    expect(user1.name).to.equal("Ezequiel Feest");
    expect(user1.address).to.equal("78801 Lauryn Plain, Lake Elinor MN 27856-9054");
    expect(user1.email).to.equal("Anthony_Toy@hotmail.com");
    expect(user1.strideLength).to.equal(4.4);
    expect(user1.dailyStepGoal).to.equal(5000);
    expect(user1.friends).to.deep.equal([10, 23, 35, 20, 5]);

    expect(user2.id).to.equal(1);
    expect(user2.name).to.equal("L. Katherine Hane");
    expect(user2.address).to.equal(undefined);
    expect(user2.email).to.equal(undefined);
    expect(user2.strideLength).to.equal(undefined);
    expect(user2.dailyStepGoal).to.equal(undefined);
    expect(user2.friends).to.deep.equal([]);
  });
  it("Should have a method that returns a user's first name only", () => {
    const user1FirstNameOnly = user1.firstName();
    expect(user1FirstNameOnly).to.equal("Ezequiel");

    const user2FirstNameOnly = user2.firstName();
    expect(user2FirstNameOnly).to.equal("L.");
  });
});
