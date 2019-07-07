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

    findAverageAmtStairsClimbed(dateOf){
    	let usersActiveOnDate = this.data.filter(user => user.date === dateOf);
    	let allStairs = usersActiveOnDate.map(user => user.flightsOfStairs);
        let averagePerUserClimbed = allStairs.reduce((totalStairs, stairsPerUser)=> totalStairs += stairsPerUser);
        return Math.round(averagePerUserClimbed/usersActiveOnDate.length)
    }

    findAverageAmtStepsTaken(dateOf){
    	let usersActiveOnDate = this.data.filter(user => user.date === dateOf);
    	let allSteps = usersActiveOnDate.map(user => user.numSteps);
        let averagePerUserSteps = allSteps.reduce((totalSteps, stepsPerUser)=> totalSteps += stepsPerUser);
        return Math.round(averagePerUserSteps/usersActiveOnDate.length)
    }
};
    

    module.exports = ActivityRepo;