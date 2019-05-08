if(typeof module !== 'undefined') {
var chai = require('chai');
var expect = chai.expect;
var Hydration = require('../src/hydration')
var sampleData =require('../data/sample-users');
}

describe('Hydration', function() {
	let hydration;

	beforeEach(function() {
		hydration = new Hydration('../data/sample-users');
	});

	it('should be a function', function() {
		expect(Hydration).to.be.a('function');
	});

	it('should be an instance of Hydration', function() {
		expect(hydration).to.be.an.instanceof(Hydration);
	});

	it('should accept a file path', function() {
		expect(hydration.hydrationData).to.equal('../data/sample-users')
	})

	// it('should return a user\'s avg water intake in a day', function() {

	// })
	
})