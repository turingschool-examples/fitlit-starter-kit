import { expect } from 'chai';
import Hydration from '../src/classes/Hydration.js';
import hydrationTestData from './hydration-test-data.js';
import User from '../src/User.js';
import UserRepository from "../src/UserRepository";


describe("Hydration", () => {
  let hydration, testRepository, testUser, users;

  beforeEach(() => {
    hydration = new Hydration(hydrationTestData);
    testRepository = new UserRepository(users);
   users = [
     {
       "id": 1,
       "name": "Trystan Gorczany",
       "address": "9484 Lucas Flat, West Kittymouth WA 67504",
       "email": "Taurean_Pollich31@gmail.com",
       "strideLength": 4,
       "dailyStepGoal": 7000,
       "friends": [
         5,
         43,
         46,
         11
    ] }
       ]
  
    // user1 = new UserRepository()
  });
  it("should be a function", function () {
    expect(Hydration).to.be.a("function");
  });

  it("should be instance of Hydration", function () {
    expect(hydration).to.be.an.instanceOf(Hydration);
  });

  it("should have a property that holds the hydration data", () => {
    hydration = new Hydration(hydrationTestData[0]);
    expect(hydration.data).to.deep.equal(
      { userID: 1, date: "2023/03/24", numOunces: 28 },
    );
  });

  it("should be able to find hydration data based on the user", () => {
    expect(hydration.findUserById(1)).to.have.a.lengthOf(3);
  })
  it("should be able to able to calculate the average liquid a user consumes", () => {
    expect(hydration.calculateAverageFluidPerUser(1)).to.equal(33);
  });
});