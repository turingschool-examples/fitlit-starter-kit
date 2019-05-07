const users = require('../data/users');
const User = require('../src/User');

class UserRepository {
	constructor(dataFilepath) {
		this.dataFilepath = dataFilepath;
		this.path = require(this.dataFilepath);
	}

	returnUserData(userId) {
		return this.path.find(user => user.userID === userId);
	}

	calculateAvgStepGoal() {
		return Math.ceil(this.path.reduce((sum, num) => {
			return sum + num.dailyStepGoal;
		}, 0) / this.path.length);
	}

	calculateModeState() {
		let stateCount = {};
		this.path.forEach(el => {
			const state = el.address.split(' ')[el.address.split(' ').length - 2]
			if (stateCount[state] > 0) {
				stateCount[state]++;
			} else {
				stateCount[state] = 1;
			}
		})
		
		return Object.keys(stateCount).find(el => stateCount[el] === Math.max(...Object.values(stateCount)));
	}

	instantiateNewThing(dataFilePath) {
		// conditional that checks the filepath
		// instantiates the correct Class depending on filepath
		// new instance takes in the current user
	}

	runActivityMethod(dataFilepath) {
		//const newActivity = instantiateNewThing(dataFilePath);
		//newActivity.activityMethod();
	}


}

module.exports = UserRepository;

// create method that parses the filePath and returns the require variable
// use that method at the start of other methods to access each data set

// create global variable for a potential require
// use dataFilepath argument within a method to reassign that global variable
// use reassigned variable within subsequent methods