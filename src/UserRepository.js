const {userData} = require("../data/users")
class UserRepository {
  constructor(userData) {
    this.userData = userData;
  }
  returnUserData(id){
    return this.userData.find(user => user.id === id);
    //given an id what is their data
  }
  getAvgStepGoal(){
    //avg step goal amost all users
  }
}


if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}
