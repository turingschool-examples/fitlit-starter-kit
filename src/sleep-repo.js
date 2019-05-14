if(typeof module !== 'undefined') {
	User = require('../src/user');
	userData = require('../data/users');
	sampleSleepData = require('../data/sleep');
};


class SleepRepository {
	constructor(dataFilePath) {
		this.userSleepData = this.findFilePath(dataFilePath);
	}

	findFilePath(dataFilePath) {
    if(typeof module !== 'undefined') {
      return require(dataFilePath)
    } else {
      return sleepData;
    } 
  }

  findAvgUserSleep() {
  		const array2 =[]
  		const array = this.userSleepData.map(el => el.sleepData)
  		array.reduce(function(acc,curr) {
  			const sleepQual = curr.filter(el => array2.push(el.sleepQuality))
  		},[])
  		return Math.floor(array2.reduce((acc,curr)=> acc +=curr)/array2.length)

  	}

  	findGoodSleepers(date) {
  		const dates = this.userSleepData.map(el => el.sleepData)
  		const newDates = dates.map(el => el.concat())
  		console.log(newDates)
  		// const allSleep = this.userSleepData.map(el => el.sleepData);
  		// // console.log(allSleep)
  		// allSleep.reduce(function(a,b) {
  		// 	const sleepDates = b.filter(el => dates.push(el.date))
  		// 	return a
  		// }, [])
  		// console.log(dates)
  		// const startDate = dates.findIndex(el => el === date)
  		// const dateRange = allSleep.slice(startDate, startDate+7).map(el => el.sleepQuality <3)
  		// console.log(dateRange)



  	}

  
  
};
//Sleep Repo

//Find user by Id and set a property to call that method in constructor

//Find average sleep quality(userSleepData)
    //Access object keys to target sleepData
    //Find sum of sleepQuality through all users (using reduce or map)
    //Calculate average
    //Return number

//Find good sleepers(userSleepData, date)
    //Access object keys to target sleepData
    //Use slice method to set date range
    //Map through users and set conditional for sleepQuality > 3

//Find Top Sleeper(userSleepData, date)
    //Access object keys to target sleepData
    //Filter specific date
    //const specificDate = sleepData.filter(item => item.date === date)
    
    //Find most hours amongst sleepers(date)
    //const mostHours = Math.max(specificDate.hoursslept)
    //
    //Create new array of users with most sleep
    //const topSleepers =specificDate.filter(item => item.hoursSlept === mostHours)

    //** proposing a method to access object keys and target sleepData to be used within each of these methods **//







if(typeof module !== 'undefined') {
module.exports = SleepRepository;
}