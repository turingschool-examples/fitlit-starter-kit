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
    // const stepGoalSum = this.userData.map()
    
    // this.userData.stepGoal.reduce((total, goal) => {
    //   return total+ goal;
    // },);

    // this.avgStepGoal = stepGoalSum / this.userData.length;

    // return this.avgStepGoal;
  }
}