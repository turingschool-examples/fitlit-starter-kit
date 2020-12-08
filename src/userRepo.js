'use strict'

class UserRepo {
  constructor(users) {
    this.users = users;
  }

  getUserData(id) { 
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