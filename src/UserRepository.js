class UserRepository {
  constructor(userData) {
    this.data = userData;
  }
  getUserData(id) {
    let userInfo = this.data.find(user => {
      if (user.id === id) {
        return user;
      }
    });
    return userInfo;
  }
  getStepGoalAverage() {
    let stepGoals = [];
    this.data.forEach(user => {
      stepGoals.push(user.dailyStepGoal)
    });
    let stepGoalAverage = stepGoals.reduce((acc, num) => {
      acc += num / stepGoals.length;
      return acc;
    }, 0);
    return stepGoalAverage
  }
}


if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}