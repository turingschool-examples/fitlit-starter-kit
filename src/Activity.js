if (typeof module !== "undefined") {
filePath = require("../data/activitySub")
userData = require("../data/UserSub")
User = require("../src/User")
} else {
  filePath = activityData;
}

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

  findCorrectUserDate(date) {
    return this.data.filter((user) => {
        return user.date === date;
      });
  }

  returnFlightsOfStairs(date) {
    let correctUser =  this.findCorrectUser();
    let correctUserDate = this.findCorrectUserDate(date);
    let user = correctUserDate.find((user) =>{
      return user.userID === correctUser.id
    });
    return user.flightsOfStairs;
  }

  returnSteps(date) {
    let correctUser =  this.findCorrectUser();
    let correctUserDate = this.findCorrectUserDate(date);
    let user = correctUserDate.find((user) =>{
      return user.userID === correctUser.id
    });
    return user.numSteps;
  };

  returnMilesWalked(date) {
    let correctUser =  this.findCorrectUser();
    let correctUserDate = this.findCorrectUserDate(date);
    let user = correctUserDate.find((user) =>{
      return user.userID === correctUser.id
    });
    let stepsPerMile = 5280 / correctUser.strideLength;
    return Number(((user.numSteps / stepsPerMile).toFixed(2)))
  }

  returnMinutesActive(date) {
    let correctUser =  this.findCorrectUser();
    let correctUserDate = this.findCorrectUserDate(date);
    let user = correctUserDate.find((user) =>{
        return user.userID === correctUser.id
    });
    return user.minutesActive;
  }

  returnMinutesActiveForWeek() {
    let totalMinutes = this.data.reduce((allMinutes, user) => {
      if (user.userID === this.userID) {
        allMinutes += user.minutesActive
      }
      return allMinutes;
    }, 0)
    return Number((totalMinutes / 7).toFixed(2));
  }

  metStepGoalForDay(date) {
    let correctUser = this.findCorrectUser();
    let correctUserDate = this.findCorrectUserDate(date);
    let user = correctUserDate.find((user) =>{
        return user.userID === correctUser.id;
    });
    return user.numSteps >= correctUser.dailyStepGoal ? true : false;
  }

  daysExceededStepGoal() {
    let correctUser = this.findCorrectUser();
    return this.data.reduce((allDates, user) => {
      if (user.userID === correctUser.id && user.numSteps >= correctUser.dailyStepGoal) {
        allDates.push(user.date);
      }
      return allDates;
    }, [])
  }

  allTimeClimbRecord() {
    let correctUser = this.findCorrectUser();
    let flights = this.data.reduce((allFlights, user) => {
      if (user.userID === correctUser.id) {
        allFlights.push(user.flightsOfStairs);
      }
      return allFlights;
    }, [])
    return Math.max(...flights)
  }
}

if (typeof module !== "undefined") {
module.exports = Activity
}