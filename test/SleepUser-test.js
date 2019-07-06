const chai = require('chai');
const expect = chai.expect;

const SleepRepository = require('../src/SleepRepository.js');
const SleepUser = require('../src/SleepUser.js');
const mockSleepData = require('../mock-data/mock-sleep-data.js');


let newSleepRepository, newSleepUser, newSleepUserInfo;

describe('SleepUser', function() {
	beforeEach(function() {
		newSleepRepository = new SleepRepository(mockSleepData, 1);
		newSleepUser = new SleepUser(newSleepRepository.findSleepUser());
	});

	it('should be a function', function() {
		expect(SleepUser).to.be.a('function')
	});

	it('should be an instance of SleepUser', function() {
		expect(newSleepUser).to.be.an.instanceOf(SleepUser)
	});

	describe('sleepOneDay', function() {
		it('should show how many hours a user slept on a specific day', function() {
			expect(newSleepUser.sleepOneDay("2019/06/13")).to.equal(4.1)
		});
	});	

	describe('sleepQualityOneDay', function() {
		it('should show the sleep quality for a user on one specific day', function() {
			expect(newSleepUser.sleepQualityOneDay("2019/06/13")).to.equal(3.8)
		});
	});

	describe('sleepOneWeek', function() {
		it('should show how many hours a user slept each day over a week', function() {
			expect(newSleepUser.sleepOneWeek("2019/06/15", "2019/06/21")).to.eql(`<p>On 2019/06/15 you slept 6.1 hours!</p><p>On 2019/06/16 you slept 4.1 hours!</p><p>On 2019/06/17 you slept 8 hours!</p><p>On 2019/06/18 you slept 10.4 hours!</p><p>On 2019/06/19 you slept 10.7 hours!</p><p>On 2019/06/20 you slept 9.3 hours!</p><p>On 2019/06/21 you slept 7.8 hours!</p>`)
		});
	});

	describe('sleepQualityOneWeek', function() {
		it('should show a user\'s sleep quality each day over a week', function() {
			expect(newSleepUser.sleepQualityOneWeek("2019/06/15", "2019/06/21")).to.eql(`<p>On 2019/06/15 your sleep quality was 2.2!</p><p>On 2019/06/16 your sleep quality was 3.8!</p><p>On 2019/06/17 your sleep quality was 2.6!</p><p>On 2019/06/18 your sleep quality was 3.1!</p><p>On 2019/06/19 your sleep quality was 1.2!</p><p>On 2019/06/20 your sleep quality was 1.2!</p><p>On 2019/06/21 your sleep quality was 4.2!</p>`)
		});
	});

})

