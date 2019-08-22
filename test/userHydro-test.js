const chai = require('chai');
const expect = chai.expect;

const HydroRepository = require('../src/HydroRepository.js');
const hydroData = require('../data/hydration.js');
const UserHydro = require('../src/userHydro.js')

describe('UserHydro', function() {
	it('should have a length of 100', function() {
	const hydroRepository = new HydroRepository(hydroData)
	hydroRepository.findUserID(5)
	const userHydro = new UserHydro(hydroRepository.currentUser)
	expect(userHydro.data.length).to.equal(100)
	});

	it('should calculate average number of ounces', function() {
	const hydroRepository = new HydroRepository(hydroData)
	hydroRepository.findUserID(5)
	const userHydro = new UserHydro(hydroRepository.currentUser)
	expect(userHydro.findAvgOunce()).to.equal(65.42)
	});

	it('should display day based off date', function() {
	const hydroRepository = new HydroRepository(hydroData)
	hydroRepository.findUserID(5)
	const userHydro = new UserHydro(hydroRepository.currentUser)
	userHydro.findOunceDay('2019/09/22')
	expect(userHydro.day).to.equal(37)
	});

	it('should display weekly average based off user and date', function() {
	const hydroRepository = new HydroRepository(hydroData)
	hydroRepository.findUserID(5)
	const userHydro = new UserHydro(hydroRepository.currentUser)
	userHydro.findDates()
	expect(userHydro.findOunceWeek(5).toFixed(2)).to.equal('66.29')
	});
});