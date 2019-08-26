class Sleep {
    constructor(sleepData) {
        this.sleepData = sleepData;
    }

    findUser(id) {
        return this.sleepData.filter(user => {
            return user.userID === id;
        });   
    }

    getAverageHours(id) {
        let avgHoursSlept = this.findUser(id).map(element => {
            return element.hoursSlept}).reduce((acc, currentVal) => {
                return acc+=currentVal
            },0)/this.findUser(id).length;
            return Math.floor(avgHoursSlept);
    }

    getAverageSleepQuality(id) {
        let avgQuality = this.findUser(id).map(element => {
            return element.sleepQuality}).reduce((acc, currentVal) => {
                return acc+=currentVal
            },0)/this.findUser(id).length;
            return parseInt(avgQuality.toFixed(0));
    }

    getHoursForDay(id, date) {
        console.log(this.findUser(id).find(user => user.date === date).hoursSlept.toFixed(0));
        return this.findUser(id).find(user => user.date === date).hoursSlept.toFixed(0);

    }

    getQualityForDay(id, date) {
        return this.findUser(id).find(user => user.date === date).sleepQuality.toFixed(0);
    }

    getSleepOverWeek(id, day) {
        let targetData = this.findUser(id);
        let index = targetData.findIndex(object => {
            return object.date === day;
        });
        let weekData = targetData.slice(index - 6, index + 1).map(arr => {
            return ` ${arr.date} : ${arr.hoursSlept} `;
        })
        return weekData;
    }

    getSleepQualityOverWeek(id, day) {
        let targetData = this.findUser(id);
        let index = targetData.findIndex(object => {
            return object.date === day;
        })
        let weekInfo = targetData.slice(index - 6, index + 1).map(arr => {
            return ` ${arr.date} : ${arr.sleepQuality} `
        })
        return weekInfo;
    }

    getUserHoursWeekAverage(id, day) {
        let targetData = this.findUser(id);
        let index = targetData.findIndex(object => {
            return object.date === day;
        });
        let week = targetData.slice(index - 6, index + 1).map(arr => {
            return arr.hoursSlept;
        });
        let weekAvg = week.reduce((arr, curr) => {
            return arr += curr;
        }, 0)/week.length;
        return parseInt(weekAvg.toFixed(0));
    }

    getUserQualityWeekAverage(id, day) {
        let targetData = this.findUser(id);
        let index = targetData.findIndex(object => {
            return object.date === day;
        });
        let week = targetData.slice(index - 6, index + 1).map(arr => {
            return arr.sleepQuality;
        });
        let weekAvg = week.reduce((arr, curr) => {
            return arr += curr;
        }, 0) / week.length;
        return parseInt(weekAvg.toFixed(0));
    }
}

if (typeof module !== 'undefined') {
    module.exports = Sleep;
  }