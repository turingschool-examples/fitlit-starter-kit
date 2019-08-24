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

    weeklyAvgMins(id, date) {
        let userActivity = this.activityData.filter(user => id === user.userID);
        //   console.log(userActivity)
        let findIndexOfDates = userActivity.findIndex(index => date === index.date);  
        //   console.log(findIndexOfDates)
          //set variable to all userId var. find() or findIndex() of all dates
        let getWeeklyAverage = userActivity.slice(findIndexOfDates, findIndexOfDates + 7)
        return getWeeklyAverage.reduce((acc, avg) => {
            return parseFloat((acc + (avg.minutesActive / 7)).toFixed(1))
        }, 0);
      //set variable to all userId var.slice() to get certain dates
      //return minutesActive with reduce? us toFixed to get decimal
    }

    stepGoalMet(id, date, userData) {
        return this.activityData.filter(user => id === user.userID && date === user.date).numSteps >= userData.dailyStepGoal
        // let userStepsOfDay = this.activityData.find(user => id === user.userID && date === user.date).numSteps;
        // let userStepGoal = userData.find(user => id === user.id).dailyStepGoal;
        // if (userStepsOfDay >= userStepGoal) {
        //   return true
        // } else {
        //   return false
        // }
    }
    
    // overStepGoal(id, userData) {
        //set var to get all userIds with filer
        //set var to userData.dailyStepGaol
        //return with var of all userId's with filter()?compare numSteps to userData.dailyStepGoal
    // }

    // stairClimbRecord(id) {

    // }
}


if (typeof module !== 'undefined') {
    module.exports = Activity;
  }