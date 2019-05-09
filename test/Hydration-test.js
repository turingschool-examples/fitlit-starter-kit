const chai = require('chai');
const expect = chai.expect;

const Hydration = require('../src/Hydration');

describe('Hydration', function() {
  let hydration;
  beforeEach(function() {
    hydration = new Hydration();
  });
  it('should be a function', function() {
    expect(Hydration).to.be.a('function');
  });

  it('should be an instance of Hydration', function() {
    expect(hydration).to.be.an.instanceof(Hydration);
  });

  it.skip('should return a user average ounces of liquid consumed', function() {
    expect(hydration.getAverageFluidConsumption(1)).to.equal(55);
  })
});
