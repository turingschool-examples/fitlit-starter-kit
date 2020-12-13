const chai = require('chai');
const expect = chai.expect;

const Sleep = require('../src/Sleep');
const SleepRepo = require('../src/SleepRepo');

describe('Hydration', () => {
  let sleepData, oneData;

  beforeEach(() => {
    sleepData = [
      {
        "userID": 1,
        "date": "2019/06/15",
        "hoursSlept": 6.6,
        "sleepQuality": 2.5
      },
      {
        "userID": 1,
        "date": "2019/06/15",
        "hoursSlept": 7,
        "sleepQuality": 3
      },
      {
        "userID": 1,
        "date": "2019/06/15",
        "hoursSlept": 6.1,
        "sleepQuality": 2.2
      }
      {
        "userID": 1,
        "date": "2019/06/15",
        "hoursSlept": 6.3,
        "sleepQuality": 2.3
      },
      {
        "userID": 1,
        "date": "2019/06/15",
        "hoursSlept": 7,
        "sleepQuality": 3
      },
      {
        "userID": 1,
        "date": "2019/06/15",
        "hoursSlept": 6.1,
        "sleepQuality": 2.2
      },
      {
        "userID": 1,
        "date": "2019/06/15",
        "hoursSlept": 6.6,
        "sleepQuality": 2.5
      },
      {
        "userID": 1,
        "date": "2019/06/15",
        "hoursSlept": 7,
        "sleepQuality": 3
      },
    ];
    oneData = new Sleep(sleepData[0]);

  });

  it.skip()

};
