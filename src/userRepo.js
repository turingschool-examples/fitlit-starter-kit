'use strict'

class UserRepo {
  constructor(userData) {
    this.users = userData;
  }

  getAUser(id) {
    return this.users.find(user => user.id == id);
  }

  calculateAvgSteps() {
    let stepGoals = this.users.map((user) => {
      return user.dailyStepGoal
    })
    let totalAvgSteps = stepGoals.reduce((avgSteps, value) => {
      let totalSteps = avgSteps += value
      return totalSteps
    }, 0)
    return (totalAvgSteps = totalAvgSteps / stepGoals.length);
  }

}
if (typeof module !== 'undefined') {
  module.exports = UserRepo;
}