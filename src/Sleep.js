class Sleep {
    constructor(sleepData) {
        this.sleepData = sleepData
    }

    calcAvgSleepPerDay(id) {
        const result = this.sleepData.filter(sleepLog => sleepLog.userID === id).reduce((total, sleepLog, _, arr ) => total + sleepLog.hoursSlept / arr.length ,0)
        return +result.toFixed(1)
    }

    calcAvgSleepQualityPerDay(id) {
        const result = this.sleepData.filter(sleepLog => sleepLog.userID === id).reduce((total, sleepLog, _, arr ) => total + sleepLog.sleepQuality / arr.length ,0)
        return +result.toFixed(1)
    }

    returnHoursSleptByDate(id,date){
        return this.sleepData.find(sleepLog => sleepLog.userID === id && sleepLog.date === date).hoursSlept
    }

    returnSleepQualityByDate(id,date){
        return this.sleepData.find(sleepLog => sleepLog.userID === id && sleepLog.date === date).sleepQuality
    }

    returnHoursSleptByWeek(id, date) {
        const userSleepInfo = this.sleepData.filter(sleepLog => sleepLog.userID === id)
        const hours = userSleepInfo.map(el => el.hoursSlept)
        const dates  = userSleepInfo.map(el => el.date)
        const index = userSleepInfo.findIndex(el => el.date === date && el.userID === id)
        if (!hours[index + 6]) {
            return {
              count: hours.slice(-7),
              label: 'Hours Slept',
              dates: dates.slice(-7)
            }
        }
        return {
          count: hours.slice(index, index + 7),
          label: 'Hours Slept',
          dates: dates.slice(index, index + 7)
        }
    }

    returnSleepQualityByWeek(id, date) {
        const userSleepInfo = this.sleepData.filter(sleepLog => sleepLog.userID === id)
        const quality = userSleepInfo.map(el => el.sleepQuality)
        const dates  = userSleepInfo.map(el => el.date)
        const index = userSleepInfo.findIndex(el => el.date === date && el.userID === id)
        if (!quality[index + 6]) {
            return {
              count: quality.slice(-7),
              label: 'Sleep Quality',
              dates: dates.slice(-7)
            }
        }
        return {
          count: quality.slice(index, index + 7),
          label: 'Sleep Quality',
          dates: dates.slice(index, index + 7)
        }
    }

    returnAvgSleepQualityForAllUsers() {
        const result = this.sleepData.reduce((total, sleepLog, _, arr ) => total + sleepLog.sleepQuality / arr.length ,0)
        return +result.toFixed(1)
    }
    }




export default Sleep