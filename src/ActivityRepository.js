if (typeof module !== "undefined") {
  const Activity = ('../src/Activity')
  FilePath = require("../data/ActivitySub")
} else {
  FilePath = activityData;
}

class ActivityRepository {
  constructor (userID) {
    this.userID = userID,
    this.data = FilePath;
  }

  findCorrectDate(date) {
    return this.data.filter(user => {
      return user.date === date;
    });
  }
  
  findId() {
    let correctUser = this.data.filter(user => {
      return user.userID === this.userID;
    })
    return correctUser;
    let newUser = new Activity(correctUser.userID);
  }

  returnAvgSteps(date) {
    let usersOnDate = this.findCorrectDate(date);
    return Number(usersOnDate.reduce((allSteps, user) => {
      allSteps += user.numSteps;
      return allSteps;
    }, 0) / usersOnDate.length.toFixed(2))
  }

  returnAvgStairs(date) {
    let usersOnDate = this.findCorrectDate(date);
    return Number(usersOnDate.reduce((allStairs, user) => {
      allStairs += user.flightsOfStairs;
      return allStairs;
    }, 0) / usersOnDate.length.toFixed(2))
  }

  returnAvgMins(date) {
    let usersOnDate = this.findCorrectDate(date);
    return Number(usersOnDate.reduce((allMins, user) => {
      allMins += user.minutesActive;
      return allMins;
    }, 0) / usersOnDate.length.toFixed(2))
  }
}

if (typeof module !== 'undefined') {
  module.exports = ActivityRepository;
}