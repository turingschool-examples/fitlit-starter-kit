const chai = require('chai');
const expect = chai.expect;

const sleepData = require('../data/sleep-test-data');

const Sleep = require('../src/Sleep');

describe('Sleep', () => {
  
  beforeEach(() => {
    let sleep = new Sleep(sleepData)
  })

  it('should be a function', () => {
    expect(Sleep).to.be.a('function');
  })


});