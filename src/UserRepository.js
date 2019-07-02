
  usersFilePath = require("../data/userSub");


class UserRepository {
  constructor(userID) {
    this.userID = userID,
    this.data = usersFilePath
  }

  returnUserData(userID) {
    return this.data.find(element => element.id === userID);
  }

  returnAvgStepGoal() {

  }
}  

if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}