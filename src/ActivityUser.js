class ActivityUser{
  constructor(activityTestData, userData) {
    this.activityTestData = activityTestData
    this.userData = userData;
  }


  findUserStrideLength(id) {
    return this.userData.find(user => {
      return user.id === id
    }).strideLength;
  }

  findActivityInfo(id) {
    return this.activityTestData.filter(user => user.userID === id);
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

  calculateStepGoal(date, user) {
    
  }


  getDailyStepCount(id, date="2019/06/15") {
    let stepCount = this.activityTestData.find(user => user.userID === id && user.date === date)
   return stepCount.numSteps
}

}

if (typeof module !== 'undefined') {
  module.exports = ActivityUser;
}