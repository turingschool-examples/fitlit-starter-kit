class Sleep {
    constructor(sleepData) {
        this.sleepData = sleepData
    }

    findSleepDataById(userID) {
        const sleepDataById = this.sleepData.filter(user => {
            if (userID === user.userID) {
                return user
            }
        }) 
        return sleepDataById
    }

    findAverageDailySleep(userID) {
        const filterSleep = this.findSleepDataById(userID)

        const avgHours = filterSleep.reduce((acc, sleep) => {
            acc += sleep.hoursSlept
            return acc
        }, 0) 
        return parseFloat((avgHours / filterSleep.length).toFixed(1))
    }

        
    findAverageSleepQuality(userID) {
        const filterSleep = this.findSleepDataById(userID)

        const avgQuality = filterSleep.reduce((acc, sleep) => {
            acc += sleep.sleepQuality
            return acc
        }, 0)
        return parseFloat((avgQuality / filterSleep.length).toFixed(1))
    }

    findHoursSleptByDate(date) {
        const sleepByDate = this.sleepData.find(sleep => {
            sleep.date === date
            return sleep.hoursSlept
        }) 
        return sleepByDate.hoursSlept
    }

    findSleepQualityByDate(date) {
        const sleepQualityByDate = this.sleepData.find(sleep => {
            sleep.date === date
            return sleep.sleepQuality
        }) 
        return sleepQualityByDate.sleepQuality
    }

    findWeeklySleepHours() {
        
    }


    findWeeklySleepQuality() {
        //over the course of 7 days
    }


    findAvgSleepQualityForAllUsers() {
        const avgSleepQuality = this.sleepData.reduce((acc, sleep) => {
            acc += sleep.sleepQuality
            return acc
          }, 0)
          console.log(this.sleepData.length)
          return parseFloat((avgSleepQuality / this.sleepData.length).toFixed(1))
        }


}
export default Sleep;
