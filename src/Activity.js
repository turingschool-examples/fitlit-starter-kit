const UserRepository = require("./UserRepository")
const userData = require("../data/users")
userRepository = new UserRepository([userData[0],userData[1]]);

class Activity {
  constructor(activitySet) {
    this.activitySet = activitySet;
  }
  walkedMilesPerDay(day,id){
    let userStrideLength = userRepository.returnUserData(id).strideLength
     console.log(userStrideLength);
  }
}
if (typeof module !== 'undefined') {
  module.exports = Activity;
}
