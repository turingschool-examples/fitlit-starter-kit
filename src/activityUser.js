
class Activity {
    constructor(moveData) {
        this.moveData = moveData;
    }

    findUser(user) {
        let person = this.moveData.filter((obj) => {
            return obj.userID === user
        })
        return person;
    }

    getMilesWalked(user, date) {
        let userInfo = this.findUser(user)
        let dayOfSteps = userInfo.find(obj => obj.date === date);
        let milesWalked = parseFloat(((dayOfSteps.numSteps * user.strideLength)/5280).toFixed(2))
        return milesWalked

    }

    getMinutesActive(id, date, type) {
        let userInfo = this.findUser(id)
        let activeToday = userInfo.find((day) => {
            return day.date === date
        })
        return activeToday[type]
    }

    getAverageActivityForWeek(user, day, type) {
        let userInfo = this.findUser(user)
        let targetIndex = userInfo.findIndex(obj => {
            return obj.date === day
        })
        let weekData = userInfo.slice(targetIndex - 6, targetIndex + 1);
        let average = weekData.reduce((acc, current) => {
            return acc += current[type]/weekData.length
        },0)
        console.log(average.toFixed(2))
        return parseFloat(average.toFixed(2))
    }


    getActivityForWeek(user, day, type) {
        let userInfo = this.findUser(user)
        let targetIndex = userInfo.findIndex(obj => {
            return obj.date === day
        })
        let weekData = userInfo.slice(targetIndex - 6, targetIndex + 1);
        console.log("weekData")
        return weekData[type];
    }
  
    returnStepGoalMet(user,day) {
        let userInfo = this.findUser(user)
        let todaysSteps = userInfo.find(obj => obj.date === day)
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