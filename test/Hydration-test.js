const chai = require('chai');
const expect = chai.expect;

const hydrationData = require('../data/practice-hydration');
const Hydration = require('../src/Hydration');

describe('Hydration', function() {

  let hydration;
  beforeEach(() => {
    hydration = new Hydration(hydrationData);
  });

  it('should be a function', function() {
    expect(Hydration).to.be.a('function');
  });
    
  it('should be an instance of Hydration', function() {
    expect(hydration).to.be.an.instanceof(Hydration);
  });

   it('should return Id from current user', function() {
    expect(hydration.consumerInfo(3)).to.be.a('array');
  });

  it('should return the average fluid ounces per day', function() {
    expect(hydration.averageFluid(3)).to.equal(56);
  });
});