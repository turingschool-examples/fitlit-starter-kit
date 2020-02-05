class UserRepository {
  constructor(data) {
    this.data = data;
  }

  findUserByID(userID) {
    const user = this.data.find((user) => user.id === userID);
    return user;
  }

  calculateAverageStepGoal(userSteps) {
    let stepTotal = this.data.reduce((acc, step) => {
      return acc += step.dailyStepGoal;
    }, 0);
    return Math.round(userSteps / (stepTotal / (this.data.length)) * 100);
  }
}

if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}
