class Activity {
	constructor(data) {
		this.data = data
		this.dates = []
		this.numSteps = null
		this.minutesActive = null
		this.flightsOfStairs = null
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
}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}