const User = require('../src/User');


class UserRepository {
  constructor(users) {
    this.users = users
  }





  returnAverageStepsGoal() {
    return Math.ceil(this.users.reduce((acc, element) => {
      return acc + element.dailyStepGoal}, 0) / this.users.length);
  }


}







if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}