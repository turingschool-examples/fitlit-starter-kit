const chai = require('chai');
const expect = chai.expect;
const HydrationRepository = require('../src/hydrationRepository');
const sampleHydrationData = require('../data/sampleHydrationData');

describe('HydrationRepository', () => {

  let hydrationRepository;

  beforeEach(() => {
    hydrationRepository = new HydrationRepository(sampleHydrationData);
  });

  it('should be a function', () => {
    expect(HydrationRepository).to.be.a('function');
  });

  it('should be able to hold user info', () => {
    expect(hydrationRepository.hydrationData).to.equal(sampleHydrationData);
  });

  it('should be able to get a user by id', () => {
    expect(hydrationRepository.getUserById(2)).to.deep.equal({"userID": 2, "date": "2019/06/15", "numOunces": 75
    });
  });

  it('should be able to calculate a user\'s average daily hydration', () => {
    hydrationRepository.getUserById(2);
    expect(hydrationRepository.getTotalDailyHydrationAvg().to.equal(78));
  });

});

//
