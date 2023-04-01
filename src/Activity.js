class Activity {
    constructor(userDetail, allActivityData) {
        this.userId = userDetail.id
        this.strideLength = userDetail.strideLength
        this.dailyStepGoal = userDetail.dailyStepGoal
        this.activityLogs = allActivityData.activityData.filter( data => data.userID === this.userId); 
    } 

    calculateMiles(date) {
        const selectedDay = this.activityLogs.find(log => log.date === date);
        const miles = (selectedDay.numSteps * this.strideLength) / 5280;
    
        return Math.round(miles * 10) / 10;
    }

    calculateActiveMinutes(date) {
        const dayLog = this.activityLogs.find((log) => {
            return log.date === date;
        })

        return dayLog.minutesActive;
    }


    checkStepGoalReached(date) {
        const dayDetail = this.activityLogs.find(log => log.date === date);
        const stepGoal = this.dailyStepGoal;

        if(stepGoal <= dayDetail.numSteps){
            return `Good Job! ${dayDetail.numSteps} meets your goal!`
        } else {
            return `Not quite! ${stepGoal - dayDetail.numSteps} steps to go!`
        }
    };
}

export default Activity