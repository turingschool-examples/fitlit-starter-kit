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
        const sleepByDate = this.sleepData.filter(sleep=> {
            if(sleep.date === date) {
                return sleep.hoursSlept
            }
        }) 
        
    }

    // findSleepQualityByDate(date) {
    //     this.sleepData.find(quality =>)
    //     sleep.date === date
    //     return sleep.quality
    // }

    // findWeeklyHoursSlept() {
        // over the course of 7 days
    // }


    // findWeeklySleepQuality() {
    //     over the course of 7 days
    // }


    // findAllUsersAverageSleepQuality() {
        // const usersAvgSleepQuality = this.sleepData.reduce((acc, quality) => {
        //     acc += quality.sleepQuality
        
        //     numOfElements++
        //     return acc
        //   }, 0)
        
        //   return Math.round(usersAvgSleepQuality / this.users.length)


}
export default Sleep;
