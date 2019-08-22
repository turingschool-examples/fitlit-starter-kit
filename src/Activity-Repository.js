class Activity {
  constructor(activityData) {
    this.activityData = activityData;
  }

  findCurrentUserData(userId) {
    return this.activityData.filter((activityObj) => activityObj.userID === userId);
  }

  returnStairsClimbedAllUsersByDate(date)  {
    return this.activityData.filter((activityObj) => activityObj.date === date).reduce((activityObjA, activityObjB) => activityObjA + activityObjB.flightsOfStairs, 0);
  }

  returnStepsTakenAllUsersByDate(date) {
    return this.activityData.filter((activityObj) => activityObj.date === date).reduce((activityObjA, activityObjB) => activityObjA + activityObjB.numSteps, 0);
  } 

  returnActiveMinutesAllUsersByDate(date) {
    return this.activityData.filter((activityObj) => activityObj.date === date).reduce((activityObjA, activityObjB) => activityObjA + activityObjB.minutesActive, 0);
  } 

  returnMilesWalkedByDate(user, date) {
    let numOfSteps = this.activityData.find(activityObj => activityObj.userID === user.id && activityObj.date === date).numSteps;
    return parseInt(((numOfSteps * user.strideLength) / 5280).toFixed(0));
  } 

  returnActiveMinutesByDate(userId, startDate) {
    //return active minutes on date for week
  } 

  returnAvgActiveMinutesByWeek(userId, startDate) {
    //return average active minutes for a given week 
  } 

  returnDatesStepGoalMet(user) {
    return this.activityData.filter((activityObj) => activityObj.userID === user.id && activityObj.numSteps > user.dailyStepGoal).map(activityObj => activityObj.date );
  } 

  returnAllDaysStepGoalExceeded(userId) {
    //return all days user exceeded step goal
  } 

  returnStairClimbingRecord(userId) {
    //return all time stair climbing record
  }
}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}