class Activity {
  constructor(activityData) {
    this.activityData = activityData;
  }

  findCurrentUserData(userId) {
    return this.activityData.filter((activityObj) => activityObj.userID === userId);
  }

  returnStairsClimbedAllUsersByDate(date)  {
    //return average num of stairs climbed for given date (all users)
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

  returnActiveMinutesByDate(userId, startDate) {
    //return active minutes on date for week
  } 

  returnAvgActiveMinutesByWeek(userId, startDate) {
    //return average active minutes for a given week 
  } 

  returnStepGoalMetByDate(userId, date) {
    //return true or false if user achieved their step goal
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