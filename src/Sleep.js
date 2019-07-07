if (typeof module !== 'undefined') {
    sleepData = require('../data/sleep-test-data');
	userData = require('../data/users-test-data')
	user = require('./User')
  } 

class Sleep {
    constructor(data){
        this.id = sleepData.userID;
        this.data = sleepData;
        this.specificUser = []
        
    };

	findSleepData(id){
		let filteredSleepData = this.data.filter(sleep => sleep.userID === id); 
        filteredSleepData.forEach(user => this.specificUser.push(user));
    };
    
    findAverageSleepQualityForUser(){
        let allQualityForOneUser = this.specificUser.map(user => user.sleepQuality);
        let reducedQualityForOneUser = allQualityForOneUser.reduce((a,b) => a += b)
        return Math.round(reducedQualityForOneUser/this.specificUser.length)
    };

    findAverageHoursSleptForUser() {
        let allHoursForOneUser = this.specificUser.map(user => user.hoursSlept);
        let reducedHoursForOneUser = allHoursForOneUser.reduce((a,b) => a += b);
        return Math.round(reducedHoursForOneUser/this.specificUser.length);
    };

    findHoursSleptForWeek(dateOf){
        let week = this.findWeekForSleep(dateOf)
        let sleepHoursForWeek = week.map(day => day.hoursSlept)
        return Math.floor(sleepHoursForWeek.reduce((totalHours, hours)=>{
            totalHours += hours
            return totalHours
        }))
    };

    findSleepQualityForSpecificDay(dateOf) {
        return this.findDateForSleep(dateOf).sleepQuality
    };

    findSleepQualityForWeek(dateOf){
        let week = this.findWeekForSleep(dateOf)
        let sleepQualForWeek = week.map(day => day.sleepQuality)
        let totalQualitySleep = sleepQualForWeek.reduce((totalQuality, qualities)=>{
            totalQuality += qualities
            return totalQuality
        })
        return Math.floor(totalQualitySleep/7)
    }

    findDateForSleep(dateOf) {
        return this.specificUser.find(day => day.date === dateOf)
    };

    findWeekForSleep(dateOf) {
        let dateIndex = this.specificUser.findIndex(day => day.date === dateOf);
        return this.specificUser.slice(dateIndex - 6, dateIndex + 1)
    };

    findUserWithMostHours(dateOf){
        let day = findDateForSleep(dateOf);
        return day;
    }

};

if (typeof module !== 'undefined') {
    module.exports = Sleep;
  }