const User = require ('../src/User');

class UserRepository {
  constructor(userData) {
    this.users = [];
    this.userData = userData;
  }

  createUsers() {
    this.userData.forEach((userDataObject, i) => {
      var user = new User(this.userData[i]);
      this.users.push(user);
    });
  }

  returnUserData(id) {
    let currentUserData;
    this.userData.forEach((userDataObject, i) => {
      if (this.userData[i].id === id) {
        currentUserData = this.userData[i];
      }
    });
   return currentUserData;
  }

  returnAverageStepGoal() {
    let totalUserStepGoal = 0;
    this.users.forEach((user, i) => {
      totalUserStepGoal = totalUserStepGoal + user.dailyStepGoal;
    });
    let averageStepGoal = totalUserStepGoal/this.users.length;
    return Math.round(averageStepGoal);
  }

}

if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}
