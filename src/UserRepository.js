class UserRepository {
  constructor(data) {
    this.data = data;
    this.currentUserData;
        
  }

  fetchUserData(userID) {
    let currentUser = this.data.find(user => user.id === userID);
    this.currentUserData = currentUser;
    return currentUser;
  }

  findAverageStepGoalOfAllUsers() {
    return this.data.reduce((totalSteps, user) => {
      totalSteps += user.dailyStepGoal
      return totalSteps
    }, 0) / this.data.length
  }
}

if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}
