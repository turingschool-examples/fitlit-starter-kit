class UsersRepo {
  constructor(users) {
    this.allUsers = users
  }

  getUser(id) {
    return this.allUsers.find(user => user.id === id)
  }

  getAvgStepGoal() {
    return this.allUsers.reduce((acc, user) => {
      return acc += user.dailyStepGoal / this.allUsers.length
    }, 0)
  }

}

if (typeof module !== 'undefined') {
  module.exports = UsersRepo;
}