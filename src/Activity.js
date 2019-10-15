class Activity {
  constructor(activityData, userData) {
    this.activityData = activityData;
    this.userData = userData;
    this.singleUser = {};
    this.singleDay = {};
  }

  findOneUser(id) {
    return this.activityData.filter( user => user.userID === id);
  }

  findSingleUserData(id) {
    let user = this.userData.filter( user => user.id === id);
    return this.singleUser = user[0];
  }

  findSingleDayInfo(id, date) {
    let singleDay = this.activityData.filter(element => element.userID === id && element.date === date);
    return this.singleDay = singleDay[0];
  }

  findDailyMiles(id, date) {
    let user = this.findSingleUserData(id);
    let day = this.findSingleDayInfo(id, date)
    let stepsPerMi = 5280 / user.strideLength;
    return +((day.numSteps / stepsPerMi).toFixed(2))
  }

  findMinutesActive(id, date) {
    this.findSingleDayInfo(id, date);
    return this.singleDay.minutesActive
  }

  findAWeek(id, date) {
    let singleUser = this.findOneUser(id);
    let latestDay;
    singleUser.forEach((night, index) => {
      night.date === date ? (latestDay = index) : null 
    });
    let weekly = singleUser.slice(latestDay - 6, latestDay +1)
    return weekly
  }

  findWeeklyAvgActiveMins(id, date) {
    let week = this.findAWeek(id, date);
    let activeMins = week.reduce((totalMin, dailyMin) => {
      totalMin += dailyMin.minutesActive
      return totalMin
    }, 0)
    return +((activeMins/week.length).toFixed(0))
  }

  findStepGoal(id) {
    let user = this.findSingleUserData(id);
    return user.dailyStepGoal
  }

  determineStepGoalCompletion(id, date) {
    this.findSingleUserData(id);
    this.findSingleDayInfo(id, date);
    return this.singleDay.numSteps >= this.singleUser.dailyStepGoal ? true : false
  }

  findExceededStepGoal(id) {
    let stepGoal = this.findSingleUserData(id).dailyStepGoal;
    return this.findOneUser(id).filter(day => day.numSteps >= stepGoal)
  }

  findStairClimbRecord(id) {
    return Math.max(...this.findOneUser(id).map(day => day.flightsOfStairs))
  }

  findAvgStairsClimbedForAll(date) {
    let day = this.activityData.filter(element => element.date === date)
    let allStairs = day.reduce((flights, userClimbed) => {
      flights += userClimbed.flightsOfStairs
      return flights
    }, 0) 
    return allStairs / day.length
  }

  findAvgNumStepsForAll(date) {
    let day = this.activityData.filter(element => element.date === date)
    let totalSteps = day.reduce((steps, usersSteps) => {
      steps += usersSteps.numSteps
      return steps
    }, 0) 
    return +((totalSteps / day.length).toFixed())
  }

  findAvgActiveMinsForAll(date) {
    let day = this.activityData.filter(element => element.date === date)
    let totalMins = day.reduce((allMins, activity) => {
      allMins += activity.minutesActive
      return allMins
    }, 0) 
    return +((totalMins / day.length).toFixed())
  }

  //**METRIC TO FIND DAY(S) WITH MOST MINUTES ACTIVE */

  findMostMinsActive(id) {
    let num = Math.max(...this.findOneUser(id).map(day => day.minutesActive))
    return this.findOneUser(id).filter(day => day.minutesActive === num)
  }


}

if (typeof module !== "undefined") {
  module.exports = Activity;
}