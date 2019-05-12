if(typeof module !== 'undefined') {
	User = require('../src/user');
	userData = require('../data/users');
	userSleepData = require('../data/sleep');
};


class Sleep {
  constructor(){

  }

};

//Sleep

//Find average hours of sleep per day(userId)
    //Calculate sum of total hours slept
    //Divide by length of sleepData array
    //const totalSleep = sleepData.map((a, b) => a += b.hoursSlept, 0)/sleepData.length
    
//Find average sleep quality per day(userId)
    //Calculate sum of sleep quality
    //Divide by length of sleepData array

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
moduele.exports = Sleep;
}