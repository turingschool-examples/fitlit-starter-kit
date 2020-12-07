'use strict'
const user = require('../src/user')

class UserRepo {
  constructor(users) {
    this.users = users;
  }

  createUsers(user) {
    this.users.push(user)
    return this.users // returns users
  }

  getUserData(id) { 
    this.createUsers(user)
    return this.users[id - 1]
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