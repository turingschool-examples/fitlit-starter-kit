class ActivityRepository {
    constructor(activityData) {
        this.activityData = activityData;
        //
    }
    avgStepsClimbed(id, date) {
        let usersActivity = this.activityData.filter(user => id === user.userID);
        let total = usersActivity.reduce((acc, step) => {
            return (step.flightsOfStairs / usersActivity.length)
        }, 0);
        //reduce activityData with date.flightsOfStairs and return the value with Math.floor
    }

    avgStepsTaken(id, date) {
        let usersActivity = this.activityData.filter(user => id === user.userID);
    }

    avgMinutesActive(id, date) {
        let usersActivity = this.activityData.filter(user => id === user.userID);

    }
}

if (typeof module !== 'undefined') {
    module.exports = ActivityRepository;
}