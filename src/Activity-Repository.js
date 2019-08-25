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
    //need to return average
  } 

  returnActiveMinutesAllUsersByDate(date) {
    return this.activityData.filter((activityObj) => activityObj.date === date).reduce((activityObjA, activityObjB) => activityObjA + activityObjB.minutesActive, 0);
    //need to return average
  } 

  returnMilesWalkedByDate(user, date) {
    let numOfSteps = this.activityData.find(activityObj => activityObj.userID === user.id && activityObj.date === date).numSteps;
    return parseInt(((numOfSteps * user.strideLength) / 5280).toFixed(0));
  } 

  returnActiveMinutesByDate(userId, date) {
    return this.findCurrentUserData(userId).find(elem => {
      return elem.date === date
    }).minutesActive
  } 
  returnNumberOfStepsByDate(userID, date) {
    return this.findCurrentUserData(userID).find((element) => {
      return element.date === date;
    }).numSteps;
  }

  returnStairsClimbedByDate(userID, date) {
    return this.findCurrentUserData(userID).find((element) => {
      return element.date === date;
    }).flightsOfStairs;
  }

  returnAvgActiveMinutesByWeek(userId, date) {
    let index = this.findCurrentUserData(userId).findIndex((activityObj) => activityObj.date === date);
    let userActiveMins = this.findCurrentUserData(userId).map(activityObj => activityObj.minutesActive).splice(index - 7, 7);
    return parseInt(userActiveMins.reduce((totalMins, dailyActiveMins) => {
      totalMins += dailyActiveMins;
      return totalMins;
    }, 0) / 7);
  } 

  returnAvgNumberOfStepsByWeek(userId, date) {
    let index = this.findCurrentUserData(userId).findIndex((activityObj) => activityObj.date === date);
    let userNumberOfSteps = this.findCurrentUserData(userId).map(activityObj => activityObj.numSteps).splice(index - 7, 7);
    return parseInt(userNumberOfSteps.reduce((totalSteps, dailySteps) => {
      totalSteps += dailySteps;
      return totalSteps;
    }, 0) / 7);
  } 

  returnAvgStairsClimbedByWeek(userId, date) {
    let index = this.findCurrentUserData(userId).findIndex((activityObj) => activityObj.date === date);
    let userStairsClimbed = this.findCurrentUserData(userId).map(activityObj => activityObj.flightsOfStairs).splice(index - 7, 7);
    console.log(userStairsClimbed)
    return parseInt(userStairsClimbed.reduce((totalStairs, dailyStairs) => {
      totalStairs += dailyStairs;
      console.log(totalStairs)
      return totalStairs;
    }, 0) / 7);
  } 

  checkStepGoalMetByDate(user, date) {
    if ((user.dailyStepGoal) <= (this.findCurrentUserData(user.id).find(elem => elem.date === date).numSteps)) {
      return true;
    }
    return false; 
  } 

  returnAllDaysStepGoalExceeded(user) {
    return this.activityData.filter((activityObj) => activityObj.userID === user.id && activityObj.numSteps > user.dailyStepGoal).map(activityObj => activityObj.date);
  } 

  returnStairClimbingRecord(userId) {
    return this.findCurrentUserData(userId).sort((value1, value2) => {
      return value2.flightsOfStairs - value1.flightsOfStairs
    })[0].flightsOfStairs
  }

  checkUserActivityStatusByDate(userID, date) {
    if ((this.findCurrentUserData(userID).find(day => {
      return day.date === date;
    }).minutesActive) >= (90)) {
      return true;
    }
    return false;
  }


}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}
