const User = require('../src/user');

class Activity extends User {
    constructor(object, userActivity, numSteps, date) {
        super(object)
        this.userActivity = userActivity;
        this.numSteps = numSteps;
        this.date = date;
    }

    calculateMiles() {
        let userDay = this.userActivity.find(el => el.date === this.date)
        var stridesAndSteps = Math.floor(super.getStrideLength() * userDay.numSteps)
        var miles = 5280 / stridesAndSteps
        return miles.toFixed(2)
}

    getDailyMinutesActive() {
        let minActive = this.userActivity.find(el => el.date === this.date)
        return minActive.minutesActive
    }
}

if (typeof module !== 'undefined') {
    module.exports = Activity;
}

// For a specific day(specified by a date),
//     return the miles a user has walked based on their number of steps
//     (use their strideLength to help calculate this)