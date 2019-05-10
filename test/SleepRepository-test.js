const chai = require('chai');
const expect = chai.expect;
const SleepRepository = require('../src/SleepRepository');

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

  it('getSlepDataOfAUser method should return sleep data of one user by ID', function() {
    expect(sleepRepository.getSleepDataOfAUser(5)).to.eql([
      {
        "date": "06/05/2019",
        "hoursSlept": 7.6,
        "sleepQuality": 1.5
      }
    ]);
  });

  it('averageSleepQualityAll should return average sleeping quality of all users', function() {
    expect(sleepRepository.averageSleepQualityAll()).to.eql(3.5);
  });

  it('sleepQualityGreaterThanThreeIDs should return all users ID who average a sleep quality greater than 3 for a given week', function() {
    expect(sleepRepository.sleepQualityGreaterThanThreeIDs("07/05/2019")).to.eql([1,2,4]);
  });

  it('sleepMostIds should find the ID of users who slept the most number of hours (one or more if they tied)', function() {
    expect(sleepRepository.sleepMostIds("08/05/2019")).to.eql([2,4]);
  });

  it('sleepMostNames should find the Names of users who slept the most number of hours (one or more if they tied)', function() {
    expect(sleepRepository.sleepMostNames([2,4])).to.eql(["Shayne Swift","Elaina Rau"]);
  });

});