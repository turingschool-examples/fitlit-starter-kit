const chai = require('chai');
const expect = chai.expect;

const activityData = require('./testdata/activity-test-data');
const SleepRepo = require('../src/SleepRepo');
// const Sleep = require('../src/Sleep');
describe.only('Sleep', () => {
  let sleepRepo;
  beforeEach(() => {
    const sleepData = [
      {
        "userID": 1,
        "date": "2019/06/15",
        "hoursSlept": 6.1,
        "sleepQuality": 2.2
      },
      {
        "userID": 1,
        "date": "2019/06/16",
        "hoursSlept": 6.1,
        "sleepQuality": 2.2
      },
      {
        "userID": 1,
        "date": "2019/06/17",
        "hoursSlept": 6.1,
        "sleepQuality": 2.2
      },
      {
        "userID": 1,
        "date": "2019/06/18",
        "hoursSlept": 6.1,
        "sleepQuality": 2.2
      },
      {
        "userID": 1,
        "date": "2019/06/19",
        "hoursSlept": 6.1,
        "sleepQuality": 2.2
      },
      {
        "userID": 1,
        "date": "2019/06/20",
        "hoursSlept": 6.1,
        "sleepQuality": 2.2
      },
      {
        "userID": 1,
        "date": "2019/06/21",
        "hoursSlept": 6.1,
        "sleepQuality": 2.2
      },
      {
        "userID": 1,
        "date": "2019/06/22",
        "hoursSlept": 6.1,
        "sleepQuality": 2.2
      },
      {
        "userID": 1,
        "date": "2019/06/23",
        "hoursSlept": 6.1,
        "sleepQuality": 2.2
      },
      {
        "userID": 1,
        "date": "2019/06/24",
        "hoursSlept": 6.1,
        "sleepQuality": 2.2
      },
      {
        "userID": 27,
        "date": "2019/06/15",
        "hoursSlept": 5,
        "sleepQuality": 3.4
      },
      {
        "userID": 28,
        "date": "2019/06/15",
        "hoursSlept": 6.4,
        "sleepQuality": 2.6
      },
      {
        "userID": 29,
        "date": "2019/06/15",
        "hoursSlept": 6.9,
        "sleepQuality": 3.5
      },
      {
        "userID": 8,
        "date": "2019/06/16",
        "hoursSlept": 6.8,
        "sleepQuality": 3
      },
      {
        "userID": 9,
        "date": "2019/06/16",
        "hoursSlept": 9.1,
        "sleepQuality": 1.2
      },
      {
        "userID": 10,
        "date": "2019/06/16",
        "hoursSlept": 8,
        "sleepQuality": 4.4
      },
      {
        "userID": 11,
        "date": "2019/06/16",
        "hoursSlept": 8.2,
        "sleepQuality": 2
      },
    ]
    sleepRepo = new SleepRepo(sleepData)
  });

  it('should be a function', () => {
    expect(SleepRepo).to.be.a('function');
  })

  it('should instantiate a class of SleepRepo', () => {
    expect(sleepRepo).to.be.an.instanceof(SleepRepo);
  })
})
