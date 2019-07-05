const ActivityRepository = require('../src/activityRepository');

class Activity extends ActivityRepository {
    constructor(userData, userActivity, numSteps, date) {
        super(userData)
        // console.log(userData)
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
    
    getWeeklyMinutesActive() {
        var week = super.object.reverse()
        // .slice(0, 7).map(el => el.minutesActive).reduce((a, b) => a+b)
        // return Math.floor(week / 7)
    }
}
//         let userDay = 
//         // let userDay = object.find(el => el.date === this.date)
//         // var stridesAndSteps = Math.floor(super.getStrideLength() * userDay.numSteps)
//         // var miles = 5280 / stridesAndSteps
//         // return miles.toFixed(2)

if (typeof module !== 'undefined') {
    module.exports = Activity;
}

// For a specific day(specified by a date),
//     return the miles a user has walked based on their number of steps
//     (use their strideLength to help calculate this)