class UsersRepository {
  constructor(id) {
    this.id = id;
  }

  getUserDataById(userData) {
    return userData.find(data => data.id === this.id);
  }

  calculateAverageStepGoal(userData) {
    let totalSteps = userData.reduce((acc, data) => {
      acc += data.dailyStepGoal;
      return acc;
    }, 0);

    return Math.trunc(totalSteps / userData.length);
  }
}

if (typeof module !== 'undefined') {
  module.exports = UsersRepository;
}
