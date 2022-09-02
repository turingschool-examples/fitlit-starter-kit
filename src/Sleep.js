class Sleep {
    constructor(sleepData, userID) {
        this.sleepData = sleepData
        this.userID = userID
    }

    findSleepDataById(userID) {
        const sleepDataById = this.sleepData.filter(user => {
            if (userID === user.userID) {
                return user
            }
        }) 
        // console.log('HEY', sleepDataById) => array of objects
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

    findHoursSleptByDate(userID, date) {
        const filterSleep = this.findSleepDataById(userID)

        const sleepHoursByDate = filterSleep.find(user => user.date === date)
        return sleepHoursByDate.hoursSlept
    }

    findSleepQualityByDate(userID, date) {
        const filterSleep = this.findSleepDataById(userID)

        const sleepQualityByDate = filterSleep.find(user => user.date === date) 
        return sleepQualityByDate.sleepQuality
    }

    findWeeklySleepHours() {
        // For a user, how many hours slept each day over the course of a given week (7 days) - you should be able to calculate this for any week, not just the latest week

        const weeklySleepHours = this.sleepData.reduce((acc, sleep) => {
            acc.push(sleep.hoursSlept)
            return acc
        }, [])
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
