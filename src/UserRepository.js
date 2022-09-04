import User from "./User";

class UserRepository {
  constructor(sampleUserData) {
    this.userData = sampleUserData;
  }

  getUserById(userNumber) {
    let individual = this.userData.find((person) => person.id === userNumber);
    let singleUser = new User(individual);
    return singleUser;
  }

  getUsersAverageStepGoals() {
    let combinedStepGoal = this.userData.reduce((allsteps, individualUser) => {
      allsteps += individualUser.dailyStepGoal;
      return allsteps;
    }, 0);
    let average = parseFloat((combinedStepGoal / this.userData.length).toFixed(0))
    return average
  }
}

export default UserRepository;
