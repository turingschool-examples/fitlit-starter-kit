class UserRepository {
  constructor(users) {
    this.users = users;
  }

  returnUserData(userID) {
    return this.users.find((user) => user.id === userID);
  }

  returnAverageDailyStepGoal() {
    let totalSteps = this.users.reduce(
      (totalSteps, user) => (totalSteps += user.dailyStepGoal),
      0
    );
    return Math.round(totalSteps / this.users.length);
  }
}

export default UserRepository;
