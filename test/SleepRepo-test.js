const chai = require('chai');
const expect = chai.expect;

const sleepData = require('../data/sleep-test-data');

const SleepRepo = require('../src/SleepRepo');

describe('SleepRepo', () => {
  
  beforeEach(() => {
    let sleepRepo = new SleepRepo(sleepData)
  })

  it('should be a function', () => {
    expect(SleepRepo).to.be.a('function');
  })


});