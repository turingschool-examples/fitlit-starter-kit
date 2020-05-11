const chai = require('chai')
const expect = chai.expect
const UserRepository = require('../src/UserRepository')


describe('UserRepository', function() {

  it('should be an function', function() {
    expect(UserRepository).to.be.a('function')
  });
})
