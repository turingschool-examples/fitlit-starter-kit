const chai = require('chai');
const expect = chai.expect;

const Hydration = require('../src/hydration');
const hydrationData = require('../data/test-data-hydration');

describe('Hydration', function() {

  let hydration;

  beforeEach(function() {
    hydration = new Hydration(hydrationData, 1)
  });

  it('should be a function', () => {
    expect(Hydration).to.be.a('function');
  });

  it('should be an instance of Hydration', () => {
    expect(hydration).to.be.an.instanceof(Hydration);
  });

  it('should return a total average of daily consumption', () => {
    expect(hydration.getDailyAvg()).to.equal(59.7)
  });

  it('should return ounces consumed on a specific day', () => {
    expect(hydration.getDailyOz('2019/06/20', 2)).to.equal(50)
  });

  it('should return 7 days worth of consumption values', () => {
  expect(hydration.getWeekIntake("2019/06/20", 1)).to.deep.equal(hydrationData.filter(user => user.userID === 1).slice(2, 9));
  });

});
