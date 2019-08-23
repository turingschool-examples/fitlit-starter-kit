class Activity {
    constructor(activityData, userData, userRepository) {
        this.activityData = activityData;
        this.userData = userData;
        this.userRepository = userRepository;

    }
    milesUserWalked(date) {
        let steps = this.activityData.find(day => day.date === date).numSteps;
        return parseFloat((steps * this.strideLength / 5280).toFixed(1));
        // let stride = this.userData.strideLength;
        // console.log(stride)
        // let user = this.activityData.find(user => user.userID === id && day.date === date);
        // console.log(user)
        // let steps = this.activityData.numSteps;
        // console.log(steps)
        // return parseFloat(stride * steps /5280).toFixed(1);
    }
    //use find() to get specific day(param).numSteps from activity subset
        //return numstep * strideLength / 1mile(5280) //what is toFixed



    // minsUserActive(id, date) {
        //use find() to get specific day      (param).minutesActive from activity   subset
        //return min for that day
    // }

    weeklyAvgMins() {
      
    }

    stepGoalMet(id, date) {
        //return using find() to get specific day(param).numSteps from activity subset
        // maybe use >= dailyStepGoal in same return statement
    }

    overStepGoal() {

    }

    stairClimbRecord() {

    }
}


if (typeof module !== 'undefined') {
    module.exports = Activity;
  }