if(typeof module !== 'undefined') {
var chai = require('chai');
var expect = chai.expect;
var sampleActivityData = require('../data/sample-activity');
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
		activity = new Activity(activitySampleData, userData, 1);
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
  
  it('should find the user\'s steps by for a given day', function(){
    expect(activity.findStepsByDay('14/05/2019', 1)).to.equal(3338)
  })

  it('should find the user\'s stairs by for a given day', function(){
    expect(activity.findStairsByDay('14/05/2019', 1)).to.equal(24)
  })


	it('should convert a user\'s number of steps to miles', function() {
		expect(activity.findMilesWalkedByDay('14/05/2019', 1)).to.equal(2.97)
	});

	it('should return the amount of minutes the user spent active on a given date', function() {
		expect(activity.findMinutesActiveByDay('14/05/2019')).to.equal(142)
	});

	it('should find the average minutes active for a given week', function() {
		expect(activity.findAvgMinutesActiveByWeek('06/05/2019')).to.equal(176.43)
	});

	it('should assess if the user met their dailyStepGoal for a given date', function() {
		expect(activity.assessDailyStepGoalByDate('15/05/2019')).to.equal('Great job! You reached your goal!')
	});

	it('should find all days a user exceeded their step goal', function() {
		expect(activity.findExceededDailyStepGoalDates()).to.eql(['10/05/2019', '12/05/2019', '15/05/2019'])
	});

	it('should find a user\'s most stairs climbed', function() {
		expect(activity.findMostStairsClimbed()).to.equal(46)
  })
  
  it('should find a user\'s calories burned for day', function() {
    expect(activity.findCaloriesBurnedByDay('15/05/2019')).to.equal(2672)
  })

  it('should find a user\'s step count for the week', function(){
    expect(activity.findStepsForWeek('06/05/2019')).to.equal(46209)
  })


})