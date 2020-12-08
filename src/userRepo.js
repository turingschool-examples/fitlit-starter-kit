'use strict'
// const user = require('../src/user') // use this for testing

class UserRepo {
  constructor(users) {
    this.users = users;
  }

  getUserData(id) { 
    return this.users[id]
  }

  calculateAvgSteps() {
    let stepGoals = this.users.map((user) => {
      return user.dailyStepGoal
    })
    let divisor = stepGoals.length
    let totalAvgSteps = stepGoals.reduce((avgSteps, value) => {
      let totalSteps = avgSteps += value
      return totalSteps
    }, 0)
    return totalAvgSteps = totalAvgSteps / divisor
  }

}
if (typeof module !== 'undefined') {
  module.exports = UserRepo;
}