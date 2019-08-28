class AllUsers {
    constructor(data) {
        this.data = data;
    }
    
    getUsersWeek(day) {
        let index = this.data.findIndex(object => {
            return object.date === day;
        });
        let weekData = this.data.slice(index - 35, index + 5)
        return weekData;
        }

    getUserWeekArray(day) {
        let week = this.getUsersWeek(day);
        return week.reduce((acc, obj) => {
                if(!acc[obj.userID]) {
                    acc[obj.userID] = []
                } 
                acc[obj.userID].push(obj.sleepQuality)
                return acc;
        }, {})
        
    }

    getHighQualitySleepers(day) {
        let average = this.getUserWeekArray(day);
        let goodSleep = [];
        for(let key in average) {
            console.log("key", key)
            let result = average[key].reduce((acc, cur) => {
                return acc += cur;
            }, 0)
            let avg = result / average[key].length;
            if (avg >= 3) {
                goodSleep.push(key)
            }
        }
        return goodSleep;
    }

    getTodayInfo(today) {
        return this.data.filter((day) => {
            return day.date === today
        })
    }

    getBestSleeperByDay(today) {
        let todayInfo = this.getTodayInfo(today);
        let hoursInfo= todayInfo.map(user => user.hoursSlept)
        let mostSleep = Math.max(...hoursInfo)
        let bestSleep = todayInfo.filter((user) => {
           return user.hoursSlept === mostSleep;
        })
        return bestSleep               
        }

    getWorstSleeperByDay(today) {
        let todayInfo = this.getTodayInfo(today)
        let hoursInfo = todayInfo.map(user => user.hoursSlept)
        let leastSleep = Math.min(...hoursInfo)
        let worstSleep = todayInfo.filter((user) => {
            return user.hoursSlept === leastSleep
        })
        return worstSleep;
    }

    getAverageStairsClimbed(day){
        let dateArr = this.data.filter((arr) => {
            return arr.date === day; 
            }).map((arr) => {
                return arr.flightsOfStairs
            },0);
            let stairsAvg = dateArr.reduce((acc, cur) => {
                return acc += cur;
            },0)/dateArr.length; 
        return parseInt(stairsAvg.toFixed(0)); 
    }  

    getAverageSteps(day) {
        let dateArr = this.data.filter((arr) => {
            return arr.date === day;
        }).map((arr) => {
            return arr.numSteps
        }, 0);
        let stepsAvg = dateArr.reduce((acc, cur) => {
            return acc += cur;
        }, 0) / dateArr.length;
        return parseInt(stepsAvg.toFixed(0));
    } 

    getAverageMinutes(day) {
        let dateArr = this.data.filter((arr) => {
            return arr.date === day;
        }).map((arr) => {
            return arr.minutesActive;
        }, 0);
        let minutesAvg = dateArr.reduce((acc, cur) => {
            return acc += cur;
        }, 0) / dateArr.length;
        return parseInt(minutesAvg.toFixed(0));
    } 
}
        
if (typeof module !== 'undefined') {
    module.exports = AllUsers;
  }