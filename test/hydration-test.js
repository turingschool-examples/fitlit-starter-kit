if(typeof module !== 'undefined') {
var chai = require('chai');
var expect = chai.expect;
var Hydration = require('../src/hydration')
var HydrationRepository = require('../src/hydration-repo')
var User = require('../src/user')
var sampleHydrationData =require('../data/sample-hydration');
}

describe('Hydration', function() {
  let hydration;
	let userData;
	let hydrationData;

	beforeEach(function() {
		  userData = {
      "id": 1,
      "name": "Nyasia Weber",
      "address": "270 August Meadows, Maribelside SD 36129",
      "email": "Jordane_Schultz@yahoo.com",
      "strideLength": 4.7,
      "dailyStepGoal": 8000
    }
    	hydrationData = {
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
    hydrationRepo = new HydrationRepository('../data/sample-hydration', 1)
    hydration = new Hydration(hydrationData);
  
	});

	it('should be a function', function() {
		expect(Hydration).to.be.a('function');
	});

	it('should be an instance of Hydration', function() {
		expect(hydration).to.be.an.instanceof(Hydration);
	});

	it('should accept a file path', function() {
		expect(hydration.hydrationStats).to.equal(sampleHydrationData)
	});

	it('should return a user\'s avg water intake in a day', function() {
		expect(hydration.findAvgWaterIntake()).to.equal(55.4)
	});

	it('should return the amount of fluid ounces consumed on a particular date', function() {
		expect(hydration.findFluidOzByDay('15/05/2019')).to.equal(59)
	});

	it('should return the amount of fluid ounces consumed within a week-long date range', function() {
		expect(hydration.findWeeklyWater('08/05/2019')).to.eql([39, 40, 65, 84, 33, 60, 30])
	});

	
})