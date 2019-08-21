class Sleep {
    constructor(userSleepInfo) {
        this.userSleepInfo = userSleepInfo
    }
    
    getAverageSleepInformation(sleepProperty) {
        let allSleepData = this.userSleepInfo.reduce((accumulator, userObj) => {
            accumulator += userObj[sleepProperty]
            return accumulator
        }, 0)
        let average = allSleepData / this.userSleepInfo.length
        average = Number(average.toFixed(2))
        return average
    }

    getSleepDataByDate(date, sleepProperty) {
       let dateObj = this.userSleepInfo.find(sleepInfo => sleepInfo.date === date)
       return dateObj[sleepProperty]
    }

}

if (typeof module !== 'undefined') {
    module.exports = Sleep;
}

