class UserRepo {
  constructor(userData) {
    this.userData = userData;
  }

  returnUserData(id) {
    return this.userData.find(user => id === user.id);
  }
  averageGoalSteps() {
    return this.userData.reduce((steps, cur) => {
      return steps + (cur.dailyStepGoal / this.userData.length);
    }, 0);
  }
}

if (typeof module !== 'undefined') {
  module.exports = UserRepo;
}