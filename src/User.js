class User {
	constructor(id, name, address, email, strideLength, dailyStepGoal) {
		this.id = id;
		this.name = name;
		this.address = address;
		this.email = email;
		this.strideLength = strideLength;
		this.dailyStepGoal = dailyStepGoal;
	}

	returnFirstName() {
		// uses userData

	}
}

if (typeof module !== undefined) {
	var users = require('../data/users');
	module.exports = User;
}