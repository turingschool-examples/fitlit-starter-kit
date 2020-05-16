class UserRepository {
  constructor(data) {
    this.userData = data
  }

  getUserByID(userID) {
    return this.userData.find(user => user.id === userID)
  }

  getAverageStepGoal() {
    let stepGoal = this.userData.reduce((acc, user) => {
      acc += user.dailyStepGoal
      return acc
    }, 0)
    return Math.round(stepGoal / this.userData.length)
  }
}

if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}
