class AllUsers {
    constructor(sleepData) {
        this.sleepData = sleepData;
    }

  
    getUserWeek(day) {
        let index = this.sleepData.findIndex(object => {
            return object.date === day;
        });
    
        let weekData = this.sleepData.slice(index - 35, index + 5)
        return weekData;
        }

    getUserWeekArray(day) {
        let week = this.getUserWeek(day);
        return week.reduce((acc, obj) => {
            
                if(!acc[obj.userID]) {
                    acc[obj.userID] = []
                } 
                acc[obj.userID].push(obj.sleepQuality)
                return acc;
        }, {})
    }

    getUserWeekAverage(day) {
        let average = this.getUserWeekArray(day);
        let goodSleep = [];
        for(let key in average) {
            let result = average[key].reduce((acc, cur) => {
                return acc += cur;
            }, 0)
            console.log("result: ", result)
            let avg = result / average[key].length;
            if (avg >= 3) {
                goodSleep.push(key)
            }
        }
        console.log(goodSleep);
        return goodSleep;
    }

    getBestSleeperByDay(today) {
        let todayInfo = this.sleepData.filter((day) => {
            return day.date === today
        })
        let hoursInfo= todayInfo.map(user => user.hoursSlept)
        let mostSleep = Math.max(...hoursInfo)
        let bestSleep = todayInfo.filter((user) => {
           return user.hoursSlept === mostSleep;
        })
        return bestSleep               
        }
    }  

        
if (typeof module !== 'undefined') {
    module.exports = AllUsers;
  }