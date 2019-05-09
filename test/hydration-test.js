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

	beforeEach(function() {
		  userData = {
      "id": 1,
      "name": "Nyasia Weber",
      "address": "270 August Meadows, Maribelside SD 36129",
      "email": "Jordane_Schultz@yahoo.com",
      "strideLength": 4.7,
      "dailyStepGoal": 8000
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
		expect(hydration.hydrationData).to.equal('../data/sample-hydration')
	});

	it('should find a user by id', function() {
		expect(hydration.returnUserId(1)).to.eql(userData.id)
	})

	it.skip('should return a user\'s avg water intake in a day', function() {
		expect(hydration.findAvgWaterIntake()).to.equal(55)
	});

	
})