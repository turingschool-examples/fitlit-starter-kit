

class Sleep {
    constructor(sleepData) {
        this.sleepData = sleepData 
    }

    avgHoursSleptPerDay (iD) {
        const userSleepData = this.sleepData.filter(user => {
            return user.userID === iD
        })
        const totalHoursSlept = userSleepData.reduce((acc, dataPoint) => {
            acc += dataPoint.hoursSlept
            return acc
        }, 0)
        return Math.round(totalHoursSlept / userSleepData.length)
    }
    
    avgSleepQuality (iD) {
        const userSleepData = this.sleepData.filter(user => {
            return user.userID === iD
        })
        const totalSleepQuality = userSleepData.reduce((acc, dataPoint) => {
            acc += dataPoint.sleepQuality
            return acc
        }, 0)
        return Math.round(totalSleepQuality / userSleepData.length)
    }
    
    getHoursSleptOnDay(iD, date) {
        const userSleepData = this.sleepData.filter(user => {
            return user.userID === iD
        })
        const sleepDataByDate = userSleepData.filter(user => {
            return user.date === date
        })
        return sleepDataByDate[0].hoursSlept
    }

}

export default Sleep;