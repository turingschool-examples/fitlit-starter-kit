class UserRepository {
  constructor(userInstanceData) {
    this.userInstanceData = userInstanceData;
  }

  returnUserData(userId) {
    return this.userInstanceData.find(user => user.id === userId);
  }

  calculateAverageStepGoal() {
    const totalStepGoal = this.userInstanceData.reduce((totalSteps, user) => {
      return totalSteps + user.dailyStepGoal;
    }, 0);
    return Math.floor(totalStepGoal / this.userInstanceData.length);
  }

}

if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}
