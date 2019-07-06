if (typeof module !== 'undefined') {
	activityData = require('../data/activity-test-data')
	User = require('./User')
	userData = require('../data/users-test-data')
	user = new User(1)

}

class Activity{
	constructor(){
		this.data = activityData;
		this.users = userData;
		this.specificUserActivityData = [];
		this.specificUserIdentityData = []
	}

	findActivityData(id){
		let filteredActivityData = this.data.filter(activity => activity.userID === id); 
        filteredActivityData.forEach(user => this.specificUserActivityData.push(user));

    };

    findUserData(id){
        let uniqueUser = this.users.filter(user => user.id === id); 
        uniqueUser.forEach(user => this.specificUserIdentityData.push(user));
    };

    findActiveMinutesForDay(id, dateOf){
    	this.findActivityData(id);
    	let dateOfActivity = this.specificUserActivityData.find(day => day.date === dateOf);
    	return dateOfActivity.minutesActive;
    }

    findActiveMinutesForWeek(id, dateOf){
    	this.findActivityData(id);
    	let dateIndex = this.specificUserActivityData.findIndex(day => day.date === dateOf);
        let weekOf= this.specificUserActivityData.slice(dateIndex - 6, dateIndex + 1)
    	let dailyMinutesActive =  weekOf.map(day => day.minutesActive)
    	return Math.floor(dailyMinutesActive.reduce((totalMinutes, dailyMinutes) => {
    		totalMinutes += dailyMinutes
    		return totalMinutes
    	}, 0) / 7)
    }

    compareNumStepsToStepGoal(id, dateOf){
    	this.findActivityData(id)
    	this.findUserData(id)
    	let dayOfActivity = this.specificUserActivityData.find(day => day.date === dateOf)
    	if(dayOfActivity.numSteps >= this.specificUserIdentityData[0].dailyStepGoal){
    		return `Great job at meeting your Daily Step Goal!`
    	} else{
    		return 'Keep twerking!'
    	}
    }

    daysExceedStepGoal(id){
    	this.findActivityData(id)
    	this.findUserData(id)
    	let stepGoal = this.specificUserIdentityData[0].dailyStepGoal
    	let allDates = this.specificUserActivityData.filter(day => day.numSteps >= stepGoal)
    	return allDates.map(day => day.date)
    }

    allTimeStairRecord(id){
    	this.findActivityData(id)
    	let stairRecord = this.specificUserActivityData.sort((a,b) =>{
 			return b.flightsOfStairs - a.flightsOfStairs;
    	})
    	return stairRecord[0].flightsOfStairs


    }

	
}

module.exports = Activity;