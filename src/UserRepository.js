const {userData} = require("../data/users")
class UserRepository {
  constructor(userData) {
    this.userData = userData;
  }
  returnUserData(id){
    return this.userData.find(user => user.id === id);
  }
  getAvgStepGoal(){
    return this.userData.reduce((allAvgSteps, user) => {
      return allAvgSteps += user.dailyStepGoal/this.userData.length
    },0);
  }
}

if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}
