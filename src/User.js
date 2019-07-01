if (typeof module !== 'undefined') {
  userData = require('../data/users-test-data')
  activityData = require('../data/activity-test-data')
  UserRepo = require('./UserRepo')
}

class User {
	constructor(data){
		console.log(data)
		this.name = data[obj].name 

	}
}


//passing thru an array of objects 


module.exports = User;