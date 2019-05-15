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
  	const flightsOfStairs = [];
  	const userActivity = this.userActivityData.map(el => el.activityData)
  	const stairsClimbed = userActivity.map(el => {
  		flightsOfStairs.push(el.flightsOfStairs)
  	})
  	console.log(flightsOfStairs)
  }
	
}




//Find average flightsOfStairs (date)
	//Slice objects by specific date range
	//Map through array of objects to find activityData
	//Calculate sum of flightOfStairs for all users
	//Divide by array.length
	//return Average

//Find average numSteps(date)
	//Slice objects by spec date range
	//Map through array of objects to find activityData
	//Calculate sum of numSteps for all users
	//Divide by array.length
	//return Average

//Find average minutesActive(date)
	//Slice objects by spec date range
	//Map through array of objects to find activityData
	//Calculate sum of minutesActive for all users
	//Divide by array.length
	//return Average




if(typeof module !== 'undefined') {
module.exports = ActivityRepository;
}