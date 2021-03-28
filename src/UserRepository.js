const User = require("./User");

class UserRepository {
  constructor() {
    this.userData = [];
    this.avgStepGoal = 0;
  }

  populateUserData(dataset) {
    this.userData = dataset.map(user => new User(user));
  }

  retrieveUserData(id) {
    return this.userData[id];
  }

  retrieveAvgStepGoal() {
    //NOT FUNCTIONAL
    const stepGoalSum = this.userData.stepGoal.reduce((sumGoal, goal) => {
      return sumGoal + goal;
    });
    this.avgStepGoal = stepGoalSum / this.userData.length;

    return this.avgStepGoal;
  }
}