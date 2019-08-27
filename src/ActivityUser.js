class ActivityUser{
  constructor(activityTestData, userData) {
    this.activityTestData = activityTestData
    this.userData = userData;
  }

  findActivityInfo(id) {
    return this.activityTestData.filter(user => user.userID === id);
  }

  findUserStrideLength(id) {
    return this.userData.find(user => {
      return user.id === id
    }).strideLength;
  }
  
  calculateMilesWalked(date, id) {
    let user = this.findActivityInfo(id).find(user => user.date === date)
    let steps = user.numSteps
    let strideLength = this.findUserStrideLength(id)
    let totalFeet = Math.floor(steps * strideLength)
    let miles = totalFeet / 5280

    return Number(miles.toFixed(2))
 } 

  findMinutesActive(date, id) {
    return this.activityTestData.find(user => {
      return user.date === date && user.userID === id
    }).minutesActive
  }

  findAverageMinutesActive(startDate, endDate, id) {
    let totalTime = this.activityTestData
    .filter(user => user.userID === id)
    .filter(day => day.date >= startDate && day.date <= endDate)
    .map(day => day.minutesActive)
    .reduce((acc, time) => {
      return acc + time
    }, 0)
    return Math.round((totalTime / 7) * 10) / 10
  }

  getGoal(id) {
    return this.userData.find(user => {
      return user.id === id
    }).dailyStepGoal;
  }

  calculateStepGoal(date, id) {
    let stepGoal = this.userData.find(user => {
      return user.id === id
    }).dailyStepGoal;
    let dailySteps = this.activityTestData.find(user => {
      return user.date === date && user.userID === id
    }).numSteps

    let difference = stepGoal - dailySteps

    return dailySteps >= stepGoal ? 'You have achieved your daily goal!' : `${difference} more steps to go!`

  }

  findExceptionalDays(id) {
    let stepGoal = this.userData.find(user => {
      return user.id === id
    }).dailyStepGoal;
    var exceptionalDays = this.activityTestData.filter(user => user.userID === id)
    .filter(day => day.numSteps > stepGoal);

    return exceptionalDays;
  }

  findGreatestClimb(id) {
    let greatestClimb = this.findActivityInfo(id).map(day => day.flightsOfStairs)
    .reduce((acc, climb) => {
      return (climb < acc) ? acc : climb
    })
   return greatestClimb;
  }





} //<<<-----end of class block



if (typeof module !== 'undefined') {
  module.exports = ActivityUser;
}