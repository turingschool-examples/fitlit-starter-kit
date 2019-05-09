if(typeof module !== 'undefined') {
var chai = require('chai');
var expect = chai.expect;
var Hydration = require('../src/hydration')
var sampleUserData = require('../data/sample-users')
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
		hydration = new Hydration('../data/sample-hydration', '../data/sample-users');
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

	it('should find a user by id', function() {
		expect(hydration.returnUserHydration(userData.id)).to.eql(hydrationData.hydrationData)
	})

	it('should return a user\'s avg water intake in a day', function() {
		expect(hydration.findAvgWaterIntake(1)).to.equal(55.4)
	});

	
})