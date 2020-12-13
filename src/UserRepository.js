// const User = require('./User')
class UserRepository {
  constructor(data = []) {
    this.users = data.map(user => new User(user))
  }

  getUserData(id) {
    return this.users.filter(user => user.userID === id)[0]
  }

  findAverageStepGoal() {
    const allUserStepGoals = this.users.map(user => user.dailyStepGoal)

    const totalSteps = allUserStepGoals.reduce((totalSteps, userStepGoal) => {
      totalSteps += userStepGoal
      return totalSteps
    }, 0)

    return (totalSteps / this.users.length)
  }
}

// module.exports = UserRepository;
