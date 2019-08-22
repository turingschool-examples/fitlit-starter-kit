class Activity {
  constructor(activityData, userData) {
    this.activityData = activityData;
    this.userData = userData;
  }

  findCurrentUserData(userId) {
    return this.activityData.filter((activityObj) => activityObj.userID === userId);
  }

  returnStairsClimbedAllUsersByDate(date)  {
    return this.activityData.filter((activityObj) => activityObj.date === date).reduce((activityObjA, activityObjB) => activityObjA + activityObjB.flightsOfStairs, 0);
  }

  returnStepsTakenAllUsersByDate(date) {
    //return average num of steps take for given date (all users)
  } 

  returnActiveMinutesAllUsersByDate(date) {
    //return average mins active for given date (all users)
  } 

  returnMilesWalkedByDate(userId, date) {
    //return miles walked on date for user (use stride length)
  } 

  returnActiveMinutesByDate(userId, date) {
    return this.findCurrentUserData(userId).find(elem => {
      return elem.date === date
    }).minutesActive
  } 

  returnAvgActiveMinutesByWeek(userId, startDate) {
    //return average active minutes for a given week 
  } 

  returnStepGoalMetByDate(userId, date) {
    if ((this.userData.find(elem => elem.id === userId).dailyStepGoal) <= (this.findCurrentUserData(userId).find(elem => elem.date === date).numSteps)) {
      return true;
    }
    return false; 
  } 

  returnAllDaysStepGoalExceeded(userId) {
    //return all days user exceeded step goal
  } 

  returnStairClimbingRecord(userId) {
    return this.findCurrentUserData(userId).sort((value1, value2) => {
      return value2.flightsOfStairs - value1.flightsOfStairs
    })[0].flightsOfStairs
  }
}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}