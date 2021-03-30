const expect = require("chai").expect

const User = require("../src/User");

describe("User class", () => {
  let user1;
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
  });
  it("Should have a parameter to take in a userData object", () => {
      expect(user1).to.be.an.instanceOf(User);
      expect(user1.userData).to.deep.equal({
          "id": 15,
          "name": "Ezequiel Feest",
          "address": "78801 Lauryn Plain, Lake Elinor MN 27856-9054",
          "email": "Anthony_Toy@hotmail.com",
          "strideLength": 4.4,
          "dailyStepGoal": 5000,
          "friends": [10, 23, 35, 20, 5]
        });

  });
  it("Should hold on to the user properties from the data file", () => {
    expect(user1.id).to.equal(15);
    expect(user1.name).to.equal("Ezequiel Feest");
    expect(user1.address).to.equal("78801 Lauryn Plain, Lake Elinor MN 27856-9054");
    expect(user1.email).to.equal("Anthony_Toy@hotmail.com");
    expect(user1.strideLength).to.equal(4.4);
    expect(user1.dailyStepGoal).to.equal(5000);
    expect(user1.friends).to.deep.equal([10, 23, 35, 20, 5]);
  });
  it("Should have a method that returns a user's first name only", () => {
    const firstNameOnly = user1.firstName();
    expect(firstNameOnly).to.equal("Ezequiel");
  });
});
