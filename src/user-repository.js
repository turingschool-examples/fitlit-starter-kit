class UserRepository {
  constructor(data) {
    this.data = data;
  }

  returnUserData(id) {
    return this.data.find(el => el.id === id);
  }


  returnAverageStepGoal() {
    return Math.ceil(this.data.reduce((acc, total) => acc + total.dailyStepGoal, 0) / this.data.length)
  }

}

module.exports = UserRepository;
