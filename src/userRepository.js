userData = require("../data-subsets/users-subset");
user = require("./User");


class UserRepository {
  constructor(userData) {
    this.users = userData;
  }

  getUserObj(userId) {
    return this.users.find(user => user.id === userId)
  }

  calcStepGoalAvg() {
    const stepGoalSum = this.users.reduce((stepGoalTotal, user) => {
      stepGoalTotal += user.dailyStepGoal
      return stepGoalTotal
    }, 0) / this.users.length;
    return stepGoalSum;
    
  }
}

if (typeof module !== "undefined") {
  module.exports = UserRepository;
}