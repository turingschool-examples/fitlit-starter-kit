const chai = require('chai');
const expect = chai.expect;

const sleepData = require('../data/practice-sleep');
const Sleep = require('../src/Sleep');

describe('Sleep', function() {

  let sleep;
  beforeEach(() => {
    sleep = new Sleep(sleepData);
  });

  it('should be a function', function() {
    expect(Sleep).to.be.a('function');
  });
    
  it('should be an instance of Sleep', function() {
    expect(sleep).to.be.an.instanceof(Sleep);
  });

  it('should return a list of current user sleep data', function() {
    expect(sleep.consumerInfo(3)).to.eql([sleepData[0], sleepData[1],sleepData[2],sleepData[3],sleepData[4],sleepData[5],sleepData[6],sleepData[7],sleepData[8]]); 
  });

  it('should return the average sleep quality per day', function() {
    expect(sleep.averageQualitySleep(3)).to.equal(3)
  })
});