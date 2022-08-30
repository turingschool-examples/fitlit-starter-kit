class UserRepository {
  constructor(userData) {
    this.userData = userData;
  }

  findUserData() {
    const singleUserData = this.userData.find(user => user.id === id);
    return singleUserData;
  }

  getAllUserAvgStepGoals(){
    const totalStepGoals = this.userData.reduce((totalSteps, user) => {
      avg += user.dailyStepGoal / this.userData.length
    }, 0);
    return totalStepGoals
  }
}

export default UserRepository;
