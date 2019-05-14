if(typeof module !== 'undefined') {
	User = require('../src/user');
	userData = require('../data/users');
	activityData = require('../data/activity');
};

class Activity {
	
}

//Convert numSteps to miles(userID, date)
	//Move into specific user obj --> find(specificDate)
	//find numSteps
	//300/numSteps == user.strideLength(in ft)
	//5280 divided by user.strideLength(in ft)
	//return miles

//Find minutesActive(userID, date)
	//Map through activityData(user => user.id === userID)
	//Map through specific user obj(item => item.date === date)
	//Find user[minutesActive] for specified date
	//return minutesActive

//Find weekly minutesActive(userID, date)
	//Move into user obj
	//Slice date range
	//Map through array.minutesActive
	//return new array of minutesActive per day

//Find if dailyStepGoal met(userID, date)
	//Find userID === user.id
	//Find user.activityData.date === date
	//Set conditional if(user.activityData.numSteps >= user.dailyStepGoal)
	//return Boolean

//Find all days numSteps exceed dailyStepGoal(userID)
	//Find userID === user.id
	//Set conditional if(user.activityData.numSteps > user.dailyStepGoal)
	//Filter all dates that return true

//Find highest flighstOfStairs
	//Find activityData.flightsOfStairs
	//Math.max(flightsOfStairs)
	//Return highest


if(typeof module !== 'undefined') {
module.exports = Activity;
}