const chai = require('chai');
const expect = chai.expect;
const HydrationRepository = require('../src/HydrationRepository');
const hydrationTestData = require('../data/test-data/hydration-test-data');

beforeEach(() => {
  hydrationRepository = new HydrationRepository(hydrationTestData, 2);
})

describe('HydrationRepository', function() {

  it.only('should be a function', function() {
    expect(HydrationRepository).to.be.a('function');
  });

  it.only('should store user hydation objects', function() {
    expect(hydrationRepository.id).to.equal(2);
  })


});
