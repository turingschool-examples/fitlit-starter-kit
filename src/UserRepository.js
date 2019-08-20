const User = require('../src/User');


class UserRepository {
  constructor(data, id) {
    this.data = data;
    this.id = id;
  }

  findUserData() {
    return this.data.find(user => user.id === this.id)
    




  returnAverageStepsGoal() {
    return Math.ceil(this.users.reduce((acc, element) => {
      return acc + element.dailyStepGoal}, 0) / this.users.length);
  }

}







if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}