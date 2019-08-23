const chai = require('chai');
const expect = chai.expect;

const SleepRepository = require('../src/sleepRepository.js');
const Sleep = require('../src/sleep.js');
const sleepData = require('../data/sleep.js');

describe('SleepRepository', function() {
	const sleepRepository = new SleepRepository(sleepData)
	const sleep = new Sleep(sleepRepository.currentUser)
	it('should return a userID', function() {
		sleepRepository.findUserID(5);
		expect(sleepRepository.currentUser.length).to.equal(100)
	})

	it('should be able to calculate all users average sleep quality', function() {
		sleepRepository.findUserID(5);
		expect(sleepRepository.findAverageQuality().toFixed(2)).to.equal('2.98')
	})
})