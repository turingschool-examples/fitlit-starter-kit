const chai = require('chai');
const expect = chai.expect;
const HydrationUser = require('../src/HydrationUser');
const hydrationTestData = require('../data/test-data/hydration-test-data');

describe('HydrationUser', function() {
  it.only('should be a function', function() {
    const hydrationUser = new HydrationUser(hydrationTestData);
    expect(HydrationUser).to.be.a('function');
  });

  it.only('should access array of test data', function() {
    const hydrationUser = new HydrationUser(hydrationTestData);
    expect(hydrationUser.hydrationTestData).to.equal(hydrationTestData)
  });

  it.only('should find hydration info based on date', function() {
    const hydrationUser = new HydrationUser(hydrationTestData);
    expect(hydrationUser.findDailyHydration('2019/06/17', 3)).to.equal(28)
  })

  it.only('should find weekly hydration info based on id', function() {
    const hydrationUser = new HydrationUser(hydrationTestData);
    expect(hydrationUser.findWeeklyHydration(1)).to.deep.equal([69, 96, 61, 91, 50, 50, 43])
  })






});