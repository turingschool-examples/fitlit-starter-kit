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
            return sleep
        }) 
        return sleepByDate.hoursSlept
    }

    findSleepQualityByDate(date) {
        const sleepQualityByDate = this.sleepData.find(sleep => {
            sleep.date === date
            return sleep
        }) 
        return sleepQualityByDate.sleepQuality
    }

    findWeeklySleepHours() {
        // For a user, how many hours slept each day over the course of a given week (7 days) - you should be able to calculate this for any week, not just the latest week

        const weeklySleepHours = this.sleepData.reduce((acc, sleep) => {
            acc.push(sleep.hoursSlept)
            return acc
        }, [])
        console.log(weeklySleepHours)
        return weeklySleepHours


        
    
        // we are going to look at each date
        // and look at the hours slept
        // return a week worth of objects
        // return 7 dates
        // reverse / splice / map
        // we know that the last date is the 23rd
    }


    findWeeklySleepQuality() {
        //over the course of 7 days
    }


    findAvgSleepQualityForAllUsers() {
        const avgSleepQuality = this.sleepData.reduce((acc, sleep) => {
            acc += sleep.sleepQuality
            return acc
          }, 0)
          return parseFloat((avgSleepQuality / this.sleepData.length).toFixed(1))
        }
}
export default Sleep;
