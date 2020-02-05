class UserRepository {
  constructor(usersData) {
    this.usersData = usersData;
    this.user;
  }

  getUserData(userId) {
    this.user = this.usersData.find(user => user.id === userId);
    return this.user;
  }

  calcAverageStepGoal() {
    let stepGoalAll = this.usersData.reduce((steps, user) => {
      steps += user.dailyStepGoal / this.usersData.length
      return steps
    }, 0)
    return stepGoalAll
  }
}

if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}
