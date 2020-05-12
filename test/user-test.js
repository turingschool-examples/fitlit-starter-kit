const chai = require('chai')
const expect = chai.expect
const User = require('../src/User')


describe('User', function() {

  it('should be an function', function() {
    expect(User).to.be.a('function')
  });
})
