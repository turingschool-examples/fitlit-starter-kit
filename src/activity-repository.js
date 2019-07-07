class ActivityRepository {
    constructor(data) {
        this.data = data;    }

    returnAvgStairs(date) {
        let dateArray = this.data.filter((user) => user.date === date);
        let avgStairs = dateArray.reduce((acc, day) => {
            return acc += day.flightsOfStairs;
        }, 0) / dateArray.length;
        return Math.ceil(avgStairs);
    }

    returnAvgSteps(date) {
        let dateArray = this.data.filter((user) => user.date === date);
        let avgSteps = dateArray.reduce((acc, day) => {
            return acc += day.numSteps;
        }, 0) / dateArray.length;
        return Math.ceil(avgSteps);
    }

    returnAvgMins(date) {
        let dateArray = this.data.filter((user) => user.date === date);
        let avgMins = dateArray.reduce((acc, day) => {
            return acc += day.minutesActive;
        }, 0) / dateArray.length;
        return Math.ceil(avgMins);
    }

    returnTopStepper(date) {
        let currentDayUsers = this.data.filter(day => day.date === date)
        let currentTopStepper = currentDayUsers.reduce((acc, user) => {
        if(!acc.numSteps) {
            acc.numSteps = 0;
        }
        if(user.numSteps > acc.numSteps) {
            acc = user;
        }
        return acc;
        }, {})
        return currentTopStepper
    }
}

if (typeof module !== 'undefined') {
    module.exports = ActivityRepository;
}