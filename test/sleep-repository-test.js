const chai = require('chai');
const expect = chai.expect;
const SleepRepository = require('../src/SleepRepository');
const sleepTestData = require('../data/test-data/sleep-test-data')

beforeEach(() => {
  sleepRepository = new SleepRepository(sleepTestData, 3)
})

describe('SleepRepository', function() {

  it.only('should be a function', function() {
    expect(SleepRepository).to.be.a('function');
  });

  it.only('should store user sleep id', function() {
    expect(sleepRepository.id).to.equal(3);
  });

  it.only('should find sleep object via id', function() {
    expect(sleepRepository.findSleepUserData()).to.deep.equal([
      {
        "userID": 3,
        "date": "2019/06/15",
        "hoursSlept": 10.8,
        "sleepQuality": 4.7
      },
      {
        "userID": 3,
        "date": "2019/06/16",
        "hoursSlept": 10.7,
        "sleepQuality": 3.4
      },
      {
        "userID": 3,
        "date": "2019/06/17",
        "hoursSlept": 5.3,
        "sleepQuality": 4.9
      },
      {
        "userID": 3,
        "date": "2019/06/18",
        "hoursSlept": 9.8,
        "sleepQuality": 2.6
      },
      {
        "userID": 3,
        "date": "2019/06/19",
        "hoursSlept": 7.2,
        "sleepQuality": 3.4
      },
      {
        "userID": 3,
        "date": "2019/06/20",
        "hoursSlept": 9.4,
        "sleepQuality": 1.2
      },
      {
        "userID": 3,
        "date": "2019/06/21",
        "hoursSlept": 8.9,
        "sleepQuality": 3.7
      },
      {
        "userID": 3,
        "date": "2019/06/22",
        "hoursSlept": 9.8,
        "sleepQuality": 2.1
      },
      {
        "userID": 3,
        "date": "2019/06/23",
        "hoursSlept": 4.7,
        "sleepQuality": 3.9
      },
      {
        "userID": 3,
        "date": "2019/06/24",
        "hoursSlept": 9.3,
        "sleepQuality": 1.8
      },
      {
        "userID": 3,
        "date": "2019/06/25",
        "hoursSlept": 6.4,
        "sleepQuality": 4.9
      },
      {
        "userID": 3,
        "date": "2019/06/26",
        "hoursSlept": 6.1,
        "sleepQuality": 1.5
      },
      {
        "userID": 3,
        "date": "2019/06/27",
        "hoursSlept": 4.3,
        "sleepQuality": 4.2
      },
      {
        "userID": 3,
        "date": "2019/06/28",
        "hoursSlept": 4.3,
        "sleepQuality": 3.7
      },
      {
        "userID": 3,
        "date": "2019/06/29",
        "hoursSlept": 6.6,
        "sleepQuality": 4
      },
      {
        "userID": 3,
        "date": "2019/06/30",
        "hoursSlept": 6.7,
        "sleepQuality": 1.1
      },
    ])
  })

  it.only('should return average sleep per day for all time', function() {
    expect(sleepRepository.returnSleepAvg()).to.equal(7.25)
  })
})