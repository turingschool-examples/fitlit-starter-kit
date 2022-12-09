

class Sleep {
    constructor(sleepData) {
        this.sleepData = sleepData 
    }

    avgHoursSleptPerDay (iD) {
        let filteredArr = this.sleepData.filter(user => {
            return user.userID === iD
        })
        let reducedArr = filteredArr.reduce((acc, dataPoint) => {
            acc += dataPoint.hoursSlept
            return acc
        }, 0)

        return Math.round(reducedArr / filteredArr.length)
    }
    
    // method to average the sleep quality per day over all time

}

export default Sleep;