if(typeof module !== 'undefined') {
var chai = require('chai');
var expect = chai.expect;
var UserGoalTrend = require('../src/user-goal-trend');
var userData = require('../data/sample-users');
var hydrationData = require('../data/sample-hydration');
var sleepData = require('../data/sample-sleep');
var activityData = require('../data/sample-activity');
var User = require('../src/user')
}

describe('User Goal Trend', function() {
	let userGoalTrend;
	let user;
	let userData;
	let hydrationData;
	let sleepData;
	let activityData;

	beforeEach(function() {
		userData = [
		{
    "id": 1,
    "name": "Nyasia Weber",
    "address": "270 August Meadows, Maribelside SD 36129",
    "email": "Jordane_Schultz@yahoo.com",
    "strideLength": 4.7,
    "dailyStepGoal": 8000
  	},
  	{
    "id": 3,
    "name": "Cleo Lindgren",
    "address": "744 Josephine Parkway, Hellerside OH 17625",
    "email": "Zachery.Von49@gmail.com",
    "strideLength": 5.1,
    "dailyStepGoal": 4000
  }

];
  	hydrationData = [
  	{
  "userID": 1,
    "hydrationData": [
      {
        "date": "06/05/2019",
        "numOunces": 64
      },
      {
        "date": "07/05/2019",
        "numOunces": 80
      },
      {
        "date": "08/05/2019",
        "numOunces": 39
      },
      {
        "date": "09/05/2019",
        "numOunces": 40
      },
      {
        "date": "10/05/2019",
        "numOunces": 65
      },
      {
        "date": "11/05/2019",
        "numOunces": 84
      },
      {
        "date": "12/05/2019",
        "numOunces": 33
      },
      {
        "date": "13/05/2019",
        "numOunces": 60
      },
      {
        "date": "14/05/2019",
        "numOunces": 30
      },
      {
        "date": "15/05/2019",
        "numOunces": 59
      }
    ]
}
];
			sleepData = [
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
		}
	];
		activityData = [
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
   }
  ];
  user = new User('../data/sample-users');
		userGoalTrend = new UserGoalTrend(userData, hydrationData, sleepData, activityData, 1);
	});

	it('should find user data by ID', function() {
		expect(userGoalTrend.findUserDataById(1)).to.equal(userData[0]);
	});

	it('should find user hydration data by ID', function() {
		expect(userGoalTrend.findHydrationDataById(1)).to.equal(hydrationData[0])
	});

	it('should find user sleep data by ID', function() {
		expect(userGoalTrend.findSleepDataById(1)).to.equal(sleepData[0])
	});

	it('should find user activity data by ID', function() {
		expect(userGoalTrend.findActivityDataById(1)).to.equal(activityData[0])
	})

	it('should assess if a user has met goals in all categories', function() {
  	expect(userGoalTrend.assessTriCategoryGoals()).to.equal(['10/05/2019', ])
  })

})

  
