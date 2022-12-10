

class Sleep {
    constructor(sleepData) {
        this.sleepData = sleepData 
    };

    getUserData(iD) {
        const userSleepData = this.sleepData.filter(user => {
            return user.userID === iD
        })
        return userSleepData;
    }

    avgHoursSleptPerDay (iD) {
        const userSleepData = this.getUserData(iD);
        const totalHoursSlept = userSleepData.reduce((acc, dataPoint) => {
            acc += dataPoint.hoursSlept
            return acc
        }, 0)
        return Math.round(totalHoursSlept / userSleepData.length)
    };
    
    avgSleepQuality (iD) {
        const userSleepData = this.getUserData(iD);
        const totalSleepQuality = userSleepData.reduce((acc, dataPoint) => {
            acc += dataPoint.sleepQuality
            return acc
        }, 0)
        return Math.round(totalSleepQuality / userSleepData.length)
    };
    
    getHoursSleptOnDay(iD, date) {
        const userSleepData = this.sleepData.filter(user => {
            return user.userID === iD && user.date === date
        })
        return userSleepData[0].hoursSlept
    };

    getSleepQualityOnDay(iD, date) {
        const userSleepData = this.sleepData.filter(user => {
            return user.userID === iD && user.date === date
        })
        return userSleepData[0].sleepQuality
    };

    getHoursSleptOverWeek(iD, startDate) {
        const userSleepData = this.getUserData(iD);
        const obj = userSleepData.find(dataPoint => {
            return dataPoint.date === startDate
        })
        let index = userSleepData.indexOf(obj)
        const hoursSleptPerWeek = userSleepData.splice(index, 7)
        // console.log("in method:", hoursSleptPerWeek)
        return hoursSleptPerWeek.map(data => {
            return data.hoursSlept
        })
    };

    getSleepQualityOverWeek(iD, startDate) {
        const userSleepData = this.getUserData(iD);
        const obj = userSleepData.find(dataPoint => {
            return dataPoint.date === startDate
        })
        let index = userSleepData.indexOf(obj)
        const sleepQualityPerWeek = userSleepData.splice(index, 7)
        return sleepQualityPerWeek.map(data => {
            return data.sleepQuality
        })
    };


    getSleepQualityAllUsers() {
        const avgSleepQualityAllUsers = this.sleepData.reduce((acc, dataPoint) => {
            acc += dataPoint.sleepQuality
            return acc
        }, 0)
        return Number((avgSleepQualityAllUsers / this.sleepData.length).toFixed(1));
    };
}

export default Sleep;