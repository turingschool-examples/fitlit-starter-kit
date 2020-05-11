const chai = require('chai')
const expect = chai.expect
const Hydration = require('../src/Hydration')


describe('Hydration', function() {

  it('should be an function', function() {
    expect(Hydration).to.be.a('function')
  });
})
