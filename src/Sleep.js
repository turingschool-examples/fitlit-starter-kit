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
    }




export default Sleep