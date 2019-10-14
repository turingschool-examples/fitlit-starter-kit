const chai = require('chai');
const expect = chai.expect;

const Hydration = require('../class/hydration');
const HydrationDataTest = require('../test/hydration-data-test.js');

describe('Hydration', function() {

  it('should be a object', function() {
    const hydrationData = new Hydration(HydrationDataTest);
    expect(hydrationData).to.be.a('object');
  });

  it('should find a user, how many fluid ounces they consumed for a specific day and userID', function() {
    const hydrationData = new Hydration(HydrationDataTest);
    expect(hydrationData.findDailyHydrationAverage(1)).to.equal(59)
  });
 
  it('should find the average fluid ounces consumed per day from a userID', function() {
    const hydrationData = new Hydration(HydrationDataTest);
    expect(hydrationData.findHydrationByDate('2019/06/15', 1)).to.equal(37)
  });

  it('should return amount drank per day by week', function() {
    const hydrationData = new Hydration(HydrationDataTest);
    expect(hydrationData.printDailyHydration(1)).to.deep.equal([91, 50, 50, 43, 39, 61, 51]);
  });


});
