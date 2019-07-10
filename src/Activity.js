if (typeof module !== "undefined") {
  activityFilePath = require("../data/activitySub")
  userData = require("../data/UserSub")
  User = require("../src/User")
} else {
  activityFilePath = activityData;
}

class Activity {
  constructor(userID) {
    this.userID = userID;
    this.data = activityFilePath;
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
  }

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

  returnWeekInfo(startDate, endDate) {
    let firstIndex = this.data.findIndex(el => {
      return el.date === startDate;
    });
    let allDates = this.data.reduce((dates, user) => {
      dates.push(user.date)
      return dates
    }, [])
    let lastIndex = allDates.lastIndexOf(endDate);
    return this.data.slice(firstIndex, lastIndex)
  }

  returnFriends(startDate, endDate) {
    let correctUser =  this.findCorrectUser();
    let correctWeek = this.returnWeekInfo(startDate, endDate);
    correctUser.friends.includes(correctUser.id) ? '' : correctUser.friends.push(correctUser.id);
    let friends = correctWeek.reduce((matchingUsers, user) => {
      correctUser.friends.forEach(num => {
        if (num === user.userID)  {
          matchingUsers.push(user);
        }
      })
      return matchingUsers;
    }, []);
    let matchingFriends = userData.reduce((rightUsers, user) => {
      friends.forEach(friend => {
        if (friend.userID === user.id) {
          rightUsers.push(user);
        }
      });
      return rightUsers;
    }, []);
    let uniqueFriends = matchingFriends.filter((user, index) => {
      return matchingFriends.indexOf(user) === index;
    })
    return uniqueFriends.reduce((userObj, user) => {
      let obj = {
        name: user.name,
        numSteps: friends.reduce((steps, friend) => {
          if (friend.userID === user.id) {
            return steps += friend.numSteps
          }
          return steps;
        }, 0)
      } 
      userObj.push(obj);
      return userObj;
    }, []);
  }

  returnWeeklySteps(startDate, endDate) {
    let correctUser =  this.findCorrectUser();
    let correctWeek = this.returnWeekInfo(startDate, endDate);
    let correctUserIds = correctWeek.filter(user => {
      return user.userID === correctUser.id
    })
    return correctUserIds.map(user => {
      return user.numSteps;
    })
  }

  getThreeDayIncreasingSteps() {
    let correctUser = this.findCorrectUser();
    let threeInARow = [];
    let threeInARowDates = [];
    this.data.forEach(function(user) {
      if (threeInARow.length >= 3) {
        threeInARow.shift();
      }
      threeInARow.push(user.numSteps);
      if (user.userID === correctUser.id && threeInARow[2] > threeInARow[1] && threeInARow[1] > threeInARow[0]) {
        threeInARowDates.push(user.date);
      }
    });
    return threeInARowDates;
  }

  getWeeklyMins(startDate, endDate) {
    let correctUser =  this.findCorrectUser();
    let correctWeek = this.returnWeekInfo(startDate, endDate);
    let correctUserIds = correctWeek.filter(user => {
      return user.userID === correctUser.id
    })
    return correctUserIds.map(user => {
      return user.minutesActive;
    })
  }

  getWeeklyFlights(startDate, endDate) {
    let correctUser =  this.findCorrectUser();
    let correctWeek = this.returnWeekInfo(startDate, endDate);
    let correctUserIds = correctWeek.filter(user => {
      return user.userID === correctUser.id
    })
    return correctUserIds.map(user => {
      return user.flightsOfStairs;
    })
  }

  returnTotalWeeklySteps(startDate, endDate) {
    let correctUser =  this.findCorrectUser();
    let correctWeek = this.returnWeekInfo(startDate, endDate);
    let correctUserIds = correctWeek.filter(user => {
      return user.userID === correctUser.id
    })
    return correctUserIds.reduce((totalSteps, user) => {
      return totalSteps += user.numSteps;
    }, 0)
  }
}

if (typeof module !== "undefined") {
  module.exports = Activity
}