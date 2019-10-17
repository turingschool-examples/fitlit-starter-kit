class UserRepository {
  constructor(data) {
    this.allUsers = data;
  }
  findUserData(userID) {
    return this.allUsers[userID].id;
  }
  calculateUsersStepGoal() {
    for (var i = 0; i < this.allUsers.length; i++) {
      this.dailyStepGoalAverage = (this.allUsers[i].dailyStepGoal / this.allUsers.length);
    }
    return this.dailyStepGoalAverage;
}
}


module.exports = UserRepository;

