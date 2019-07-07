class Activity {
  constructor(activityData) {
    this.activityData = activityData;
  }
  
  userMilesWalkedPerDay(id, date, userData) {
    let steps = this.activityData.find(user => id === user.userID && date === user.date).numSteps
    let stride = userData.find(user => id === user.id).strideLength
    return parseFloat(((steps * stride) / 5280).toFixed(2))
  }

  userMinActivePerDay(id, date) {
    return this.activityData.find(user => id === user.userID && date === user.date).minutesActive
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

  userStepGoalExceeded(id, date) {

  }

  userStairRecord(id) {
    let stairTotals = []
    let userStairInstances = this.activityData.filter(user => id === user.userID)
    userStairInstances.map(item => stairTotals.push(item.flightsOfStairs))
    return stairTotals.sort((a,b) => b - a)[0]
  }

  avgStairsAllUsers(date) {
    let allUserStairActivity = this.activityData.filter(user => date === user.date)
    return allUserStairActivity.reduce((acc, item) => {
      return parseFloat((acc + (item.flightsOfStairs / allUserStairActivity.length)).toFixed(2))
    }, 0)
  }

  avgStepsAllUsers(date) {
    let allUserStepActivity = this.activityData.filter(user => date === user.date)
    return allUserStepActivity.reduce((acc, item) => {
      return parseFloat((acc + (item.numSteps / allUserStepActivity.length)).toFixed(2))
    }, 0)
  }

  avgMinActiveAllUsers(date) {
    let allUserMinutesOfActivity = this.activityData.filter(user => date === user.date)
    return allUserMinutesOfActivity.reduce((acc, item) => {
      return parseFloat((acc + (item.minutesActive / allUserMinutesOfActivity.length)).toFixed(2))
    }, 0)
  }

}

if (typeof module !== 'undefined') {
  module.exports = Activity;
}

// function allUsersSleepQuality() {
//     let arr = [];
//     let createIDs = sampleSleep.forEach(item => {
//       if (!arr.includes(item.userID)) {
//         arr.push(item.userID)
//       }
//     })
//     let numInstances = sampleSleep.filter((item, index) => item.userID === 1)
//     return totalHoursPerUser = sampleSleep.reduce((acc, item, index) => {
//       if (item.userID === arr[index]) {
//         acc[item.userID] = item.sleepQuality;
//       } else {
//         acc[item.userID] += item.sleepQuality
//       }
//       // Object.values(acc).map(item => item / numInstances.length)
//       return acc
//     }, {})
        
//     }