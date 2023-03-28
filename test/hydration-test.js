import {
  expect
} from 'chai';
import Hydration from '../src/classes/Hydration.js';
import hydrationTestData from './hydration-test-data.js';
import User from '../src/User.js';
import UserRepository from "../src/UserRepository";


describe("Hydration", () => {
  let hydration;

  beforeEach(() => {
    hydration = new Hydration(hydrationTestData);

  });
  it("should be a function", () => {
    expect(Hydration).to.be.a("function");
  });

  it("should be an instance of Hydration", () => {
    expect(hydration).to.be.an.instanceOf(Hydration);
  });

  it("should have a property that holds the hydration data object", () => {
    hydration = new Hydration(hydrationTestData[0]);
    expect(hydration.data).to.deep.equal({
      userID: 1,
      date: "2023/03/24",
      numOunces: 28
    }, );
  });

  it("should be able to find hydration data based on the user", () => {
    expect(hydration.findUserById(1)).to.have.a.lengthOf(3);
  })

  it("should be able to able to calculate the average liquid a user consumes", () => {
    expect(hydration.calculateAverageFluidPerUser(1)).to.equal(33);
  });
});