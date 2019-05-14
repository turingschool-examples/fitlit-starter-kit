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
  		const final = Number(array2.reduce((acc,curr)=> acc +=curr)/array2.length).toFixed(2);
  		return parseFloat(final)

  	}

  	findGoodSleepers(date) {
  		return this.userSleepData.filter(function(el) {
  			let values = Object.values(el.sleepData)
  			let num = values.findIndex(el => el.date === date)
  			let week = values.slice(num, num+7)

  			let sleepQualitySum = week.reduce((acc,curr) => {

  				acc += curr.sleepQuality
  				return acc
  			},0)
  			let weekAvg = sleepQualitySum/7
  			return weekAvg > 3

  		}).map(el => el.userID)
  		console.log(findGoodSleepers())



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