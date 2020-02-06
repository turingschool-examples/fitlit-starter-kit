class UserRepo {
  constructor(data) {
    this.data = data;
  }

  returnUserInfoById(userId) {
    return this.data.find(user => user.id === userId)
  }

  averageStepsAllUsers() {
    return this.data.reduce((acc, users) => {
      (acc += users.dailyStepGoal)
      return Math.round(acc / this.data.length);
    }, 0)
  }
}

if (typeof module !== 'undefined') {
  module.exports = UserRepo;
}
