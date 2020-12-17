class UserRepo {
  constructor(dataset) {
    this.data = dataset;
  }

  returnUserData(id) {
    return this.data[id - 1];
  }

  userStepGoalAverage() {
    const total = this.data.reduce((total, userData) => total + userData.dailyStepGoal, 0);
    return total / this.data.length;
  }
}

if (typeof module !== 'undefined') {
  module.exports = UserRepo;
}
