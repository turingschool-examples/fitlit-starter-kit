const chai = require('chai');
const expect = chai.expect;
const Hydration = require('../src/Hydration');
const hydrationTestData = require('../data/hydration-test-data')

describe('Hydration', function() {

  let hydration
  beforeEach(function() {
    hydration = new Hydration(hydrationTestData)
  })

  it('should be a function', function() {
    expect(Hydration).to.be.a('function');
  });

  it('should be an instance of Hydration', function() {
    expect(hydration).to.be.an.instanceof(Hydration);
  });

  it('should have be connected to test data file', function() {
    expect(hydrationTestData[0].userID).to.eql(1);
  });
});
