if(typeof module !== 'undefined') {
	User = require('../src/user');
	userData = require('../data/users');
	userSleepData = require('../data/sample-sleep');
};


class Sleep {
  constructor(userSleepData){
		this.userSleepData = userSleepData;
	
  }

  findUserSleepData(userId) {
  	return this.userSleepData.find(user => user.userID === userId)

	}

  findAvgHoursSlept(userId) {
  	const currentUser = this.findUserSleepData(userId);
  	const totalHours = currentUser.sleepData.map(item => item.hoursSlept)
  	const avgSleep = totalHours.reduce((a, b) => a += b, 0)/totalHours.length;
  	return avgSleep
  }

  findAvgSleepQuality(userId) {
  	const currentUser = this.findUserSleepData(userId);
  	const sleepQualityTotal = currentUser.sleepData.map(item => item.sleepQuality);
  	const avgQuality = sleepQualityTotal.reduce((a, b) => a += b, 0)/sleepQualityTotal.length;
  	return avgQuality
  }

  findHoursSleptByDay(userId, date) {
  	const currentUser = this.findUserSleepData(userId);
  	const findDate = currentUser.sleepData.find(item => item.date === date);
  	return findDate.hoursSlept
  }

  findSleepQualityByDay(userId, date) {
  	const currentUser = this.findUserSleepData(userId);
  	const findDate = currentUser.sleepData.find(item => item.date === date)
  	return findDate.sleepQuality
  }

  findHoursSleptByWeek(userId, date) {
  	const currentUser = this.findUserSleepData(userId);
  	const startDate = currentUser.sleepData.findIndex(item => item.date === date)
  	const weekOfSleep = currentUser.sleepData.slice(startDate, startDate+7).map(item => item.hoursSlept)
  	return weekOfSleep
  }

  findSleepQualityByWeek(userId, date) {
  	const currentUser = this.findUserSleepData(userId);
  	const startDate = currentUser.sleepData.findIndex(item => item.date === date)
  	const weekOfSleepQuality = currentUser.sleepData.slice(startDate, startDate+7).map(item => item.sleepQuality)
  	return weekOfSleepQuality
  }

  findAvgHoursSleptByWeek(userId, date) {
  	const currentUser = this.findUserSleepData(userId);
  	const startDate = currentUser.sleepData.findIndex(item => item.date === date);
  	const totalHours = currentUser.sleepData.slice(startDate, startDate+7).map(item => item.hoursSlept).reduce((a, b) => a +=b, 0);
  	const average = Number(totalHours/7).toFixed(2)
  	return parseFloat(average)

  }

};

//Sleep

//Find user by ID

//Find average hours of sleep per day(userId, date)
    //Calculate sum of total hours slept
    //Divide by length of sleepData array
    //const totalSleep = sleepData.map((a, b) => a += b.hoursSlept, 0)/sleepData.length
    
//Find average sleep quality per day(userId)
    //Calculate sum of sleep quality
    //Divide by length of sleepData array

//Find total hours slept for specific day(userId, date)
    //match date to sleepData.date
    //return sleepData[hoursSlept]

//Find sleep quality for specific date(userId, date)
    //Use find() method to search specific date
    //return sleepData.sleepQuality

//Find total hours slept for specific week(userId, date)
    //Use slice() method to access date range
    //Map() sleepData.hoursSlept
    //return dates and hoursSlept

//Find sleep quality for specific week(userId, date)
    //Use slice() method to access date range
    //Map() sleepData.sleepQuality
    //return dates and sleepQuality





if(typeof module !== 'undefined') {
module.exports = Sleep;
}