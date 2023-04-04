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

  it("should not return data for an invalid user", () => {
    expect(hydration.findUserById(150)).to.deep.equal([]);
  });

  it("should be able to find hydration data based on the user", () => {
    expect(hydration.findUserById(1)).to.have.a.lengthOf(6);
  });

  it("should be able to able to calculate the average liquid a user consumes", () => {
    expect(hydration.calculateAverageFluidPerUser(1)).to.be.equal(30);
  });

  it("should be able return multiple users average liquid consumed given an id", () => {
    expect(hydration.calculateAverageFluidPerUser(3)).to.be.equal(95);
    expect(hydration.calculateAverageFluidPerUser(10)).to.be.equal(49);
    expect(hydration.calculateAverageFluidPerUser(7)).to.be.equal(74);
  });

  it('should return the amount of a users daily ounces consumed given a date and id', () => {
    expect(hydration.dailyOuncesConsumed(1, "2023/03/24")).to.be.equal(28);
  });

  it('should return a different users ounces consumed', function () {
    expect(hydration.dailyOuncesConsumed(14, "2023/03/24")).to.be.equal(45);
  });

  it('should return a users ounces consumed in a given week', function () {
    expect(hydration.weeklyOuncesConsumed(1, "2023/03/31")).to.be.deep.equal([{
        userID: 1,
        date: '2023/03/25',
        numOunces: 50
      },
      {
        userID: 1,
        date: '2023/03/26',
        numOunces: 21
      },
      {
        userID: 1,
        date: '2023/03/29',
        numOunces: 20
      },
      {
        userID: 1,
        date: '2023/03/31',
        numOunces: 51
      },
    ]);
  });
  it("should not return weekly hydration information with an invalid date or user", () => {
    expect(hydration.weeklyOuncesConsumed(150, "150/03/24")).to.be.deep.equal([]);
  })
});