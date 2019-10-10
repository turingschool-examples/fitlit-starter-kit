const chai = require('chai');
const expect = chai.expect;
const Hydration = require('../src/hydration.js');
const hydrationData = require('../test/hydrationSample.js');

let hydration;

describe('hydration', function() {
  beforeEach(() => {
    hydration = new Hydration(1);
  });

  it('should be an instance of hydration', function() {
    expect(hydration).to.be.an.instanceOf(Hydration);
  });

  it('should calculate the avg water consumption for a given user', function() {
    expect(hydration.calculateAvgOunces(hydration.userID, hydrationData)).to.equal(37);
  });

  it('should return the ounces drank when given an id and date', function() {
    expect(hydration.findOzByDay(1, '2019/08/15', hydrationData)).to.equal(39);
  });

  it('should return an array of oz drank for a week when given a date', function() {
    expect(hydration.findOzByWeek(3, "2019/06/15", hydrationData)).to.deep.equal([37, 75, 47, 85, 42, 87, 94]);
  });

  it('should return an array of user IDs for any users who had an average sleepQuality over 3 for the specified dates', function() {

  })
});
