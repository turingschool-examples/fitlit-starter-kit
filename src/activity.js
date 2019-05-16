if(typeof module !== 'undefined') {
	User = require('../src/user');
	userData = require('../data/users');
	activityData = require('../data/activity');
};

class Activity {
	constructor(userActivityData, userData, userId) {
		this.userActivityData = userActivityData;
		this.userData = userData;
	}

	findUserById(userId) {
		return this.userActivityData.find(user => user.id === userId)
	}

	findStepsByDay(date) {
		const currentUser = this.findUserById()
		const dateInfo = currentUser.activityData.find(el => el.date === date)
		const totalSteps = dateInfo.numSteps;
		return totalSteps
	}

	findStairsByDay(date) {
		const currentUser = this.findUserById()
		const dateInfo = currentUser.activityData.find(el => el.date === date)
		const totalFlights = dateInfo.flightsOfStairs;
		return totalFlights
	}

	findMilesWalkedByDay(date) {
		const currentUser = this.findUserById()
		const strideLength = this.userData.strideLength
		const dateInfo = currentUser.activityData.find(el => {
			if(el.date === date) {
				return el.numSteps
			}
		})
		const miles = Number((strideLength * dateInfo.numSteps)/5280).toFixed(2)
		return parseFloat(miles)
		}

	findMinutesActiveByDay(date) {
		const currentUser = this.findUserById()
		const dateInfo = currentUser.activityData.find(el => el.date === date)
		const totalMinutes = dateInfo.minutesActive;
		return totalMinutes
	}

	findHoursActiveByDay(date) {
		const currentUser = this.findUserById()
		const dateInfo = currentUser.activityData.find(el => el.date === date)
		const totalMinutes = dateInfo.minutesActive;
		return Math.round(totalMinutes/60)
	}

	findAvgMinutesActiveByWeek(date) {
		const currentUser = this.findUserById();
		const startDate = currentUser.activityData.findIndex(el => el.date === date)
		const minutesForWeek = currentUser.activityData.slice(startDate, startDate+7).reduce((a, b) => a += b.minutesActive, 0)
		const average = Number(minutesForWeek/7).toFixed(2)
		return parseFloat(average)
	}

	assessDailyStepGoalByDate(date) {
		const currentUser = this.findUserById();
		const stepGoal = this.userData.dailyStepGoal;
		const givenDate = currentUser.activityData.find(el => el.date === date)
		if(givenDate.numSteps >= stepGoal) {
			return 'Great job! You reached your goal!'
		} else {
			return 'Your goal was not reached, but keep trying!'
		}
	}

	findExceededDailyStepGoalDates() {
		const currentUser = this.findUserById();
		const stepGoal = this.userData.dailyStepGoal;
		const findDates = currentUser.activityData.filter(el => el.numSteps > stepGoal)
		const mostSteps = findDates.map(el => el.date)
		return mostSteps
	}

	findMostStairsClimbed() {
		const currentUser = this.findUserById();
		const flightsOfStairs = currentUser.activityData.map(el => el.flightsOfStairs)
		const mostStairs = Math.max(...flightsOfStairs)
		return mostStairs
	}

	findCaloriesBurnedByDay(date){
		const miles = this.findMilesWalkedByDay(date)
		const flights = this.findStairsByDay(date)
		const activity = this.findHoursActiveByDay(date)
		const total = (miles*100) + (flights*12) + (activity*300)
		return total;
	}

	findStepsForWeek(date) {
		const currentUser = this.findUserById();
		const startDate = currentUser.activityData.findIndex(el => el.date === date)
		return currentUser.activityData.slice(startDate, startDate+7).reduce((a, b) => a += b.numSteps, 0)
	}
	
};


if(typeof module !== 'undefined') {
module.exports = Activity;
}