const chai = require('chai');
const expect = chai.expect;

const Calculator = require('../src/Calculator');

describe('Calculator', () => {
  
  it('should be a function', () => {
    expect(Calculator).to.be.a('function')
  })
})