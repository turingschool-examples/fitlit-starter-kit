class UserRepository {
  constructor(users) {
    this.users = users;
  }

  calculateAverageStepGoal() {
  	let averageSteps = this.users.reduce((acc, user) => {
      acc += user.dailyStepGoal;
      return acc;
    }, 0)

    return Math.trunc(averageSteps / this.users.length);
    };
};

module.exports = UserRepository;