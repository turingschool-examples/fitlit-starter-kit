const chai = require('chai');
const expect = chai.expect;

const Hydration = require('../src/Hydration-Repository');
const hydrationTestData = require('../test-data/hydration-test-data')

describe('Hydration', () => {
  let hydration;
  beforeEach(() => {
    hydration = new Hydration(hydrationTestData);
  });

  it('should be a function', function() {
    expect(Hydration).to.be.a('function');
  });
  
  it('should calculate average fluid ozs consumed per day for all time', function() {
    expect(hydration.returnAvgFluidOzPerDayAllTime(1)).to.equal(536);
  });

  it('should calculate fluid ounces by specific date', function() {
    expect(hydration.returnFluidOzByDate(3, '2019/06/15')).to.equal(47);
  });

  it('should calculate water consumption over a week period', function() {
    expect(hydration.returnFluidOzByWeek(3, '2019/06/15')).to.deep.eql([47, 99, 28, 40, 85, 51, 41]);
  });
  
});