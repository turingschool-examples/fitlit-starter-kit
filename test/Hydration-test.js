const chai = require('chai');
const expect = chai.expect;

const Hydration = require('../src/Hydration');
const hydrationData = require('../test-data/hydration-fixtures');

describe('Hydration', function() {

  it('should be a function', function() {
    const hydration = new Hydration();
    expect(Hydration).to.be.a('function');
  });

  it('should store user information', function() {
    const hydration = new Hydration(hydrationData);
    expect(hydrationData).to.be.a('array')
  });

  it('should calculate average daily hydration in ounces', function() {
    const hydration = new Hydration(hydrationData);
    expect(hydration.calculateAverageDailyHydration(1)).to.equal(55)
  })

  it('should return the how many fluid ounces a used consumes on a specific day', function() {
    const hydration = new Hydration(hydrationData);
    expect(hydration.displayFluidOuncesPerDay(1, '2019/06/16')).to.equal(69);
  });

  it('should return array of weekly fluid ounces per user', function() {
    const hydration = new Hydration(hydrationData);
    expect(hydration.displayWeeklyFluidOunce(1)).to.deep.eql([69, 61, 91, 50, 50, 43, 39]);
  });

});
