if(typeof module !== 'undefined') {
	userData = require('../data/users');
	activityData = require('../data/activity');
};

class UserGoalTrend {
	constructor(userData, hydrationData, sleepData, activityData, userId) {
		this.userData = userData;
		this.currentUserData = this.findUserDataById();
		this.hydrationData = hydrationData;
		this.currentHydration = this.findHydrationDataById();
		this.sleepData = sleepData;
		this.currentSleep = this.findSleepDataById();
		this.activityData = activityData
		this.currentActivity = this.findActivityDataById();
		this.sleepGoal = 8|| sleepGoal;
		this.waterGoal = 64|| waterGoal;
	

	}

	findUserDataById(userId) {
		return this.userData.find(el => el.id === userId)
	}

	findHydrationDataById(userId) {
		return this.hydrationData.find(el => el.userID === userId);

	}

	findSleepDataById(userId) {
		return this.sleepData.find(el => el.userID === userId);

	}

	findActivityDataById(userId) {
		return this.activityData.find(el => el.userID === userId);
	}

	assessTriCategoryGoals() {
		console.log(this.findActivityDataById())
		const datesGoalsReached = [];
		const waterGoalMet = this.hydrationData.filter(el => el.numOunces >= this.findHydrationDataById.numOunces)
		// const sleepGoalMet = this.sleepData.filter(el => el.)

	}

}




if(typeof module !== 'undefined') {
module.exports = UserGoalTrend;
}