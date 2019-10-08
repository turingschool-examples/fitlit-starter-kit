const chai = require('chai');
const expect = chai.expect;

const HydroRepository = require('../src/hydroRepository.js');
const data = require('../data/hydration.js');

describe('HydroRepository', function() {
	it('should return a userID', function() {
    const hydroRepository = new HydroRepository(data)
    hydroRepository.findUserId(4);
		expect(hydroRepository.currentUser.length).to.equal(100)
		console.log(hydroRepository.currentUser)
	});
}); 