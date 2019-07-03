filePath = require("../data/activitySub")
userData = require("../data/UserSub")
User = require("../src/User")

class Activity {
  constructor(userID) {
    this.userID = userID;
    this.data = filePath;
  }

  returnMilesWalked(date) {
    let users = userData.map((user) => {
      return new User(user);
    });
    let correctUser = users.find((user) => {
      return user.id === this.userID;
    })
    let correctUserDate = this.data.filter((user) => {
      return user.date === date;
    });
    let user = correctUserDate.find((user) =>{
      return user.userID === correctUser.id
    });
    let stepsPerMile = 5280 / correctUser.strideLength;
    return Number(((user.numSteps / stepsPerMile).toFixed(2)))
  }
}

module.exports = Activity