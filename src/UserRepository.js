class UserRepo {
  constructor(users) {
    this.users = users;
  }

  getUserData(userId) {
    return this.users.find(user => user.id === userId);
  }

  getAllUserAvgStepGoal() {
    const totalStepGoal = this.users.reduce((totalSteps, user) => {
      return totalSteps + user.dailyStepGoal;
    }, 0);
    return Math.floor(totalStepGoal / this.users.length);
  }

}

if (typeof module !== 'undefined') {
  module.exports = UserRepo;
}
