class UserRepo {
  constructor(userData) {
    this.userData = userData;
  }
  
  returnUserData(id) {
    return this.userData.find(user => user.id === id);
  }

  returnAllUsersStepGoalAverage() {
    return this.userData.reduce((acc, user) => {
      acc += user.dailyStepGoal;
      return acc;
    }, 0) / this.userData.length;
  }

}

module.exports = UserRepo;