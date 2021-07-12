class UserRepository {
  constructor(userData) {
    this.userData = userData;
  }

  returnUserData(id) {
    return this.userData.find(user => user.id === id);
  }

  calculateAvgStepGoal() {
    let avgStepGoal = this.userData.reduce((sum, user) => {
      sum += user.dailyStepGoal;
      return sum;
    }, 0);

    let roundedAvg = Math.round(avgStepGoal /this.userData.length);
    return roundedAvg;
  }
};

export default UserRepository;
