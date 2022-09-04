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

    findWeeklySleepHours(userID, date) {
        const filterSleep = this.findSleepDataById(userID)
        const getDates = filterSleep.map(user => user.date)
        const dateIndex = getDates.indexOf(date)
        const weeklyRange = filterSleep.slice(dateIndex -6, dateIndex +1)

        const weeklySleepHours = weeklyRange.reduce((acc, hours) => {
            acc += hours.hoursSlept / 7
            return acc
        }, 0)
        return weeklySleepHours.toFixed(1)
    }
        
    findWeeklySleepData(userID, date) {

        const filterSleep = this.findSleepDataById(userID)
        
        const getDates = filterSleep.map(user => user.date)
        const dateIndex = getDates.indexOf(date)
        const weeklyRange = filterSleep.slice(dateIndex -6, dateIndex +1)

       return weeklyRange.reverse()
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
