// const User = require('../src/User');


class UserRepository {
  constructor(data, id) {
    this.data = data;
    this.id = id;
  }

  findUserData() {
    console.log(this.data.find(user => user.id === this.id))
    return this.data.find(user => user.id === this.id)
  }

  returnAverageStepsGoal() {
    return Math.ceil(this.data.reduce((acc, element) => {
      return acc + element.dailyStepGoal}, 0) / this.data.length);
  }

}







if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}