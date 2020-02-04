class UserReopsitory {
  constructor(data) {
    this.data = data;
  }

  findUserByID(userID) {
    const user = this.data.find((user) => user.id === userID);
    return user;
  }

  calculateAverageStepGoal() {
    let stepTotal = this.data.reduce((acc, step) => {
      return acc += step.dailyStepGoal;
    }, 0);
    return stepTotal / (this.data.length);
  }
}

if (typeof module !== 'undefined') {
  module.exports = UserReopsitory;
}