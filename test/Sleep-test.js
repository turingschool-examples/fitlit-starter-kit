const chai = require('chai');
const expect = chai.expect;

const Sleep = require('../src/Sleep');

describe('Sleep', () => {

  it('should be a function', () => {
    expect(Sleep).to.be.a('function')
  })
})