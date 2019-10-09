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

});
