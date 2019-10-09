class UserRepo {
  constructor(usersData){
    this.usersData = usersData;
  }

  getUserData(email) {
    return this.usersData.find(userData => userData.email === email);
  }

  calcAvgStepGoal() {
    let totalStepGoals = this.usersData.reduce((acc, user) => {
      acc += user.dailyStepGoal;
      return acc;
    }, 0);
    return totalStepGoals / this.usersData.length;
  }

}


if (typeof module !== 'undefined') {
  module.exports = UserRepo;
}
