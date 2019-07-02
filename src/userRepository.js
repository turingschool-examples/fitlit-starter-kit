const fakeUsers = require('../fakeData/fakeUsers');
class UserRepository {
  constructor(data) {
    this.data = data;
    this.user = {};
  }

  getUserData(id) {
    let theUser;
    this.data.forEach(function(user){
      if (user.id === id) {
        theUser = user
      }
    })
    this.user = theUser
    return theUser
  };

  compareStepGoal(steps) {
    let userCounter = 0
    let sumOfUserSteps = this.data.reduce(function (totalSteps, user) {
      userCounter++
      return totalSteps += user.dailyStepGoal
    }, 0)
      let totalStepAverage = sumOfUserSteps / userCounter
      if (this.user.dailyStepGoal < totalStepAverage) {
        return `Your goal is ${totalStepAverage - this.user.dailyStepGoal} steps less than your friends!`
      }
      if (this.user.dailyStepGoal > totalStepAverage) {
        return `Your goal is ${this.user.dailyStepGoal - totalStepAverage} steps more than your friends!`
      }
  };
  };

if (typeof module !== 'undefined') {
  module.exports = UserRepository;
};