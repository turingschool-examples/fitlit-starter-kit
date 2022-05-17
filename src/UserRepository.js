

class UserRepository {
  constructor(data) {
    this.users = [];
  }

  getUserById(id) {
    const foundData = this.users.find(user => user.id === id);
      return foundData;
  }

  calculateAvgStepGoal() {
    const allUsersAvgStepGoal = this.users.reduce((totalSteps, user) => {
      totalSteps += user.dailyStepGoal;
      return totalSteps;
    }, 0)
    return allUsersAvgStepGoal / this.users.length;
  }
}

export default UserRepository;
