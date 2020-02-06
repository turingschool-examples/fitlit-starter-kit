const chai = require('chai');
const expect = chai.expect;

const data = require('./data/sleep.js');
const sleepData = data.sleepData;
const Sleep = require('../src/Sleep.js');

describe('Sleep', function() {
  let sleep;
  beforeEach(function() {
    sleep = new Sleep(sleepData);
  });

  it('should be a function', function() {
    expect(Sleep).to.be.a('function');
  });

  it('should be an instance of Sleep', function() {
    expect(sleep).to.be.an.instanceof(Sleep);
  });

  it('should be able to filter userData', function() {
    let userData = sleepData.slice(0, 7);
    expect(sleep.getUserData(1)).to.deep.equal(userData);
  })

  it.skip('can calculate average hours slept per day', function() {
    console.log(sleep.getUserData())
    expect(sleep.calculateAverageHours()).to.equal('xxxxx')
  })
})