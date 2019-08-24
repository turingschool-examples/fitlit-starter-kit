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
  })

});