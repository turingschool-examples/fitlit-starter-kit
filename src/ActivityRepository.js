class ActivityRepository {
	constructor(activityDataset, id, userDataset) {
		this.activityDataset = activityDataset;
		this.id = id;
		this.userActivity = this.findActivityUser();
		this.userDataset = userDataset;
		this.user = this.findUser();
		this.strideLength = this.user.strideLength;
		this.dailyStepGoal = this.user.dailyStepGoal;
	}

	findActivityUser() {
		return this.activityDataset.filter(user => user.userID === this.id)
	}

	findUser() {
		return this.userDataset.find(user => user.id === this.id)
	}

	minutesActiveWeekAverage(startDate, endDate) {
		let week = this.userActivity.filter(day => 
			day.date >= startDate && day.date <= endDate);
		return Math.floor(week.reduce((a,b) => 
			a + b.minutesActive, 0)/week.length)
	}

	exceedStepGoal() {
		return this.userActivity.filter(day => 
			day.numSteps >= this.dailyStepGoal).map(day => day.date)
	}

	stairsClimbedAverage(dateString) {
		let date = this.activityDataset.filter(day => day.date === dateString)
		return Math.ceil(date.reduce((a,b) => 
			a + b.flightsOfStairs, 0)/date.length);
	}

	stepsTakenAverage(dateString) {
		let date = this.activityDataset.filter(day => day.date === dateString)
		return Math.ceil(date.reduce((a,b) => 
			a + b.numSteps, 0)/date.length);
	}

	minutesActiveAverage(dateString) {
		let date = this.activityDataset.filter(day => day.date === dateString)
		return Math.ceil(date.reduce((a,b) => 
			a + b.minutesActive, 0)/date.length);
	}

}

if (typeof module !== 'undefined') {
  module.exports = ActivityRepository;
}