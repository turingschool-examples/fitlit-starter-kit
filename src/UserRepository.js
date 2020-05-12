class UserRepository {
  constructor(data) {
    this.userData = data
  }

  getUserByID(userID) {
    if((typeof userID) === 'number') {
      return this.userData.find(user => user.id === userID)
    } else {
      return 'Invalid Argument'
    }
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
