if (typeof module !=='undefined'){
  ActivityRepository =require('../src/activityRepository')
}
class Activity extends ActivityRepository {
  constructor(userData, userActivity) {
    super(userData)
    this.userActivity = userActivity;
  }

  dailyStepCount(id, date="2019/06/15") {
    let stepCount = this.userActivity.find(user => user.userID === id && user.date === date)
    return stepCount.numSteps
  }

  calculateMiles(id, date="2019/06/15") {
    let user = this.userActivity.find(user => user.userID === id && user.date === date)
    let steps = user.numSteps
    let strideLength = super.getUserData(user.userID).map(user => user.strideLength)
    let stepsAndStride = Math.floor(steps * strideLength[0])
    let miles = 5280 / stepsAndStride
    return Number(miles.toFixed(2))
  }
    
  getDailyMinutesActive(id, date="2019/06/15") {
    let minActive = this.userActivity.find(user => user.date === date && user.userID === id)
    return minActive.minutesActive
  }
    
  getWeeklyMinutesActiveAverage(id, date) {
    let weekActive = this.userActivity.filter(user => user.userID === id)
    let startDateIndex = weekActive.find(user => user.date === date)
    let startDate = weekActive.indexOf(startDateIndex)
    let weekOfActivity = weekActive.slice(startDate, 7)
    let sum = weekOfActivity.reduce((a, b) => a + b.minutesActive, 0)
    return Math.floor(sum / 7)
  }

  getWeeklyMinutesActive(id, date="2019/06/15") {
    let weekActive = this.userActivity.filter(user => user.userID === id)
    let startDateIndex = weekActive.find(user => user.date === date)
    let startDate = weekActive.indexOf(startDateIndex)
    let weekOfActivity = weekActive.slice(startDate, startDate+7)
    return weekOfActivity.map(user => user.minutesActive)
  }

  getWeeklyStairsClimbed(id, date) {
    let weekActive = this.userActivity.filter(user => user.userID === id)
    let startDateIndex = weekActive.find(user => user.date === date)
    let startDate = weekActive.indexOf(startDateIndex)
    let weekOfActivity = weekActive.slice(startDate, startDate+7)
    return weekOfActivity.map(user => user.flightsOfStairs)
  }

  getWeeklyStepCount(id, date="2019/06/15") {
    let weekActive = this.userActivity.filter(user => user.userID === id)
    let startDateIndex = weekActive.find(user => user.date === date)
    let startDate = weekActive.indexOf(startDateIndex)
    let weekOfActivity = weekActive.slice(startDate, startDate+7)
    return weekOfActivity.map(user => user.numSteps)
  }

  achieveStepGoal(id, date="2019/06/15") {
    let user = this.userActivity.filter(user => user.userID === id)
    let userByDate = user.find(user => user.date === date)
    let stepGoal = super.getUserData(userByDate.userID).map(user => user.dailyStepGoal)
    return user.numSteps >= stepGoal ? 'step goal met!' : 'step goal not met!'
  }

  exceedStepGoal(id) {
    let userStepGoal = super.getUserData(id).reduce(function (user, cV) {
      return user += cV.dailyStepGoal
    }, 0)
    let exceededGoalDays = this.userActivity.filter(user => user.numSteps >= userStepGoal).filter(user => user.userID === id)
    return exceededGoalDays.map(user => user.date)
  }

  findStairClimbingRecord(id) {
    let user = this.userActivity.filter(user => user.userID === id)
    let stairClimbingRecord = user.sort((a, b) => b.flightsOfStairs - a.flightsOfStairs)
    return stairClimbingRecord[0]
  }

  getUserStairClimb (id) {
    let user = this.userActivity.find(user => user.userID === id)
    return user.flightsOfStairs
  }

  getAllUsersStairClimbingAverage(date) {
    let userByDate = this.userActivity.filter(user => user.date === date)
    let users = userByDate.reduce(function (user, cV) {
      return user += cV.flightsOfStairs 
    }, 0) 
    return Math.floor(users / userByDate.length)
  }

  getAllUsersStepsAverage(date) {
    let userByDate = this.userActivity.filter(user => user.date === date)
    let users = userByDate.reduce(function (user, cV) {
      return user += cV.numSteps
    }, 0)
    return Math.floor(users / userByDate.length)
  }

  getAllUsersMinutesActiveAverage(date) {
    let userByDate = this.userActivity.filter(user => user.date === date)
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

  increasingStepsForThreeOrMoreDays(id) {
    let user = this.userActivity.filter(user => user.userID === id)
    let array = [];
    let finalArray = [];
    user.forEach(function(obj) {
      if (array.length === 0) {
        array.push(obj)
      } else if (obj.numSteps > array[array.length -1].numSteps) {
        array.push(obj)
      } else if (obj.numSteps < array[array.length -1].numSteps) {
        finalArray.push(array)
        array = [];
      }
    }) 
    return finalArray.filter(obj => obj.length >= 3)
}
}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}
