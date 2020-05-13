class UserRepository {
  constructor(userData) {
    this.userData = userData
    this.users = []
  }

  calculateAverageStepGoal() {
    const totalDailyStepGoal = this.userData.reduce((acc, data) => {
      return acc += data.dailyStepGoal
    }, 0)
    return Math.round(totalDailyStepGoal / this.userData.length)
  }
}

   

if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}