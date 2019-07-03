if (typeof module !== 'undefined') {
	userData = require('../data/users-test-data')
	user = require('./User')
}

class UserRepo{
	constructor(){
		this.users = userData;
	};

	findUserData(id){
		this.users.filter(user => user.id === id); 
	};

	findAverageStepGoal(){
		return this.users.reduce((totalSteps, user) => {
			totalSteps += user.dailyStepGoal;
			return totalSteps;
		}, 0) / this.users.length;
	};
};

module.exports = UserRepo;