const chai = require('chai');
const expect = chai.expect;
const HydrationRepository = require('../src/HydrationRepository');
const hydrationTestData = require('../data/test-data/hydration-test-data');

beforeEach(() => {
  hydrationRepository = new HydrationRepository(hydrationTestData, 2);
});

describe('HydrationRepository', function() {

  it('should be a function', function() {
    expect(HydrationRepository).to.be.a('function');
  });

  it('should store user hydration id', function() {
    expect(hydrationRepository.id).to.equal(2);
  });

  it('should find hydration object via id', function() {
    expect(hydrationRepository.findHydrationUserData()).to.deep.equal([
      {
        "userID": 2,
        "date": "2019/06/15",
        "numOunces": 75
      },
      {
        "userID": 2,
        "date": "2019/06/16",
        "numOunces": 91
      },
      {
        "userID": 2,
        "date": "2019/06/17",
        "numOunces": 96
      },
      {
        "userID": 2,
        "date": "2019/06/18",
        "numOunces": 70
      },
      {
        "userID": 2,
        "date": "2019/06/19",
        "numOunces": 76
      },
      {
        "userID": 2,
        "date": "2019/06/20",
        "numOunces": 71
      },
      {
        "userID": 2,
        "date": "2019/06/21",
        "numOunces": 27
      },
      {
        "userID": 2,
        "date": "2019/06/22",
        "numOunces": 58
      }
    ])
  });

  it('should return average fluid oz consumed per day for all time', function() {
    expect(hydrationRepository.returnHydrationAvg()).to.equal(71);
  })


});