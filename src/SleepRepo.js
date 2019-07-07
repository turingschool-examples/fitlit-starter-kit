if (typeof module !== 'undefined') {
    Sleep = require('./Sleep');
    sleepData = require('../data/sleep-test-data');
	userData = require('../data/users-test-data')
	user = require('./User')
  } 

class SleepRepo {
    constructor(id){
        this.sleepData = sleepData;
        this.users = new Sleep(id);
    };

    findAverageSleep(){
        let allQuality = this.sleepData.map(user => user.sleepQuality);
        let AllQualityReduced = allQuality.reduce((a,b)=> a += b);
        return Math.round(AllQualityReduced/this.sleepData.length)
    };

    findAboveAverageSleepers(dateOf){
        let userIndexes = this.sleepData.map(user => user.sleepData.findIndex(day => day.date === dateOf));

    }

    findDateForSleep(dateOf) {
        return this.sleepData.filter(day => day.date === dateOf);
    };

    findUserWithMostHours(dateOf){
        let days = this.findDateForSleep(dateOf);
        let userHours = days.sort(function(a,b){
            return b.hoursSlept - a.hoursSlept
        });

        let longestSleeper =  userHours.filter(day => day.hoursSlept === userHours[0].hoursSlept);
        return longestSleeper[0].hoursSlept        
    }

    findWorstSleeper(dateOf){
        let days = this.findDateForSleep(dateOf);
        let userHours = days.sort(function(a,b){
            return a.hoursSlept - b.hoursSlept
        });

        let worstSleeper =  userHours.filter(day => day.hoursSlept === userHours[0].hoursSlept);
        return worstSleeper[0].hoursSlept
    }
};

if (typeof module !== 'undefined') {
    module.exports = SleepRepo;
  }
