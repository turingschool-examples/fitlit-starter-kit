const chai = require('chai');
const expect = chai.expect;

const data = require('./data/sleep.js');
const sleepData = data.sleepData;
const Sleep = require('../src/Sleep.js');

describe('Sleep', function() {
  let sleep;
  beforeEach(function() {
    sleep = new Sleep();
  });

  it('should be a function', function() {
    expect(Sleep).to.be.a('function');
  });

  it('should be an instance of Sleep', function() {
    expect(sleep).to.be.an.instanceof(Sleep);
  });
