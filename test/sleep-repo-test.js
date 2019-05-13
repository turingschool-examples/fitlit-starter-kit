if(typeof module !== 'undefined') {
	var chai = require('chai');
	var expect = chai.expect;
	var sampleSleepData = require('../data/sample-sleep')
	var SleepRepository = require('../src/sleep-repo');
	var Sleep = require('../src/sleep');
};

describe('Sleep Repo', function() {
	let sleepRepo;
	let sleep;
	let sleepData;

	beforeEach(function() {
		sleepRepo = new SleepRepository('../data/sample-sleep');
		sleep = new Sleep()
		sleepData = 
[
	{
    "userID": 1,
    "sleepData": [
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
        "hoursSlept": 8.1,
        "sleepQuality": 1.9
      },
      {
        "date": "09/05/2019",
        "hoursSlept": 4.5,
        "sleepQuality": 3.4
      },
      {
        "date": "10/05/2019",
        "hoursSlept": 10.7,
        "sleepQuality": 4.3
      },
      {
        "date": "11/05/2019",
        "hoursSlept": 5.6,
        "sleepQuality": 3.5
      },
      {
        "date": "12/05/2019",
        "hoursSlept": 10.1,
        "sleepQuality": 1.7
      },
      {
        "date": "13/05/2019",
        "hoursSlept": 10.1,
        "sleepQuality": 3.2
      },
      {
        "date": "14/05/2019",
        "hoursSlept": 10.5,
        "sleepQuality": 2
      },
      {
        "date": "15/05/2019",
        "hoursSlept": 6.1,
        "sleepQuality": 2.9
      }
    ]
  },
  {
    "userID": 2,
    "sleepData": [
      {
        "date": "06/05/2019",
        "hoursSlept": 6.3,
        "sleepQuality": 2.2
      },
      {
        "date": "07/05/2019",
        "hoursSlept": 9.2,
        "sleepQuality": 4.8
      },
      {
        "date": "08/05/2019",
        "hoursSlept": 6.6,
        "sleepQuality": 4.5
      },
      {
        "date": "09/05/2019",
        "hoursSlept": 6.8,
        "sleepQuality": 1.4
      },
      {
        "date": "10/05/2019",
        "hoursSlept": 9.3,
        "sleepQuality": 4.8
      },
      {
        "date": "11/05/2019",
        "hoursSlept": 8.5,
        "sleepQuality": 1.7
      },
      {
        "date": "12/05/2019",
        "hoursSlept": 5.9,
        "sleepQuality": 3.2
      },
      {
        "date": "13/05/2019",
        "hoursSlept": 4.1,
        "sleepQuality": 2.1
      },
      {
        "date": "14/05/2019",
        "hoursSlept": 4.3,
        "sleepQuality": 4.2
      },
      {
        "date": "15/05/2019",
        "hoursSlept": 9.6,
        "sleepQuality": 3.8
      }
    ]

  }
 ]

	});

	it('should be a function', function() {
		expect(SleepRepository).to.be.a('function');
	});

	it('should be an instance of Sleep Repo', function() {
		expect(sleepRepo).to.be.an.instanceof(SleepRepository)
	});

	it('should find average sleep quality of all users', function() {
		expect(sleepRepo.findAvgUserSleep()).to.equal(3.26)
	});
})