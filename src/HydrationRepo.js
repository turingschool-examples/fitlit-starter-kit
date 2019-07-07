if (typeof module !== 'undefined') {
	Hydration = require('./Hydration')
	hydrationData = require('../data/hydration-test-data')
	userData = require('../data/users-test-data')
	user = require('./User')
}

class HydrationRepo{
	constructor(id){
		this.hydrationUserData= (this.findHydrationData(id));
		console.log(this.hydrationUserData)
		// this.users = new Hydration(id);
	};

	findHydrationData(id){
		return hydrationData.filter(hydration => hydration.userID === id); 
	};

	findSpecificDayHydrationOunces(id, dateOf) {
		let numOuncesDate = this.hydrationUserData.find(day => day.date === dateOf);
		return numOuncesDate.numOunces
	}

	findDailyConsumption(dateOf){
		return this.hydrationUserData.find(day=> day.date === dateOf).numOunces;
	};

	weeklyConsumptionAverage(specificDate){
		let newDateIndex = this.hydrationUserData.findIndex(user => user.date === specificDate);
		let slicedDates = this.hydrationUserData.slice(newDateIndex - 6, newDateIndex + 1);
		let weeklyOzs = slicedDates.map(user => user.numOunces);
		return Math.floor(weeklyOzs.reduce((totalOzs, dailyOz) => {
			return totalOzs += dailyOz
		}, 0)/ 7)
	};

	returnHydrationValuesForWeek(specificDate) {
		let newDateIndex = this.hydrationUserData.findIndex(user => user.date === specificDate);
		let slicedDates = this.hydrationUserData.slice(newDateIndex - 6, newDateIndex + 1);
		return slicedDates.map(user => user.numOunces);
	}




};


if (typeof module !== 'undefined') {
	module.exports = HydrationRepo;
  }