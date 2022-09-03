class UserRepository {
  constructor(userData) {
    this.userData = userData;
  }

  findUserData(id) {
    const singleUserData = this.userData.find(user => user.id === id);
    return singleUserData;
  };

  getAllUserAvgStepGoals(){
    const totalStepGoals = this.userData.reduce((totalSteps, user) => {
      totalSteps += user.dailyStepGoal / this.userData.length
      return totalSteps
    }, 0);

    return Math.floor(totalStepGoals)
  }

}

export default UserRepository;
