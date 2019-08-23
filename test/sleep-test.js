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

	it('should display number of hours slept over the course of a week', function() {
	sleepRepository.findUserID(5)
	expect(sleep.findSleepWeek(0)).to.eql([4.1,7.4,10.5,5.2,4.8,10.1,9.6])
	});
})