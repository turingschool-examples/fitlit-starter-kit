const ActivityRepository = require('../src/activityRepository');

class Activity extends ActivityRepository {
  constructor(userData, userActivity, numSteps) {
    super(userData)
    this.userActivity = userActivity;
    this.numSteps = numSteps;
  }

  calculateMiles(id, date="2019/06/15") {
    let userDay = this.userActivity.find(el => el.date === date && user.userID === id)
    let steps = userDay.numSteps
    let strideLength = super.getUserData(userDay.userID).map(user => user.strideLength)
    let stepsAndStride = Math.floor(steps * strideLength[0])
    let miles = 5280 / stepsAndStride
    return Number(miles.toFixed(2))
  }
    
  getDailyMinutesActive() {
    let minActive = this.userActivity.find(el => el.date === this.date)
    return minActive.minutesActive
  }
    
  getWeeklyMinutesActive(id) {
    let weekActive = this.userActivity.filter(el => el.userID === id)
    let startDateIndex = weekActive.find(el => el.date === this.date)
    let startDate = weekActive.indexOf(startDateIndex)
    let weekOfActivity = weekActive.slice(startDate, 7)
    let sum = weekOfActivity.reduce((a, b) => a + b.minutesActive, 0)
    return Math.floor(sum / 7)
  }

  achieveStepGoal(id) {
    let user = this.userActivity.filter(el => el.userID === id)
    let userByDate = user.find(el => el.date === this.date)
    let stepGoal = super.getUserData(userByDate.userID).map(user => user.dailyStepGoal)
    return this.numSteps >= stepGoal ? 'step goal met!' : 'step goal not met!'
  }

  exceedStepGoal(id) {
    let userStepGoal = super.getUserData(id).reduce(function (user, cV) {
      return user += cV.dailyStepGoal
    }, 0)
    let exceededGoalDays = this.userActivity.filter(user => user.numSteps >= userStepGoal).filter(user => user.userID === id)
    return exceededGoalDays
  }

  findStairClimbingRecord(id) {
    let user = this.userActivity.filter(el => el.userID === id)
    let stairClimbingRecord = user.sort((a, b) => b.flightsOfStairs - a.flightsOfStairs)
    return stairClimbingRecord[0]
  }

  getAllUsersStairClimbingAverage() {
    let userByDate = this.userActivity.filter(el => el.date === this.date)
    let users = userByDate.reduce(function (user, cV) {
      return user += cV.flightsOfStairs 
    }, 0) 
    return Math.floor(users / userByDate.length)
  }

  getAllUsersStepsAverage() {
    let userByDate = this.userActivity.filter(el => el.date === this.date)
    let users = userByDate.reduce(function (user, cV) {
      return user += cV.numSteps
    }, 0)
    return Math.floor(users / userByDate.length)
  }

  getAllUsersMinutesActiveAverage() {
    let userByDate = this.userActivity.filter(el => el.date === this.date)
    let users = userByDate.reduce(function (user, cV) {
      return user += cV.minutesActive
    }, 0)
    return Math.floor(users / userByDate.length)
  }

  daysStepGoalNotMet(id) {
    let userStepGoal = super.getUserData(id).reduce(function (user, cV) {
      return user += cV.dailyStepGoal
    }, 0)
    let exceededGoalDays = this.userActivity.filter(user => user.numSteps <= userStepGoal).filter(user => user.userID === id)
    return exceededGoalDays
  }
}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}
