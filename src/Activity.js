const UserRepository = require("./UserRepository")
const userData = require("../data/users")
const userRepository = new UserRepository([userData[0],userData[1]]);

class Activity {
  constructor(activitySet) {
    this.activitySet = activitySet;
  }
  walkedMilesPerDay(dateSelected, id) {
    let userStrideLength = userRepository.returnUserData(id).strideLength;
    let dayData = this.activitySet.find(day => day.date === dateSelected && day.userID === id);
    return Math.round((dayData.numSteps * userStrideLength / 5280) * 10) / 10;
  }
}
if (typeof module !== 'undefined') {
  module.exports = Activity;
}
