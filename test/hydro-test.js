const chai = require('chai');
const expect = chai.expect;

const HydroRepository = require('../src/HydroRepository.js');
const hydroData = require('../data/hydration.js');

describe('HydroRepository', function() {
	const hydroRepository = new HydroRepository(hydroData)
	it('should return a userID', function() {
		hydroRepository.findUserID(5);
		expect(hydroRepository.currentUser.length).to.equal(100)
	})
}) 