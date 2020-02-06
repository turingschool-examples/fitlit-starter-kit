const chai = require('chai');
const expect = chai.expect;

const data = require('./data/sleep.js');
const sleepData = data.sleepData;
const Sleep = require('../src/Sleep.js');

describe('Sleep', function() {
  let sleep;
  beforeEach(function() {
    sleep = new Sleep(sleepData);
    sleep.getUserData(1)
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

  it('can calculate average hours slept per day', function() {
    expect(sleep.calculateAverageHours(111)).to.equal(8)
  })

  it('can calculate average sleep quality', function() {
    expect(sleep.calculateAverageQuality(1)).to.equal(4)
  })

  it('can find data on exact date', function() {
    expect(sleep.getDayHours(1, "2020/02/03")).to.equal(9.1)
  })
})