//need to add data and data  array
const scripts = require('./scripts');

const User = require('../src/User');

class UserRepo {
  constructor(users) {
    this.users = users;
  };
  getDataFromID(id) {
    // given the user's id, what is the user's data?
    return this.users.find((user) => id === user.id);
  };
  calculateAverageStepGoal() {
    var totalStepGoal = this.users.reduce((sumSoFar, data) => {
      return sumSoFar = sumSoFar + data.dailyStepGoal;
    }, 0);
    return totalStepGoal/this.users.length;
  };
}

if (typeof module !== 'undefined') {
  module.exports = UserRepo;
}
