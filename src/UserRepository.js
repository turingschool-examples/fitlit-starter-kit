class UserRepository {
  constructor(data) {
    this.allUserData = data;
    this.avgUserStepGoal = null;
  }
  findUserData(id) {
    const userData = this.allUserData.find((data) => {
      if (data.id === id) {
        return data;
      }
    });
    return userData;
  }

  findAverageStepGoal() {
    console.log(this.allUserData[1]);
    const userSteps = this.allUserData.map((user) => user.dailyStepGoal);
    const allUserSteps = userSteps.reduce((total, userStep) => {
      total += userStep;
      return total;
    }, 0);
    this.avgUserStepGoal = Math.round(allUserSteps / this.allUserData.length);
    return this.avgUserStepGoal;
  }
}

export default UserRepository;
