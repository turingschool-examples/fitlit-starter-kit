if (typeof module !== 'undefined') {
	Activity = require('./Activity')
	activityData = require('../data/activity-test-data')
	userData = require('../data/users-test-data')
	user = require('./User')
}

class ActivityRepo{
	constructor(id){
		this.data = activityData;
		this.userData = userData;
		this.userActivityData = new Activity(id);

    };
};
    

    module.exports = ActivityRepo;