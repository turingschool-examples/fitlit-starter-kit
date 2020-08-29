// const {userData} = require("../data/users")
class UserRepository {
  constructor(userData) {
    this.userData = userData;
    // console.log('2', userData)
    //gives back an array of three user objects
  }
  returnUserData(id){
    return this.userData.find(user => user.id === id);
  }
  getAvgStepGoal(){
    return this.userData.reduce((allAvgSteps, user) => {
      return allAvgSteps += user.dailyStepGoal/this.userData.length
    },0);
  }
  returnFriendFullName(users) {
    console.log(users)
    console.log(this.userData.friends)
    let test = users.map(friendId => this.returnUserData(friendId).name);
    console.log(test)
    return test
  }
}

if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}
