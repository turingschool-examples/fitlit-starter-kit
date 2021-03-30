class UserRepository {
  constructor(data) {
    this.data = data;
  }

  determineUserData(id) {
    const userId = id;
    const userDataById = this.data.find(specificUser => specificUser.id === userId);
    return userDataById
  }

  calculateAvgStepGoal() {
    const allStepGoals = this.data.map(user => user.dailyStepGoal);
    const totalStepGoal = allStepGoals.reduce((total, num) => {
      return total + num;
    })
    return totalStepGoal / allStepGoals.length
  }
}

module.exports = UserRepository;
