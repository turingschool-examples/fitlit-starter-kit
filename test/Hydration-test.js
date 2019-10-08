const expect = require('chai').expect;
const Hydration = require('../src/Hydration');

describe('Hydration', () => {
  let hydration;

  beforeEach(() => {
    hydration = new Hydration();
  });
  it('should be a function', () => {
    expect(Hydration).to.be.a('function');
  });
})