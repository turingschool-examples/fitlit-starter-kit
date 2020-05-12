const chai = require('chai');
const expect = chai.expect;

const Hydration = require('../src/Hydration');

describe('Hydration', () => {

  it('should be a function', () => {
    expect(Hydration).to.be.a('function')
  })
})