class UserRepository {
  constructor(data) {
    this.users = data;
  }
  returnUser(userId) {
    let foundUser = this.users.find(user => user.id === userId)
    return foundUser
  }

  calculateStepGoal() {
    let goal = 0;
    let stepGoal = this.users.forEach(user => goal += user.dailyStepGoal)
    return goal / this.users.length
  }

}



module.exports = UserRepository