if (typeof module !== 'undefined') {
	Hydration = require('./Hydration')
	hydrationData = require('../data/hydration-test-data')
	userData = require('../data/users-test-data')
	user = require('./User')
}

class HydrationRepo{
	constructor(id){
		this.data = hydrationData;
		this.userData = new Hydration(id);
		this.specificUser = [];
	};

	findHydrationData(id){
		let filteredHydrationData = this.data.filter(hydration => hydration.userID === id); 
		filteredHydrationData.forEach(user => this.specificUser.push(user));
	};

	findDailyConsumption(dateOf){
		return this.specificUser.find(day=> day.date === dateOf).numOunces;
		
	};
	sortMonthlyData(){
		let singleUserConsumption = this.specificUser.sort(function(a,b){
			return a-b;
		});
		let firstDateOfWeek = singleUserConsumption[0].date
		this.findSingleUserWeeklyConsumption(singleUserConsumption, firstDateOfWeek)
	}

	findSingleUserWeeklyConsumption(singleUserArray, dateOne){
		console.log(singleUserArray)
		let weekOfConsumption = singleUserArray.slice(dateOne, 6);
		this.dateIndex(weekOfConsumption)
	}
	
	dateIndex (singleUserArray){
		let dateOneIndex = singleUserArray[0];
		let dateTwoIndex = singleUserArray[6];
		console.log(dateOneIndex)
		console.log(dateTwoIndex)
		return (dateOneIndex, dateTwoIndex)
	}

	findWeeklyConsumption(){
		//access specificUser array
		//sort by day
		//slice out 7days by accessing the array.date
		//(set to variable) reduce the .numOunces within the 7day array
		//via that variable, divide by 7
		//return that variable
	
		let weekOfConsumption = singleUserConsumption.slice(dateIndex);
		let totalWeekConsumption =  weekOfConsumption.reduce(function(ounces, dailyAmt){
			return ounces += dailyAmt
		}, 0);
		return Math.floor(totalWeekConsumption/7)
	};
};


module.exports = HydrationRepo;