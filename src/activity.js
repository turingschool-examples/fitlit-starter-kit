class Activity {
  constructor(activityData) {
    this.activityData = activityData;
  }
  
  userStepsWalkedPerDay(id, date) {
    return this.activityData.find(user => id === user.userID && date === user.date).numSteps;
  }

  userStairsClimbedPerDay(id, date) {
    return this.activityData.find(user => id === user.userID && date === user.date).flightsOfStairs;
  }

  userMinActivePerDay(id, date) {
    return this.activityData.find(user => id === user.userID && date === user.date).minutesActive
  }

  userMilesWalkedPerDay(id, date, userData) {
    let steps = this.activityData.find(user => id === user.userID && date === user.date).numSteps;
    let stride = userData.find(user => id === user.id).strideLength;
    return parseFloat(((steps * stride) / 5280).toFixed(2));
  }

  userAverageMinActivePerWeek(id, date) {
    let allUserActivity = this.activityData.filter(user => id === user.userID)
    let findDateIndex = allUserActivity.findIndex(item => date === item.date)
    let userWeekActivity = allUserActivity.slice(findDateIndex - 6, findDateIndex + 1)
    return userWeekActivity.reduce((acc, item) => {
      return parseFloat((acc + (item.minutesActive / 7)).toFixed(2))
    }, 0)
  }

  userDailyStepGoalMet(id, date, userData) {
    let userStepsOfDay = this.activityData.find(user => id === user.userID && date === user.date).numSteps
    let userStepGoal = userData.find(user => id === user.id).dailyStepGoal
    if (userStepsOfDay >= userStepGoal) {
      return true
    } else {
      return false
    }
  }

  userStepGoalExceeded(id, userData) {
    let userInstances = this.activityData.filter(user => id === user.userID)
    let userStepGoal = userData.find(user => id === user.id).dailyStepGoal
    return userInstances.filter(user => user.numSteps > userStepGoal).map(item => item.date)
  }

  userStairRecord(id) {
    let stairTotals = []
    let userStairInstances = this.activityData.filter(user => id === user.userID)
    userStairInstances.map(item => stairTotals.push(item.flightsOfStairs))
    return stairTotals.sort((a,b) => b - a)[0]
  }

  avgStairsAllUsers(date) {
    let allUserStairActivity = this.activityData.filter(user => date === user.date)
    let total = allUserStairActivity.reduce((acc, item) => {
      return acc + (item.flightsOfStairs / allUserStairActivity.length)
    }, 0)
    return Math.floor(total)
  }

  avgStepsAllUsers(date) {
    let allUserStepActivity = this.activityData.filter(user => date === user.date)
    let total = allUserStepActivity.reduce((acc, item) => {
      return acc + (item.numSteps / allUserStepActivity.length)
    }, 0)
    return Math.floor(total)
  }

  avgMinActiveAllUsers(date) {
    let allUserMinutesOfActivity = this.activityData.filter(user => date === user.date)
    return allUserMinutesOfActivity.reduce((acc, item) => {
      return parseFloat((acc + (item.minutesActive / allUserMinutesOfActivity.length)).toFixed(2))
    }, 0)
  }

  hasUserMetStepGoal(id, date, userData) {
    let userDataToday = this.activityData.find(user => id === user.userID && date === user.date).numSteps
    let userStepGoal = userData.find(user => id === user.id).dailyStepGoal
    if (userDataToday >= userStepGoal) {
      let bonusSteps = userDataToday - userStepGoal
      return `You have exceeded your goal by ${bonusSteps} steps!`
    } else {
      let stepsLeft = userStepGoal - userDataToday
      return `You have ${stepsLeft} steps until you have met your goal. Keep up the good work!`
    }
  }

  userStepsPerWeek(id, date) {
    let findUserInstances = this.activityData.filter(user => id === user.userID)
    let findUserIndex = findUserInstances.findIndex(day => day.date === date)
    let stepsPerWeek = findUserInstances.slice(findUserIndex - 6, findUserIndex + 1)
    let total = stepsPerWeek.reduce((acc, item) => {
      if (!acc[item.date]) {
        acc[item.date] = item.numSteps
      }
      return acc
    }, {})
    console.log(total)
  }

}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}
