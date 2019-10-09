class UserRepo {
  constructor(userData) {
    this.users = userData
  }
  findUser(id) {
    return this.users.find(function(elem) {
      return elem.id === id;
    });
  }
  calculateAvgStepGoal() {
    let totalSteps = 0;
    this.users.forEach(function(elem) {
      totalSteps = totalSteps + elem.dailyStepGoal;
    });
    return totalSteps / this.users.length;
  }
}

if (typeof module !== 'undefined') {
  module.exports = UserRepo;
}
