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
    expect(sleepRepo.avgSleepQual()).to.equal(4);
  });

  it('should return the users who average above a quality of 3 given a week', function() {
    
    expect(sleepRepo.goodSleepQual("12/05/2019")).to.be.an('array');
  });

  it('sould return the users who slept the mos on a given day', function() {

    expect(sleepRepo.mostSleep('12/05/2019')).to.be.a('number');
    expect(sleepRepo.mostSleep('12/05/2019')).to.equal(2)
  });

  it('should return the users who average below a quality of 3 given a week', function() {

    expect(sleepRepo.worstSleepQual('12/05/2019')).to.be.an('array');
  });
});