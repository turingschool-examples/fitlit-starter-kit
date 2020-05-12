const chai = require('chai');
const expect = chai.expect;

const UsersRepo = require('../src/UsersRepo');

describe('User Repository', () => {

  it('should be a function', () => {
    expect(UsersRepo).to.be.a('function')
  })
})