// const User = require('../src/User');


class UserRepository {
  constructor(data) {
    this.data = data;
  }

  findUserData(id) {
    return this.data.find(user => id === user.id)
  }

  returnAverageStepsGoal() {
    return Math.ceil(this.data.reduce((acc, element) => {
      return acc + element.dailyStepGoal}, 0) / this.data.length);
  }

}







if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}