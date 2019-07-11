if (typeof module !== 'undefined') {
    sleepData = require('../data/sleep-test-data');
	userData = require('../data/users-test-data')
	user = require('./User')
  } 

class Sleep {
    constructor(id){
        this.userSleepData = (this.findSleepData(id));
    };

	findSleepData(id){
		return sleepData.filter(sleep => sleep.userID === id); 
    };
    
    findAverageSleepQualityForUser(){
        let allOneUserQuality = this.userSleepData.map(user => user.sleepQuality);
        let reducedQualityForOneUser = allOneUserQuality.reduce((a,b) => a += b);
        return Math.round(reducedQualityForOneUser/this.userSleepData.length)
    };

    findAverageHoursSleptForUser() {
        let allHoursForOneUser = this.userSleepData.map(user => user.hoursSlept);
        let reducedHoursForOneUser = allHoursForOneUser.reduce((a,b) => a += b);
        return Math.round(reducedHoursForOneUser/this.userSleepData.length);
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

    findHoursSleptForSpecificDay(dateOf) {
        return this.findDateForSleep(dateOf).hoursSlept
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
        return this.userSleepData.find(day => day.date === dateOf)
    };

    findWeekForSleep(dateOf) {
        let dateIndex = this.userSleepData.findIndex(day => day.date === dateOf);
        return this.userSleepData.slice(dateIndex - 6, dateIndex + 1)
    };

    findUserWithMostHours(dateOf){
        let day = findDateForSleep(dateOf);
        return day;
    }

    findWorstDayOfSleepHours(id){
        let sortedHours = this.userSleepData.sort((a,b) => {
            return a.hoursSlept - b.hoursSlept
        });
        return sortedHours[0].hoursSlept;
    }

    findWorstDayOfSleepQuality(id){
        let sortedHours = this.userSleepData.sort((a,b) => {
            return a.sleepQuality - b.sleepQuality
        });
        return sortedHours[0].sleepQuality;
    };
}

if (typeof module !== 'undefined') {
    module.exports = Sleep;
  }