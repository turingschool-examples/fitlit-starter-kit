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

  getUserGoal(id) {
    return this.findUserData(id).dailyStepGoal;
  }

  getUserGoalAverage() {
    var goals= this.data.map(user => {
      return user.dailyStepGoal
    }).reduce((acc, goal) => {
      acc += goal
        return acc
    }, 0)
    
    return (goals / this.data.length).toFixed()
  }






}







if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}