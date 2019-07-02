const fakeUsers = require('../fakeData/fakeUsers');
class UserRepository {
  constructor(data) {
    this.data = data;
  }

  getUserData(id) {
      return this.data.find(function(user){
          if (user.id === id) {
              console.log(user)
              return user
          }
      })
      }

  compareStepGoal(steps) {
      let userCounter = 0
      return this.data.reduce(function (totalSteps, user) {
          userCounter++
          console.log(userCounter)
          return totalSteps += user.dailyStepGoal
      }, 0)
  };
  };

if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}