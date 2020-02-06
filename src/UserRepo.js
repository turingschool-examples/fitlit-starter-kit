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
    // console.log(this.data.length)
    // console.log(Math.round(acc / this.data.length))
    // return Math.round(acc / this.data.length);
    return acc
    }, 0)
    return Math.round(averageAll / this.data.length);
  }
}

if(typeof module !== 'undefined') {
  module.exports = UserRepo;
};
