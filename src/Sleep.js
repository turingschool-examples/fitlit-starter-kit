class Sleep {
    constructor(sleepData) {
        this.sleepData = sleepData
    }

    calcAvgSleepPerDay(id) {
        const result = this.sleepData.filter(sleepLog => sleepLog.userID === id).reduce((total, sleepLog, _, arr ) => total + sleepLog.hoursSlept / arr.length ,0)
        return +result.toFixed(1)
    }
    }




export default Sleep