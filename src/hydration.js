if(typeof module !== 'undefined') {
	var User = require('../src/user');
	var userData = require('../data/users');
	var userHydrationData = require('../data/sample-hydration');
};


class Hydration {
	constructor(hydrationData, userData) {
		this.hydrationData = hydrationData;
		this.userData = require(userData);
	}

	returnUserId(userId) {
		let currentUser = this.userData.find(element => element.id === userId)
		return currentUser.id
		}

	findAvgWaterIntake() {

        // let water = this.hydrationData.reduce((acc ,curr) => acc + curr, 0)/hydrationData.length;
        // console.log(water)

        let water = this.userData.map(element => element.hydrationData);
        console.log(water)
   let avgWater = Math.ceil(water.reduce((acc,curr)=> acc + curr,0)/water.length);
   return avgWater;
    //by user ID number go into the array
    //pull all hydrationData.numOunces
    //sum and divide by hydrationData.length

    }
}



if(typeof module !== 'undefined') {
	module.exports = Hydration;
}