const chai = require('chai');
const expect = chai.expect;

const SleepRepo = require('../src/SleepRepo');

describe('SleepRepo', () => {
  let repoData, sleepRepo;

  beforeEach(() => {
    repoData = [
      {
      "userID": 1,
      "date": "2019/06/15",
      "hoursSlept": 6.0,
      "sleepQuality": 2.0
      },
      {
      "userID": 2,
      "date": "2019/06/15",
      "hoursSlept": 6.1,
      "sleepQuality": 2.1
      },
      {
      "userID": 1,
      "date": "2019/06/16",
      "hoursSlept": 6.2,
      "sleepQuality": 2.2
      },
      {
      "userID": 2,
      "date": "2019/06/16",
      "hoursSlept": 6.3,
      "sleepQuality": 2.2
      },
      {
      "userID": 1,
      "date": "2019/06/17",
      "hoursSlept": 6.4,
      "sleepQuality": 2.3
      },
      {
      "userID": 2,
      "date": "2019/06/17",
      "hoursSlept": 6.5,
      "sleepQuality": 2.4
      },
      {
      "userID": 1,
      "date": "2019/06/18",
      "hoursSlept": 6.6,
      "sleepQuality": 2.5
      },
      {
      "userID": 2,
      "date": "2019/06/18",
      "hoursSlept": 6.7,
      "sleepQuality": 2.6
      },
      {
      "userID": 1,
      "date": "2019/06/19",
      "hoursSlept": 6.8,
      "sleepQuality": 2.6
      },
      {
      "userID": 2,
      "date": "2019/06/19",
      "hoursSlept": 6.9,
      "sleepQuality": 2.7
      },
      {
      "userID": 1,
      "date": "2019/06/20",
      "hoursSlept": 7.1,
      "sleepQuality": 2.9
      },
      {
      "userID": 2,
      "date": "2019/06/20",
      "hoursSlept": 7.2,
      "sleepQuality": 3.0
      },
      {
      "userID": 1,
      "date": "2019/06/21",
      "hoursSlept": 7.4,
      "sleepQuality": 3.2
      },
      {
      "userID": 2,
      "date": "2019/06/21",
      "hoursSlept": 6.7,
      "sleepQuality": 2.6
      },
      {
      "userID": 1,
      "date": "2019/06/22",
      "hoursSlept": 6.0,
      "sleepQuality": 2.0
      },
      {
      "userID": 2,
      "date": "2019/06/22",
      "hoursSlept": 6.2,
      "sleepQuality": 2.1
      },
      {
      "userID": 1,
      "date": "2019/06/23",
      "hoursSlept": 6.0,
      "sleepQuality": 2.0
      },
      {
      "userID": 2,
      "date": "2019/06/23",
      "hoursSlept": 6.1,
      "sleepQuality": 2.1
      },
      {
      "userID": 1,
      "date": "2019/06/24",
      "hoursSlept": 6.2,
      "sleepQuality": 2.2
      },
      {
      "userID": 2,
      "date": "2019/06/24",
      "hoursSlept": 6.3,
      "sleepQuality": 2.2
      }
    ];

    sleepRepo = new SleepRepo(repoData) 
  });

});
