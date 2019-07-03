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
    return Number(this.data.reduce(function(allSteps, currentUser) {
       return allSteps += currentUser.dailyStepGoal;
    }, 0) / this.data.length);
  }
}  

if (typeof module !== 'undefined') {
  module.exports = UserRepository;
}