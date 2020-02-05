const chai = require('chai');
const expect = chai.expect;
const Hydration = require('../src/hydration');
const sampleHydrationData = require('../data/sampleHydrationData');

describe('Hydration', () => {

  let hydration;

  beforeEach(() => {
    hydration = new Hydration(sampleHydrationData);
  });

  it('should be a function', () => {
    expect(Hydration).to.be.a('function');
  });

});
