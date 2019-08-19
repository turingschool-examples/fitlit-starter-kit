const chai = require('chai');
const expect = chai.expect;

const hydrationData = require('../data/hydration-test-data');

const Hydration = require('../src/Hydration');

describe('Hydration', () => {
  
  beforeEach(() => {
    let hydration = new Hydration(hydrationData)
  })

  it('should be a function', () => {
    expect(Hydration).to.be.a('function');
  })

})