import { expect } from 'chai';
import Activity from '../src/Activity';
import { activityLogs, testUserInfo } from './Activity-test-data';


describe('Activity', () => {
	let testUser;
	beforeEach('data creation', () => {
		testUser = new Activity(testUserInfo, activityLogs)
	});

	it('should be a function', function () {
		expect(Activity).to.be.a('function');
	});

	it('should be an instance of Activity', function () {
		expect(testUser).to.be.an.instanceof(Activity);
	});

	it('should store a users id', function () {
		expect(testUser.userId).to.equal(1);
	});

	it('should store a users stride length', function () {
		expect(testUser.strideLength).to.equal(4);
	});

	it('should store a users daily step goal', function () {
		expect(testUser.dailyStepGoal).to.equal(7000);
	});

	it('should store a users activity logs', function () {
		expect(testUser.activityLogs).to.deep.equal([
			{ "userID": 1, "date": "2023/03/18", "numSteps": 3505, "minutesActive": 265, "flightsOfStairs": 22 },
			{ "userID": 1, "date": "2023/03/19", "numSteps": 3493, "minutesActive": 201, "flightsOfStairs": 15 },
			{ "userID": 1, "date": "2023/03/20", "numSteps": 9675, "minutesActive": 501, "flightsOfStairs": 22 },
			{ "userID": 1, "date": "2023/03/21", "numSteps": 4575, "minutesActive": 211, "flightsOfStairs": 17 },
			{ "userID": 1, "date": "2023/03/22", "numSteps": 5505, "minutesActive": 361, "flightsOfStairs": 15 },
			{ "userID": 1, "date": "2023/03/23", "numSteps": 6502, "minutesActive": 275, "flightsOfStairs": 23 },
			{ "userID": 1, "date": "2023/03/24", "numSteps": 7362, "minutesActive": 250, "flightsOfStairs": 26 }
		]);
	});

	it('should find the most recent day of activity logs', function () {
		expect(testUser.findMostRecentDay()).to.equal('2023/03/24');
	});

	it('should find the number of steps for the most recent day', function () {
		expect(testUser.findMostRecentSteps()).to.equal(7362);
	});

	it('should find the miles per day when given a date', function () {
		expect(testUser.calculateMiles('2023/03/22')).to.be.equal(4.2);
		expect(testUser.calculateMiles('2023/03/18')).to.be.equal(2.7);
	})

	it('should find the active minuts by day', function () {
		expect(testUser.findActiveMinutes('2023/03/21')).to.be.equal(211);
	});

	it('should find if they reached the step goal for a specific day', function () {
		expect(testUser.checkStepGoalReached('2023/03/18')).to.be.equal('Not quite! 3495 steps to go!');
		expect(testUser.checkStepGoalReached('2023/03/24')).to.be.equal(`Yes! 7362 steps meets your goal!`);
	});

	it('should be able to find the previous 7 days of number of steps', function () {
		expect(testUser.findStepsLastSevenDays()).to.deep.equal([3505, 3493, 9675, 4575, 5505, 6502, 7362]);
	});

	it('should be able to find the previous 7 days of if the step goal was reached', function () {
		expect(testUser.checkGoalLastSevenDays()).to.deep.equal(['No', 'No', 'Yes', 'No', 'No', 'No', 'Yes']);
	});
});