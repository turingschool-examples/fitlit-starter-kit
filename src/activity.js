const ActivityRepository = require('../src/activityRepository');

class Activity extends ActivityRepository {
    constructor(userData, userActivity, numSteps, date) {
        super(userData)
        this.userActivity = userActivity;
        this.numSteps = numSteps;
        this.date = date;
    }


    calculateMiles() {
        let userDay = this.userActivity.find(el => el.date === this.date)
        let steps = userDay.numSteps
        let strideLength = super.getUserData(userDay.userID).map(user => user.strideLength)
        let stepsAndStride = Math.floor(steps *strideLength[0])
        let miles = 5280 / stepsAndStride
        return Number(miles.toFixed(2))
    }
    
    getDailyMinutesActive() {
        let minActive = this.userActivity.find(el => el.date === this.date)
        return minActive.minutesActive
    }
    
    getWeeklyMinutesActive(id) {
        let weekActive = this.userActivity.filter(el => el.userID === id)
        let startDateIndex = weekActive.find(el => el.date === this.date)
        let startDate = weekActive.indexOf(startDateIndex)
        let weekOfActivity = weekActive.slice(startDate, 7)
        let sum = weekOfActivity.reduce((a, b) => a + b.minutesActive, 0)
        return Math.floor(sum / 7)
    }

    achieveStepGoal(id) {
      let user = this.userActivity.filter(el => el.userID === id)
      let userByDate = user.find(el => el.date === this.date)
      let stepGoal = super.getUserData(userByDate.userID).map(user => user.dailyStepGoal)
      return this.numSteps >= stepGoal ? 'step goal met!' : 'step goal not met!'
    }

    exceedStepGoal(id) {
     let stepGoal = super.getUserData(id).map(user => user.dailyStepGoal)
     return this.numSteps >= stepGoal ? 'step goal met!' : 'step goal not met!'

    }
}

if (typeof module !== 'undefined') {
    module.exports = Activity;
}

// For a specific day(specified by a date),
//     return the miles a user has walked based on their number of steps
//     (use their strideLength to help calculate this)