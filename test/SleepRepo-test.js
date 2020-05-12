const chai = require('chai');
const expect = chai.expect;

const SleepRepo = require('../src/SleepRepo');

describe('Sleep Repository', () => {

  it('should be a function', () => {
    expect(SleepRepo).to.be.a('function')
  })
})