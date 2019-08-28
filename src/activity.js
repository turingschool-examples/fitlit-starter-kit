class Activity {
	constructor(data, user) {
		this.data = data
		this.dates = []
		this.week = []
		this.numSteps = null
		this.minutesActive = null
		this.flightsOfStairs = null
		this.user = user 
	}

	findActivityDates() {
		this.data.forEach(user => {
			this.dates.push(user["date"])
			})
		return this.dates
	}

	findNumSteps(date) {
		this.data.forEach(user => {
			if(user['date'] === date) {
				this.numSteps = user.numSteps
			}
		})
	}

	findMinActive(date) {
		this.data.forEach(user => {
			if(user['date'] === date) {
				this.minutesActive = user.minutesActive
			}
		});
	}

	findDistanceMiles(user, activity) {
		let distanceMiles = (activity.numSteps * user.strideLength) / 5280;
		return distanceMiles.toFixed(2)
	}

	checkStepGoal(user, activity) {
		if(activity.numSteps <= user.dailyStepGoal) {
			return "Congratulations! You met your goal!"
		} else {
			return "Step Goal not met. Keep working!"
		}
	}
}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}