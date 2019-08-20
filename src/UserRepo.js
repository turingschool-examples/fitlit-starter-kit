class UserRepo {
  constructor(data) {
    this.data = data;
  }

  returnUserData(userID) {
    return this.data.find(user => user.id === userID);
  }

  returnAverageStepGoal() {
    return Math.floor(this.data.reduce((totalSteps, user) => {
      totalSteps += user.dailyStepGoal;
      return totalSteps;
    }, 0) / this.data.length);
  }
}

if (typeof module !== 'undefined') {
  module.exports = UserRepo;
}