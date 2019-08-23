const chai = require('chai');
const expect = chai.expect;

const SleepRepository = require('../src/sleepRepository.js');
const Sleep = require('../src/sleep.js');
const sleepData = require('../data/sleep.js');

describe('Sleep', function() {
	const sleepRepository = new SleepRepository(sleepData)
	const sleep = new Sleep(sleepRepository.currentUser)
	it('should have a length of 100', function() {
		sleepRepository.findUserID(5);
		expect(sleep.data.length).to.equal(100)
	})

	it('should calculate average number of hours slept', function() {
	sleepRepository.findUserID(5)
	expect(sleep.findAvgSleep().toFixed(2)).to.equal('7.68')
	});
})