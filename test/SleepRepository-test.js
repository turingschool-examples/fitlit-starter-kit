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

  ////// i'm here...

  it.skip('getSlepDataOfAUser method should return sleep data of one user by ID', function() {
    expect(sleepRepository.getSlepDataOfAUser(1)).to.eql([
      {
        "date": "06/05/2019",
        "hoursSlept": 8,
        "sleepQuality": 4.8
      },
      {
        "date": "07/05/2019",
        "hoursSlept": 10.7,
        "sleepQuality": 4.8
      },
      {
        "date": "08/05/2019",
        "hoursSlept": 5,
        "sleepQuality": 1.9
      }
    ]);
  });

  it('averageSleepQualityAll should return average sleeping quality of all users', function() {
    expect(sleepRepository.averageSleepQualityAll()).to.eql(3.6);
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