if(typeof module !== 'undefined') {
var chai = require('chai');
var expect = chai.expect;
var sampleActivityData = require('../data/sample-activity');
// var UserData = requre('../data/sample-users')
var Activity = require('../src/activity')
var ActivityRepository = require('../src/activity-repo')
}

describe('Activity', function() {
	let activity;
	let activityRepo;
	let activitySampleData;
	let userData;

	beforeEach(function() {
		activityRepo = new ActivityRepository('../data/sample-activity');
		activity = new Activity(activitySampleData,userData, 1);
		activitySampleData = {
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
   }
   userData =   {
    "id": 1,
    "name": "Nyasia Weber",
    "address": "270 August Meadows, Maribelside SD 36129",
    "email": "Jordane_Schultz@yahoo.com",
    "strideLength": 4.7,
    "dailyStepGoal": 8000
  }
 });

	it('should be a function', function() {
		expect(Activity).to.be.a('function')
	});

	it('should be an instance of Activity', function() {
		expect(activity).to.be.an.instanceof(Activity)
	});

	it('should convert a user\'s number of steps to miles', function() {
		expect(activity.findMilesWalkedByDay('14/05/2019', 1)).to.equal(2.97)
	})


})