if (typeof module !== 'undefined') {
    Sleep = require('./Sleep');
    sleepData = require('../data/sleep-test-data');
    userData = require('../data/users-test-data')
    user = require('./User')
  } 

class SleepRepo {
    constructor(id){
        this.sleepData = sleepData;
        this.users = new Sleep(id);//this is only one user
    };

    findAverageSleep(){
        let allQuality = this.sleepData.map(user => user.sleepQuality);
        let AllQualityReduced = allQuality.reduce((a,b)=> a += b);
        return Math.round(AllQualityReduced/this.sleepData.length)
    };

    findAboveAverageSleepers(dateOf){ // not done
        let userIDs = new Set(sleepData.map(user => user.userID))
        let uniqueUsers = new Array(...userIDs)
        console.log(uniqueUsers)
        return uniqueUsers.reduce((allIds, curId)=> {
            let user = sleepData.filter(sleep => sleep.userID === curId)
            let dateIndex =  user.findIndex(day => day.date === dateOf);
            let week = user.slice(dateIndex - 6, dateIndex + 1);
            let overallSleepQuality = week.reduce((overallQuality, dailyQuality) => {
                return overallQuality += dailyQuality.sleepQuality;
            }, 0)/7
            
            if(overallSleepQuality >= 3){
                allIds.push(userIDs)
            }
            console.log('allIds', allIds)
            return allIds;

            }, [])

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