const chai = require('chai')
const expect = chai.expect
const Sleep = require('../src/Sleep')


describe('Sleep', function() {

  it('should be an function', function() {
    expect(Sleep).to.be.a('function')
  });
})
