class Activity {
    constructor(userData) {
        this.userData = userData; 
        // console.log('activity user',userData)
    }

    findUserByActivityByDate(userId, userData) {
        let userActivity = this.userData.activityData.find((activity) => activity.userId === userId && activity.date === userData.date)
        return userActivity
    }
   

    calculateMiles(userActivity, strideLength) {
        const miles = (userActivity.numSteps * strideLength) / 5280
        return miles 

    }

    calculateActiveMinutes(userActivity) {
        return userActivity.minutesActive

    }

    // calculateTotalSteps(userActivity) {
    //     return userActivity.numSteps.reduce((acc, curr) => {
            
    checkStepGoalReached(date) {
        const dayDetail = this.activityLogs.find(log => log.date === date);
        const stepGoal = this.dailyStepGoal;

    checkWeeklyGoal(userActivity, dailyStepGoal) {
        if(userActivity.numSteps < dailyStepGoal) {
            "False: goal not met"
        } else {
            return `Good job! ${userActivity.numSteps} meets your goal!`
        }    
    }
}

export default Activity

// {userID":1,
// "date":"2023/03/24",
// "numSteps":7362,
// "minutesActive":261,
// "flightsOfStairs":26 },
