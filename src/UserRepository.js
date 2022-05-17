class UserRepository {
  constructor(data) {
    this.users = data;
  };

  getUserById(id) {
    const foundData = this.users.find(user => user.id === id);
      return foundData;
  };

  calculateAvgStepGoal() {
    const allUsersAvgStepGoal = this.users.reduce((totalSteps, user) => {
      totalSteps += user.dailyStepGoal;
      return totalSteps;
    }, 0);
    return Math.round(allUsersAvgStepGoal / this.users.length);
  };
}

export default UserRepository;
