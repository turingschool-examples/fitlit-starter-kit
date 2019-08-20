class UserRepository {
  constructor(data) {
    this.data = data;
  }

  getUserData(id) {
    return this.data.find(user => user.id === id);
  }

  getAvgStep() {
    let totalStep = this.data.reduce((avg, user) => {
      return avg += user.dailyStepGoal;
    }, 0);
    return totalStep / this.data.length;
  }
}

module.exports = UserRepository;