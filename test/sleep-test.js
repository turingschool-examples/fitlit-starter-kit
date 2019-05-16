if(typeof module !== 'undefined') {
	var chai = require('chai');
	var expect = chai.expect;
	var sampleSleepData = require('../data/sample-sleep')
	var SleepRepository = require('../src/sleep-repo')
	var Sleep = require('../src/sleep');
}

describe('Sleep', function() {
	let sleepRepo;
	let sleep;
	let sleepData;

	beforeEach(function() {
		sleepRepo = new SleepRepository('../data/sample-sleep');
		sleep = new Sleep(sleepData);
		sleepData = 
		[
		{
			"userID": 1,
			"sleepData": [
			{
				"date": "06/05/2019",
				"hoursSlept": 8,
				"sleepQuality": 4.8
			},
			{
				"date": "07/05/2019",
				"hoursSlept": 10.7,
				"sleepQuality": 4.8
			},
			{
				"date": "08/05/2019",
				"hoursSlept": 8.1,
				"sleepQuality": 1.9
			},
			{
				"date": "09/05/2019",
				"hoursSlept": 4.5,
				"sleepQuality": 3.4
			},
			{
				"date": "10/05/2019",
				"hoursSlept": 10.7,
				"sleepQuality": 4.3
			},
			{
				"date": "11/05/2019",
				"hoursSlept": 5.6,
				"sleepQuality": 3.5
			},
			{
				"date": "12/05/2019",
				"hoursSlept": 10.1,
				"sleepQuality": 1.7
			},
			{
				"date": "13/05/2019",
				"hoursSlept": 10.1,
				"sleepQuality": 3.2
			},
			{
				"date": "14/05/2019",
				"hoursSlept": 10.5,
				"sleepQuality": 2
			},
			{
				"date": "15/05/2019",
				"hoursSlept": 6.1,
				"sleepQuality": 2.9
			}
			]
		},
		{
			"userID": 2,
			"sleepData": [
			{
				"date": "06/05/2019",
				"hoursSlept": 6.3,
				"sleepQuality": 2.2
			},
			{
				"date": "07/05/2019",
				"hoursSlept": 9.2,
				"sleepQuality": 4.8
			},
			{
				"date": "08/05/2019",
				"hoursSlept": 6.6,
				"sleepQuality": 4.5
			},
			{
				"date": "09/05/2019",
				"hoursSlept": 6.8,
				"sleepQuality": 1.4
			},
			{
				"date": "10/05/2019",
				"hoursSlept": 9.3,
				"sleepQuality": 4.8
			},
			{
				"date": "11/05/2019",
				"hoursSlept": 8.5,
				"sleepQuality": 1.7
			},
			{
				"date": "12/05/2019",
				"hoursSlept": 5.9,
				"sleepQuality": 3.2
			},
			{
				"date": "13/05/2019",
				"hoursSlept": 4.1,
				"sleepQuality": 2.1
			},
			{
				"date": "14/05/2019",
				"hoursSlept": 4.3,
				"sleepQuality": 4.2
			},
			{
				"date": "15/05/2019",
				"hoursSlept": 9.6,
				"sleepQuality": 3.8
			}
			]

		}
		]

	});

	it('should be a function', function() {
		expect(Sleep).to.be.a('function');
	});

	it('should be an instance of Sleep', function() {
		expect(sleep).to.be.an.instanceof(Sleep)
	});

	it('should find a user by id', function() {
		expect(sleep.findUserSleepData(1)).to.eql(sleepData[0])
	});

	it('should find a user\'s average hours slept', function() {
		expect(sleep.findAvgHoursSlept(1)).to.equal(8.44)
	});

	it('should find a user\'s average sleep quality', function() {
		expect(sleep.findAvgSleepQuality(1)).to.equal(3.25)
	});

	it('should find a user\'s hours slept for a given date', function() {
		expect(sleep.findHoursSleptByDay(1, '07/05/2019')).to.equal(10.7)
	});

	it('should find a user\'s sleep quality for a given date', function() {
		expect(sleep.findSleepQualityByDay(2, '15/05/2019')).to.equal(3.8)
	});

	it('should find a user\'s daily hours slept for a given week', function() {
		expect(sleep.findHoursSleptByWeek(2, '07/05/2019')).to.eql([9.2, 6.6, 6.8, 9.3, 8.5, 5.9, 4.1])
	});

	it('should find a user\'s daily sleep quality for a given week', function() {
		expect(sleep.findSleepQualityByWeek(2, '07/05/2019')).to.eql([4.8, 4.5, 1.4, 4.8, 1.7, 3.2, 2.1])
	});

	it('should find a user\'s average hours slept for a given week', function() {
		expect(sleep.findAvgHoursSleptByWeek(1, '09/05/2019')).to.equal(8.23)
	})
	
})