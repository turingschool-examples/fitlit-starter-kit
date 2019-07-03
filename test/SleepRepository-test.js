const chai = require('chai');
const expect = chai.expect;


const SleepRepository = require('../src/SleepRepository');
const sleepData = require('../test-data/sleep-fixtures');

describe('SleepRepository', function() {

  it('should be a function', function() {
    const sleepRepository = new SleepRepository();
    expect(SleepRepository).to.be.a('function');
  });
});