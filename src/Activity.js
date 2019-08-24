class Activity {
    constructor(activityData) {
        this.activityData = activityData;
        // this.numSteps = activityData.numSteps;
        // this.id = userData.id;
        // this.name = userData.name;
        // this.strideLength = userData.strideLength;

    }

    userStepsPerDay(id, date) {
        return this.activityData.find(user => id === user.userID && date === user.date).numSteps;
    }


    milesUserWalked(id, date, userData) {
        let userSteps = this.activityData.find(user => id === user.userID && date === user.date).numSteps;
        let userStride = userData.find(user => id === user.id).strideLength;
        return parseFloat(((userSteps * userStride) / 5280).toFixed(1));
        //the toFixed method formats a number using fixed-point notation. The param says how many numbers you see after the decimal. 
    }
   
    minsUserActive(id, date) {
        return this.activityData.find(user => id === user.userID && date === user.date).minutesActive;
    }

    // weeklyAvgMins() {
      
    // }

    stepGoalMet(id, date, userData) {
        return this.activityData.find(user => id === user.userID && date === user.date).numSteps >= userData.dailyStepGoal
        // let userStepsOfDay = this.activityData.find(user => id === user.userID && date === user.date).numSteps;
        // let userStepGoal = userData.find(user => id === user.id).dailyStepGoal;
        // if (userStepsOfDay >= userStepGoal) {
        //   return true
        // } else {
        //   return false
        // }
    }
    //return using find() to get specific day(param).numSteps from activity subset
    // maybe use >= dailyStepGoal in same return statement

    

    // overStepGoal() {

    // }

    // stairClimbRecord() {

    // }
}


if (typeof module !== 'undefined') {
    module.exports = Activity;
  }