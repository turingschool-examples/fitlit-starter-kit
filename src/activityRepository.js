class ActivityRepository {
    constructor(activityData) {
        this.activityData = activityData;
    }

    avgStepsClimbed(date) {
        let usersActivity = this.activityData.filter(user => date === user.date);
        let total = usersActivity.reduce((acc, stair) => {
            return acc + (stair.flightsOfStairs / usersActivity.length)
        }, 0);

        return Math.floor(total)
    }

    avgStepsTaken(date) {
        let usersActivity = this.activityData.filter(user => date === user.date);
        let total = usersActivity.reduce((acc, step) => {
            return acc + (step.numSteps / usersActivity.length)
        }, 0);

        return Math.floor(total)
    }

    avgMinutesActive(date) {
        let usersActivity = this.activityData.filter(user => date === user.date);
        return usersActivity.reduce((acc, minutes) => {
            return parseFloat((acc + (minutes.minutesActive/ usersActivity.length)).toFixed(1));
        }, 0);
    }
}

if (typeof module !== 'undefined') {
    module.exports = ActivityRepository;
}