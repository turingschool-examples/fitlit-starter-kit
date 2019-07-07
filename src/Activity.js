if (typeof module !== 'undefined') {
	activityData = require('../data/activity-test-data')
	User = require('./User')
	userData = require('../data/users-test-data')

}

class Activity{
	constructor(){
		this.data = activityData;

	}

	
}

if (typeof module !== 'undefined') {
	module.exports = Activity;
  }