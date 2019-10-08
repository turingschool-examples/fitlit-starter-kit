class UserRepository {
  constructor(data) {
    this.users = data
    this.currentUser = undefined
  }

  findUser(index) {
    this.users.forEach(user => {
      if(user.id === index) {
        this.currentUser = user
      }
    });
    return this.currentUser
  }

  calculateAverageStepGoal() {
    let avg = this.users.reduce((acc, users) => {
      acc += users.dailyStepGoal
      return acc
    }, 0)
    return avg / this.users.length
  }

}

module.exports = UserRepository;