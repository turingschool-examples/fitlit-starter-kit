const chai = require('chai');
const expect = chai.expect;

const Hydration = require('../src/Hydration');
const hydrationTestData = require('../test-data/hydration-test')

describe('Hydration', () => {
  let hydration;
  beforeEach(() => {
    hydration = new Hydration(hydrationTestData);
  });
  
  it('should be a function', function() {
    expect(Hydration).to.be.a('function');
  });
  
  it('should calculate average fluid ozs consumed per day for all time', function() {
    expect(hydration.returnAvgFluidOzPerDayAllTime()).to.equal();
  });

  it('should calculate fluid ounces by specific date', function() {
    expect(hydration.returnFluidOzByDate()).to.equal();
  });

  it('should calculate water consumption over a week period', function() {
    expect(hydration.returnFluidOzByWeek()).to.equal();
  });
  
});