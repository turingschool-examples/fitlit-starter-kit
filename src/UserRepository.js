const User = require('./User')
const userData = require('../data/users.js')

class UserRepository {
  constructor(data = []) {
    this.users = data.map(user => new User(user))
  }

  getUserData(id) {
    return this.users.filter(user => user.userID === id)[0]
  }

  findAverageStepGoal() {
    const allUserStepGoals = this.users.reduce((dailyStepGoals, user) => {
      dailyStepGoals.push(user.dailyStepGoal)
      return dailyStepGoals
    }, [])

    const totalSteps = allUserStepGoals.reduce((totalSteps, userStepGoal) => {
      totalSteps += userStepGoal
      return totalSteps
    }, 0)

    return (totalSteps / this.users.length)
  }
}

module.exports = UserRepository;
