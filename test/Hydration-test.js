const chai = require('chai');
const expect = chai.expect;
const Hydration = require('../src/Hydration');
const hydrationTestData = require('../data/hydration-test-data')

describe('Hydration', function() {

  it('should be a function', function() {
    const hydration = new Hydration();
    expect(Hydration).to.be.a('function');
  });

  it('should be an instance of Hydration', function() {
    const hydration = new Hydration();
    expect(hydration).to.be.an.instanceof(Hydration);
  });

  it('should have be connected to test data file', function() {
    const hydration = new Hydration(hydrationTestData);
    console.log(hydrationTestData)
    expect(hydrationTestData[0].userID).to.eql(1);
  });
});
