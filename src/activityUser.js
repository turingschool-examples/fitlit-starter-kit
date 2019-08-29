
// The variables below are required for testing but interfere 
//with DOM functionality
// const userData = require("../data/users")
// const User = require('./userClass.js')
// const UserRepository = require("./user-repository");
// // }

class Activity {
  constructor(moveData) {
    this.moveData = moveData;
  }

  findUser(id) {
    let person = this.moveData.filter((obj) => {
      return obj.userID === id
    })
    return person;
  }

  getMilesWalked(id, date) {
    let userInfo = this.findUser(id)
    let dayOfSteps = userInfo.find(obj => obj.date === date);
    let allUsers = new UserRepository(userData)
    let user = allUsers.returnUserData(id)
    let milesWalked = parseFloat(((dayOfSteps.numSteps * user.strideLength) / 5280).toFixed(2))
    return milesWalked

  }

  getMinutesActive(id, date, type) {
    let userInfo = this.findUser(id)
    let activeToday = userInfo.find((day) => {
      return day.date === date
    })
    return activeToday[type]
  }

  getAverageActivityForWeek(user, day, type) {
    let userInfo = this.findUser(user)
    let targetIndex = userInfo.findIndex(obj => {
      return obj.date === day
    })
    let weekData = userInfo.slice(targetIndex - 6, targetIndex + 1);
    let average = weekData.reduce((acc, current) => {
      return acc += current[type] / weekData.length
    }, 0)
    return parseFloat(average.toFixed(2))
  }

  getActivityForWeek(user, day, type) {
    let userInfo = this.findUser(user)
    let targetIndex = userInfo.findIndex(obj => {
      return obj.date === day
    })
    let weekData = userInfo.slice(targetIndex - 6, targetIndex + 1);
    return weekData.map((obj) => {
        return ` ${obj.date} : ${obj[type]}`
    })
  }

  returnStepGoalMet(user, day) {
    let userInfo = this.findUser(user)
    let todaysSteps = userInfo.find(obj => obj.date === day)
    if (todaysSteps.numSteps >= user.dailyStepGoal) {
      return true
    } else {
      return false
    }
  }

  getDaysStepGoalExceeded(id) {
    let userInfo = this.findUser(id)
    let allUsers = new UserRepository(userData)
    let user = allUsers.returnUserData(id)
    let overGoal = userInfo.filter(day => {
      return day.numSteps > user.dailyStepGoal
    }).map(day => day.date)
    return overGoal
  }

  getStairClimbingRecord(user) {
    let userInfo = this.findUser(user);
    let mostStairs = Math.max(...userInfo.map(day => day.flightsOfStairs))
    let bestClimbingDay = userInfo.filter(day => {
      return day.flightsOfStairs === mostStairs
    }).map(day => day.date)
    return bestClimbingDay
  }

  getStepsToday(user, day) {
    let userInfo = this.findUser(user)
    let todaysSteps = userInfo.find(obj => {
      return obj.date === day
    })
    return todaysSteps.numSteps;
  }

  getIncreasingSteps(user) {
    let userInfo = this.findUser(user)
    let trend = userInfo.reduce((acc, day, index) => {
      if (index < 2) {
        return acc;
      }

      if (day.numSteps > userInfo[index - 1].numSteps 
        && userInfo[index - 1].numSteps > userInfo[index - 2].numSteps) {
        {acc.push(day.date)}
      }
      return acc
    }, [])
    return trend
  }

}



if (typeof module !== 'undefined') {
  module.exports = Activity;
}