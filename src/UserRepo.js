class UserRepo {
  constructor(data) {
    this.data = data;
  }

  returnUserInfoById(userId) {
    return this.data.find(user => user.id === userId)
  }

  averageStepsAllUsers() {
    let averageAll = this.data.reduce((acc, users) => {
    acc += users.dailyStepGoal;
    return acc
    }, 0)
    console.log(Math.round(averageAll / this.data.length))
    return Math.round(averageAll / this.data.length);
  }
}

if(typeof module !== 'undefined') {
  module.exports = UserRepo;
};
