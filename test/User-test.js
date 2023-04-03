import {
  expect
} from 'chai';
import User from "../src/classes/User.js";
import userTestData from './user-test-data.js';

describe("User", () => {
  let user1, user2, user3;
  beforeEach(() => {
    user1 = new User(userTestData[0]);
    user2 = new User(userTestData[1]);
    user3 = new User(userTestData[4]);
  });

  it("should be a function", () => {
    expect(User).to.be.a('function');
  });

  it("should be an instance of User", () => {
    expect(user1).to.be.an.instanceOf(User);
  });

  it("should have a user's id", () => {
    expect(user1.id).to.equal(1);
    expect(user2.id).to.equal(2);
    expect(user3.id).to.equal(5);
  });

  it("should have a user's address", () => {
    expect(user1.address).to.equal("9484 Lucas Flat, West Kittymouth WA 67504")
  })

  it("should have a user's name", () => {
    expect(user1.name).to.equal("Trystan Gorczany");
    expect(user2.name).to.equal("Tyreek VonRueden");
  });

  it("should have the email address of the user", () => {
    expect(user1.email).to.equal("Taurean_Pollich31@gmail.com")
    expect(user2.email).to.equal("Nicolette_Halvorson43@yahoo.com");
    expect(user3.email).to.equal("Jerald55@yahoo.com");
  });

  it("should hold the user's daily stride goal", () => {
    expect(user1.strideLength).to.equal(4);
    expect(user2.strideLength).to.equal(4.5)
    expect(user3.strideLength).to.equal(3.3)
  })

  it("should have a user's daily step goal", () => {
    expect(user1.dailyStepGoal).to.equal(7000)
    expect(user2.dailyStepGoal).to.equal(9000)
    expect(user3.dailyStepGoal).to.equal(10000)
  });

  it("should have an array of the user's friends id number", () => {
    expect(user1.friends).to.deep.equal([5, 43, 46, 11]);
  });

  it("should have a method to return the first name of user", () => {
    expect(user1.getFirstName()).to.equal("Trystan");
    expect(user2.getFirstName()).to.equal("Tyreek");
    expect(user3.getFirstName()).to.equal("Brycen");
  });
});