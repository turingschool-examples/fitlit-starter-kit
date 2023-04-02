class Activity {
    constructor(userDetail, allUserActivityData) {
        this.userId = userDetail.id;
        this.strideLength = userDetail.strideLength;
        this.dailyStepGoal = userDetail.dailyStepGoal;
        this.activityLogs = allUserActivityData.activityData.filter(data => data.userID === this.userId);
    }
    
    findMostRecentDay() {
        return this.activityLogs[0].date;
    }

    findMostRecentSteps() {
        return this.activityLogs[0].numSteps;
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

    findStepsLastSevenDays(date) {
        const selectedDayIndex = this.activityLogs.findIndex(log => log.date === date);

        const sevenDayDetail = this.activityLogs.slice(selectedDayIndex, selectedDayIndex + 7).map(log => log.numSteps);

        let lastWeekDetails = [0, 0, 0, 0, 0, 0, 0]

        sevenDayDetail.forEach((log, index) => {
            lastWeekDetails[index] = log;
        });
        return lastWeekDetails
    }

    checkGoalLastSevenDays(date) {
        const selectedDayIndex = this.activityLogs.findIndex(log => log.date === date);

        const sevenDayStepDetail = this.activityLogs.slice(selectedDayIndex, selectedDayIndex + 7).map(log => log.numSteps);
        const sevenDayGoalDetail = sevenDayStepDetail.map((daySteps) => {
            if (this.dailyStepGoal <= daySteps) {
                return 'Yes'
            } else {
                return 'No'
            }
        })

        let lastWeekDetails = ['', '', '', '', '', '', '']

        sevenDayGoalDetail.forEach((log, index) => {
            lastWeekDetails[index] = log;
        });

        return lastWeekDetails
    };
}

export default Activity