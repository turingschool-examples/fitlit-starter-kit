const chai = require('chai')
const expect = chai.expect
const Activity = require('../src/Activity')


describe('Activity', function() {

  it('should be an function', function() {
    expect(Activity).to.be.a('function')
  });
})
