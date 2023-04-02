class Activity {
    constructor(userDetail, allUserActivityData) {
        this.userId = userDetail.id;
        this.strideLength = userDetail.strideLength;
        this.dailyStepGoal = userDetail.dailyStepGoal;
        this.activityLogs = allUserActivityData.activityData.filter(data => data.userID === this.userId);
    }

    findMostRecentDay() {
        return this.activityLogs[this.activityLogs.length - 1].date;
    }

    findMostRecentSteps() {
        return this.activityLogs[this.activityLogs.length - 1].numSteps;
    }

    calculateMiles(date) {
        const selectedDay = this.activityLogs.find(log => log.date === date);
        const miles = (selectedDay.numSteps * this.strideLength) / 5280;

        return Math.round(miles * 10) / 10;
    }

    findActiveMinutes(date) {
        const dayLog = this.activityLogs.find((log) => {
            return log.date === date;
        });
        return dayLog.minutesActive;
    }

    checkStepGoalReached(date) {
        const dayDetail = this.activityLogs.find(log => log.date === date);
        const stepGoal = this.dailyStepGoal;

        if (stepGoal <= dayDetail.numSteps) {
            return `Yes! ${dayDetail.numSteps} steps meets your goal!`
        } else {
            return `Not quite! ${stepGoal - dayDetail.numSteps} steps to go!`
        }
    };

    findStepsLastSevenDays() {
        const sevenDayDetail = this.activityLogs.slice(-7).map(log => log.numSteps);

        return sevenDayDetail
    }

    checkGoalLastSevenDays() {
        const sevenDayDetail = this.findStepsLastSevenDays() 

        const sevenDayGoalDetail = sevenDayDetail.map((daySteps) => {
            if (this.dailyStepGoal <= daySteps) {
                return 'Yes'
            } else {
                return 'No'
            }
        })
        return sevenDayGoalDetail
    };
}

export default Activity