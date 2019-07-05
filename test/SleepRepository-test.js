const chai = require('chai');
const expect = chai.expect;

const SleepRepository = require('../src/SleepRepository.js');
const mockSleepData = require('../mock-data/mock-sleep-data.js');

let newSleepRepository;

describe('SleepRepository', function() {
	beforeEach(function() {
		newSleepRepository = new SleepRepository(mockSleepData, 1);
	});

	it('should be a function', function() {
		expect(SleepRepository).to.be.a('function')
	});

	it('should be an instance of SleepRepository', function() {
		expect(newSleepRepository).to.be.an.instanceOf(SleepRepository)
	});

	it('should store a collection of users sleep data', function() {
		expect(newSleepRepository.dataset).to.equal(mockSleepData)
	});

	it('should store a user id', function() {
		expect(newSleepRepository.id).to.equal(1)
	});

	describe('findUserSleepAverage', function() {
		it('should be able to find the average hours slept per day for a user', function() {
			expect(newSleepRepository.findUserSleepAverage()).to.equal(7.6)
		});
	});

	describe('findUserSleepQualityAverage', function() {
		it('should be able to find the average sleep quality per day for a user', function() {
			expect(newSleepRepository.findUserSleepQualityAverage()).to.equal(2.8)
		});
	});

	describe('findSleepQualityAverage', function() {
		it('should be able to find the average sleep quality per day for all users', function() {
			expect(newSleepRepository.findSleepQualityAverage()).to.equal(3.2)
		});
	});

	describe('findSleepQualityGreaterThanThree', function() {
		it('should be able to find each user in a week with a sleep quality greater than 3', function() {
			expect(newSleepRepository.findSleepQualityGreaterThanThree()).to.eql([2,3])
		});
	});

	describe('findMostSleep', function() {
		it('should be able to find the user/s who slept the most number of hours on a given date', function() {
			exepct(newSleepRepository.findMostSleep('2019/06/15').to.eql([3]))
		});
	});

	describe('findSleepHoursAverage', function() {
		it('should be able to find the average sleep hours per day for all users', function() {
			expect(newSleepRepository.findSleepHoursAverage()).to.equal(7.8)
		});
	});

});