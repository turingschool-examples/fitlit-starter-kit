class Activity {
    constructor(activityData) {
        this.activityData = activityData;
    }

    userStepsPerDay(id, date) {
        return this.activityData.find(user => id === user.userID && date === user.date).numSteps;
    }

    milesUserWalked(id, date, userData) {
        let userSteps = this.activityData.find(user => id === user.userID && date === user.date).numSteps;
        let userStride = userData.find(user => id === user.id).strideLength;
        return parseFloat(((userSteps * userStride) / 5280).toFixed(1)); 
    }
   
    minsUserActive(id, date) {
        return this.activityData.find(user => id === user.userID && date === user.date).minutesActive;
    }

    weeklyAvgMins(id, date) {
        let userActivity = this.activityData.filter(user => id === user.userID);
        let findIndexOfDates = userActivity.findIndex(index => date === index.date);  
        let getWeeklyAverage = userActivity.slice(findIndexOfDates, findIndexOfDates + 7)
        return getWeeklyAverage.reduce((acc, avg) => {
            return parseFloat((acc + (avg.minutesActive / 7)).toFixed(1))
        }, 0);
    }

    stepGoalMet(id, date, userData) {
        let stepsOfDay = this.activityData.find(user => id === user.userID && date === user.date).numSteps;
        let goalSteps = userData.find(user => id === user.id).dailyStepGoal;
        if (stepsOfDay >= goalSteps) {
          return true
        } else {
          return false
        }
    }
    
    overStepGoal(id, userData) {
        let userActivity = this.activityData.filter(user => id === user.userID);
        let goalSteps = userData.find(user => id === user.id).dailyStepGoal;
        let stepsAbove = userActivity.filter(user => user.numSteps > goalSteps);
        return stepsAbove.map(steps => steps.date) 
    }

    stairClimbRecord(id) {
        let userActivity = this.activityData.filter(user => id === user.userID);
        let stairsClimbed = userActivity.map(day => day.flightsOfStairs);
        return Math.max(...stairsClimbed)
         
    }
}


if (typeof module !== 'undefined') {
    module.exports = Activity;
  }