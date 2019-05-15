if(typeof module !== 'undefined') {
	User = require('../src/user');
	userData = require('../data/users');
	activityData = require('../data/activity');
};

class ActivityRepository {
	constructor(dataFilePath) {
		this.userActivityData = this.findFilePath(dataFilePath);
	}
	findFilePath(dataFilePath) {
    if(typeof module !== 'undefined') {
      return require(dataFilePath)
    } else {
      return activityData;
    } 
  }

  findAvgStairsClimbed(date) {
		const userActivity = this.userActivityData.map(el => el.activityData)
		let stairs = []
		userActivity.map(el =>
			el.filter(el => {
			if(el.date === date) {
			 stairs.push(el.flightsOfStairs)
			}  
		}))
	 let final = stairs.reduce(function(acc,curr){
			return Math.round((acc += curr)/stairs.length)
		})
		return final
	}


findAvgSteps(date) {
	console.log(this.userActivityData)
	const userActivity = this.userActivityData.map(el => el.activityData)
	let steps = []
	userActivity.map(el =>
		el.filter(el => {
		if(el.date === date) {
		 steps.push(el.numSteps)
		
		}  
	}))
 let final = steps.reduce(function(acc,curr){
		return Math.round((acc += curr)/steps.length)
	})
	return final
}

findAvgActivity(date) {
	console.log(this.userActivityData)
	const userActivity = this.userActivityData.map(el => el.activityData)
	let mins = []
	userActivity.map(el =>
		el.filter(el => {
		if(el.date === date) {
		 mins.push(el.minutesActive)
		
		}  
	}))
 let final = mins.reduce(function(acc,curr){
		return Math.round((acc += curr)/mins.length)
	})
	return final
}

};



if(typeof module !== 'undefined') {
module.exports = ActivityRepository
}