if(typeof module !== 'undefined') {
var chai = require('chai');
var expect = chai.expect;
var userHydrationData = require('../data/sample-hydration');
var Hydration = require('../src/hydration');
var HydrationRepository = require('../src/hydration-repo');
}

describe('Hydration Repository', function() {

	it('should be a function', function() {
		const hydrationRepository = new HydrationRepository('../data/sample-hydration');
		expect(HydrationRepository).to.be.a('function');
	});

	it('should be an instance of Hydration Repository', function() {
		const hydrationRepository = new HydrationRepository('../data/sample-hydration');
		expect(hydrationRepository).to.be.an.instanceof(HydrationRepository);
	});

	// it('should find a user\'s hydration data by id', function() {  
	// 	const hydrationRepository = new HydrationRepository('../data/sample-hydration');
	// 	expect(hydrationRepository.findUserHydration(1)).to.equal(userHydrationData[0]);
	// });


})