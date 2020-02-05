class UserRepository {
  constructor(userData) {
    this.data = userData;
  }
  getUserData(id) {
    let userInfo = this.data.find(user => {
      return user.id === id;
    })
    return userInfo;
  }
  getStepGoalAverage() {
    return Math.floor(this.data.reduce(
      ((acc, user) => acc + user.dailyStepGoal), 0) / this.data.length);
  }
}


if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}