const chai = require('chai');
const expect = chai.expect;
const HydrationUser = require('../src/HydrationUser');
const hydrationTestData = require('../data/test-data/hydration-test-data');

describe('HydrationUser', function() {
  it.skip('should be a function', function() {
    const hydrationUser = new HydrationUser(hydrationTestData);
    expect(HydrationUser).to.be.a('function');
  });

  it.skip('should access array of test data', function() {
    const hydrationUser = new HydrationUser(hydrationTestData);
    console.log('2nd test:', hydrationTestData[0])
  })






});