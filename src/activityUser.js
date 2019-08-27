class Activity {
    constructor(moveData) {
        this.moveData = moveData;
    }

    findUser(user) {
        return this.moveData.filter((obj) => {
            return obj.userID === user.id
        })
    }

    getMilesWalked(user, date) {
        let userInfo = this.moveData.filter((obj) => {
            return obj.userID === user.id
        })
        let dayOfSteps = userInfo.find(obj => obj.date === date);
        let milesWalked = parseFloat(((dayOfSteps.numSteps * user.strideLength)/5280).toFixed(2))
        return milesWalked

    }

    getMinutesActive(user, date) {
        let userInfo = this.moveData.filter((obj) => {
            return obj.userID === user.id
        })
        let activeToday = userInfo.find((day) => {
            return day.date === date
        })
        return activeToday.minutesActive
    }

    getAverageActivityForWeek(user, day) {
        let userInfo = this.moveData.filter((obj) => {
            return obj.userID === user.id
        })
        let targetIndex = userInfo.findIndex(obj => {
            return obj.date === day
        })
        let weekData = userInfo.slice(targetIndex - 6, targetIndex + 1);
        let average = weekData.reduce((acc, current) => {
            return acc += current.minutesActive/weekData.length
        },0)
        return parseFloat(average.toFixed(2))
    }

    returnStepGoalMet(user,day) {
        let userInfo = this.findUser(user)
        console.log("user info", userInfo)
        console.log("step goal", user.dailyStepGoal)
        let todaysSteps = userInfo.find(obj => obj.date === day)
        console.log("today steps", todaysSteps.numSteps)
        if (todaysSteps.numSteps >= user.dailyStepGoal) {
            return true
        } else {
            return false
        }
    }

    getDaysStepGoalExceeded(user) {
        let userInfo = this.findUser(user)
        let overGoal = userInfo.filter(day => {
            return day.numSteps > user.dailyStepGoal
        }).map(day => day.date)
        return overGoal
    }

    getStairClimbingRecord(user) {
        let userInfo = this.findUser(user);
        let flights = userInfo.map(day => day.flightsOfStairs)
        let mostStairs = Math.max(...flights)
        let bestClimbingDay = userInfo.filter(day => {
           return day.flightsOfStairs === mostStairs
        }).map(day => day.date)
        return bestClimbingDay
    }
}


if (typeof module !== 'undefined') {
    module.exports = Activity;
  }