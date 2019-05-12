if(typeof module !== 'undefined') {
	User = require('../src/user');
	userData = require('../data/users');
	hydrationRepo = require('../src/hydration-repo');
	hydrationStats = require('../data/sample-hydration');
};


class Hydration {
	constructor(userHydData) {
		this.hydrationStats = hydrationData;
		this.userHydData = userHydData; 
	}

	findAvgWaterIntake() {
		return this.userHydData.hydrationData.reduce((a, b) => a += b.numOunces, 0)/ this.userHydData.hydrationData.length;
    }

  findFluidOzByDay(date) {
		const fluid = this.userHydData.hydrationData.find(element => element.date === date);
    return fluid.numOunces;
    }

 	findWeeklyWater(date) {
    let startDate = this.userHydData.hydrationData.findIndex(element => element.date === date);
		 let dateRange = this.userHydData.hydrationData.slice(startDate, startDate+7).map(element => element.numOunces);
   	return dateRange;
 	}

};



if(typeof module !== 'undefined') {
	module.exports = Hydration;
}