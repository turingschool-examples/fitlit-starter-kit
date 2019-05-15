if(typeof module !== 'undefined') {
var chai = require('chai');
var expect = chai.expect;
var sampleActivityData = require('../data/sample-activity');
var Activity = require('../src/activity')
var ActivityRepository = require('../src/activity-repo')
}

describe('Activity Repository', function() {
	let activity;
	let activityRepo;
	let activitySampleData;

	beforeEach(function() {
		activityRepo = new ActivityRepository('../data/sample-activity');
		activity = new Activity();
		activitySampleData = [
{
    "userID": 1,
    "activityData": [
      {
        "date": "06/05/2019",
        "numSteps": 7368,
        "minutesActive": 204,
        "flightsOfStairs": 46
      },
      {
        "date": "07/05/2019",
        "numSteps": 3079,
        "minutesActive": 115,
        "flightsOfStairs": 4
      },
      {
        "date": "08/05/2019",
        "numSteps": 2387,
        "minutesActive": 179,
        "flightsOfStairs": 4
      },
      {
        "date": "09/05/2019",
        "numSteps": 6326,
        "minutesActive": 126,
        "flightsOfStairs": 26
      },
      {
        "date": "10/05/2019",
        "numSteps": 13644,
        "minutesActive": 220,
        "flightsOfStairs": 13
      },
      {
        "date": "11/05/2019",
        "numSteps": 4337,
        "minutesActive": 294,
        "flightsOfStairs": 15
      },
      {
        "date": "12/05/2019",
        "numSteps": 9068,
        "minutesActive": 97,
        "flightsOfStairs": 3
      },
      {
        "date": "13/05/2019",
        "numSteps": 2925,
        "minutesActive": 274,
        "flightsOfStairs": 10
      },
      {
        "date": "14/05/2019",
        "numSteps": 3338,
        "minutesActive": 142,
        "flightsOfStairs": 24
      },
      {
        "date": "15/05/2019",
        "numSteps": 12224,
        "minutesActive": 228,
        "flightsOfStairs": 32
      }
     ]
   },
      {
    "userID": 2,
    "activityData": [
      {
        "date": "06/05/2019",
        "numSteps": 9101,
        "minutesActive": 202,
        "flightsOfStairs": 1
      },
      {
        "date": "07/05/2019",
        "numSteps": 11825,
        "minutesActive": 77,
        "flightsOfStairs": 28
      },
      {
        "date": "08/05/2019",
        "numSteps": 4423,
        "minutesActive": 266,
        "flightsOfStairs": 31
      },
      {
        "date": "09/05/2019",
        "numSteps": 6241,
        "minutesActive": 146,
        "flightsOfStairs": 43
      },
      {
        "date": "10/05/2019",
        "numSteps": 3455,
        "minutesActive": 154,
        "flightsOfStairs": 47
      },
      {
        "date": "11/05/2019",
        "numSteps": 2629,
        "minutesActive": 150,
        "flightsOfStairs": 19
      },
      {
        "date": "12/05/2019",
        "numSteps": 9521,
        "minutesActive": 240,
        "flightsOfStairs": 30
      },
      {
        "date": "13/05/2019",
        "numSteps": 10671,
        "minutesActive": 161,
        "flightsOfStairs": 23
      },
      {
        "date": "14/05/2019",
        "numSteps": 10847,
        "minutesActive": 248,
        "flightsOfStairs": 40
      },
      {
        "date": "15/05/2019",
        "numSteps": 3838,
        "minutesActive": 243,
        "flightsOfStairs": 10
      }
     ]
   }
  ]

	});

	it('should be a function', function() {
		expect(ActivityRepository).to.be.a('function');
	});

	it('should be an instance of Activity Repository', function() {
		expect(activityRepo).to.be.an.instanceof(ActivityRepository);
	});

	it.skip('find average flights of stairs climbed on a given date', function() {
		expect(activityRepo.findAvgStairsClimbed('07/05/2019')).to.equal(32)
	});



})