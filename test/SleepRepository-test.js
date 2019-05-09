const chai = require('chai');
const expect = chai.expect;
const SleepRepository = require('../src/SleepRepository');
const UserRepository = require('../src/UserRepository');

describe('SleepRepository', function() {
  let sleepRepository
  beforeEach(function() {
   sleepRepository = new SleepRepository('../data/sleepSample.js');
  })

  it('should be a function', function() {
    expect(SleepRepository).to.be.a('function');
  });

  it('should be an instance of SleepRepository', function() {
    expect(sleepRepository).to.be.an.instanceof(SleepRepository);
  });

  it('averageSleepQualityAll should return average sleeping quality of all users', function() {
    expect(sleepRepository.averageSleepQualityAll()).to.eql(3.6);
  });

  it('sleepQualityGreaterThanThreeIDs should return all users ID who average a sleep quality greater than 3 for a given week', function() {
    expect(sleepRepository.sleepQualityGreaterThanThreeIDs("07/05/2019")).to.eql([1,2,4]);
  });

  

});