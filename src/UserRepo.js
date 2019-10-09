// const userData = require('../subData.js/usersSubData');
// const user = require('./User');

class  UserRepo {
  constructor(userData) {
    this.users = userData;
  }

  getSingleUserData(id) {
    return this.users.find(user => user.id === id);
  }
  
  findAverageStepGoal() {
    const totalSteps = this.users.reduce((steps, user) => {
      steps += user.dailyStepGoal
      return steps
    }, 0)
    return totalSteps / this.users.length
  }
}

if (typeof module !== "undefined") {
  module.exports = UserRepo;
}