class Sleep {
    constructor(sleepData) {
        this.sleepData = sleepData
    }

    findSleepDataById(userID) {
        const sleepDataById = []
        this.sleepData.forEach(user => {
            if (userID === user.userID) {
                sleepDataById.push(user)
        }
    })
        return sleepDataById
    }

    findAverageDailySleep() {
        let avgHours = this.sleepData.reduce((acc, sleep) => {
                acc += sleep.hoursSlept
            return acc
        }, 0) 
        // console.log (Math.round(avgHours) / this.sleepData.length)
        return Math.round(avgHours) / this.sleepData.length
    }
        
    findAverageSleepQuality() {
        let avgQuality = this.sleepData.reduce((acc, sleep) => {
                acc += sleep.sleepQuality
                // console.log(sleep.sleepQuality)
            return acc
        }, 0) 
        // console.log (Math.round(avgHours) / this.sleepData.length)
        return Math.round(avgQuality) / this.sleepData.length
    }

    findHoursSleptByDate(date) {
        this.sleepData.find(sleep => {
           if (sleep.date === date) {
           }
           console.log('SLEEP.HOURSSLEPT', sleep.hoursSlept)
            return sleep.hoursSlept
        })
    }

    // findSleepQualityByDate(date) {
        //this.sleepData.find(quality =>)
        // sleep.date === date
        // return sleep.quality
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
        
    // }
}

export default Sleep;
