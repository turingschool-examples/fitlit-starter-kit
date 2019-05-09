if(typeof module !== 'undefined') {
	var User = require('../src/user');
	var userData = require('../data/users');
	var userHydrationData = require('../data/sample-hydration');
};


class Hydration {
	constructor(hydrationStats, userData, userId) {
		this.hydrationStats = require(hydrationStats);
		this.userData = require(userData);
		// this.userHydration = this.returnUserHydration(userId)
	}

	returnUserHydration(userId) {
		let currentUser = this.hydrationStats.find(element => element.userID === userId)
		return currentUser.hydrationData;
		}

	findAvgWaterIntake(userId) {
		let currentUserHydration = this.returnUserHydration(userId);
		return currentUserHydration.reduce((a, b) => a += b.numOunces, 0)/ currentUserHydration.length;
    }
}



if(typeof module !== 'undefined') {
	module.exports = Hydration;
}