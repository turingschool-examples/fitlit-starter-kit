const chai = require('chai');
const expect = chai.expect;

const SleepRepo = require('../src/SleepRepo');
const mockData = require('../data/mock-sleep');

describe('SleepRepo', function() {
  
  let sleepRepo;
  beforeEach(function () {
    sleepRepo = new SleepRepo(mockData);
  });

  it('should be a function', function() {
    
    expect(SleepRepo).to.be.a('function');
  });

  it('should make an instance of SleepRepo', function() {

    expect(sleepRepo).to.be.an.instanceOf(SleepRepo);
  });

  it('should return a average sleep quality of all users', function() {
    
    expect(sleepRepo.avgSleepQual()).to.be.a('number');
    expect(sleepRepo.avgSleepQual()).to.equal(8);
  });

  it('should return the users who average above a quality of 3 given a week', function() {
    
    expect(sleepRepo.goodSleepQual("12/05/2019")).to.be.an('array');
  });
});