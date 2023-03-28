import {
  expect
} from 'chai';
import Hydration from '../src/classes/Hydration.js';
import hydrationTestData from './hydration-test-data.js';

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
  })

  it("should have a property that holds the hydration data object", () => {
    hydration = new Hydration(hydrationTestData[1]);
    expect(hydration.data).to.deep.equal({
      userID: 1,
      date: "2023/03/24",
      numOunces: 28
    }, );
  });

  it("should be able to find hydration data based on the user", () => {
    expect(hydration.findUserById(1)).to.have.a.lengthOf(6);
  });

  it("should be able to able to calculate the average liquid a user consumes", () => {
    expect(hydration.calculateAverageFluidPerUser(1)).to.equal(30.833333333333332);
  });
  
  it('should be a function', function () {
    expect(hydration.dailyOuncesConsumed).to.be.a('function');
  });

  it('should return a users ounces consumed', function () {
    expect(hydration.dailyOuncesConsumed(1, "2023/03/24")).to.be.equal(28);
  });

  it('should return a different users ounces consumed', function () {
    expect(hydration.dailyOuncesConsumed(14, "2023/03/24")).to.be.equal(45);
  });
  
  it('should be a function', function () {
    expect(hydration.weeklyOuncesConsumed).to.be.a('function');
  });

  it('should return a users ounces consumed in a given week', function () {
    expect(hydration.weeklyOuncesConsumed(1, "2023/03/24")).to.be.deep.equal([
      { userID: 1, date: '2023/03/24', numOunces: 28 },
      { userID: 1, date: '2023/03/25', numOunces: 50 },
      { userID: 1, date: '2023/03/26', numOunces: 21 },
      { userID: 1, date: '2023/03/29', numOunces: 20 }
    ]);
  });
});