filePath = require("../data/activitySub")
userData = require("../data/UserSub")
User = require("../src/User")

class Activity {
  constructor(userID) {
    this.userID = userID;
    this.data = filePath;
  }

  instantiateUsers() {
    return userData.map((user) => {
      return new User(user);
    });
  }

  findCorrectUser() {
    let users = this.instantiateUsers();
    return users.find((user) => {
      return user.id === this.userID;
    });
  }

  returnMilesWalked(date) {
    let users = this.instantiateUsers();
    let correctUser =  this.findCorrectUser();
    let correctUserDate = this.data.filter((user) => {
      return user.date === date;
    });
    let user = correctUserDate.find((user) =>{
      return user.userID === correctUser.id
    });
    let stepsPerMile = 5280 / correctUser.strideLength;
    return Number(((user.numSteps / stepsPerMile).toFixed(2)))
  }

  returnMinutesActive(date) {
    let users = this.instantiateUsers();
    let correctUser =  this.findCorrectUser();
    let correctUserDate = this.data.filter((user) => {
        return user.date === date;
      });
    let user = correctUserDate.find((user) =>{
        return user.userID === correctUser.id
    });
    return user.minutesActive;
  }
}


module.exports = Activity