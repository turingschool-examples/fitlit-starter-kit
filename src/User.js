if (typeof module !== 'undefined') {
  userData = require('../data/users-test-data')
  activityData = require('../data/activity-test-data')
  UserRepo = require('./UserRepo')
}

class User {
	constructor(dataIndex){
		this.name = userData[dataIndex].name;
		this.strideLength = userData[dataIndex].strideLength;
		this.id = userData[dataIndex].id;
		this.address = userData[dataIndex].address;
		this.email = userData[dataIndex].email;
		this.dailyStepGoal = userData[dataIndex].dailyStepGoal;
		this.friends = userData[dataIndex].friends;
	}

	findFirstName(){
		return this.name.split(' ')[0];
	}
}

if (typeof module !== 'undefined') {
	module.exports = User;
  }