if(typeof module !== 'undefined') {
	var User = require('../src/user');
	var hydrationData = require('../data/hydration');
};


class Hydration {
	constructor(hydrationData) {
		this.hydrationData = hydrationData;
		// this.userData = require(hydrationData);
	}

	findAvgWaterIntake() {


	}
}

if(typeof module !== 'undefined') {
	module.exports = Hydration;
}