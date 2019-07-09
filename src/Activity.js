if (typeof module !== 'undefined') {
  userData = require('../data/users');
}

class Activity {
  constructor(activityData, userData) {
    this.activityData = activityData;
    this.userData = userData;
  } 

  consumerInfo(id) {
    return this.activityData.filter(obj => obj.userID === id);
  }

  totalUserStepsDaily(id, day) {
    let userObj = this.consumerInfo(id).filter(obj => obj.date === day);
    return userObj[0].numSteps;
  }

  stairFlightsInDay(day, id) {
    let userObj = this.consumerInfo(id).filter(obj => obj.date === day);
    return userObj[0].flightsOfStairs;
  }

  milesWalkedInDay(day, data) {
    let currentDay = this.activityData.find((date) => date.date === day);
    let user = data.find((x) => x.id === currentDay.userID);
    let calculatedMiles = (currentDay.numSteps * user.strideLength) / 5280;
    return Math.round(calculatedMiles);
  }

  minutesActive(id, day) {
    return this.consumerInfo(id).find((obj) => day === obj.date).minutesActive;
  }

  startDayIndx(id, day) {
    let userArray = this.consumerInfo(id);
    let userDay = userArray.filter(obj => obj.date === day);
    return userArray.indexOf(userDay[0]);
  }

  dailyStepsPerWeek(id, day) {
    let userArray = this.consumerInfo(id);
    let index = this.startDayIndx(id, day);
    return userArray.slice(index, 8).map((obj) => obj.numSteps);
  }
  dailyStairFlightsPerWeek(id, day) {
    let userArray = this.consumerInfo(id);
    let index = this.startDayIndx(id, day);
    return userArray.slice(index, 8).map((obj) => obj.flightsOfStairs);
  }

  dailyMinsActivePerWeek(id, day) {
    let userArray = this.consumerInfo(id);
    let index = this.startDayIndx(id, day);
    return userArray.slice(index, 8).map((obj) => obj.minutesActive);
  }

  milesWalkedInWeek(id, day, data) {
    let currentDay = this.activityData.find((date) => date.date === day);
    let user = data.find((x) => x.id === currentDay.userID);
    let stepsPerWeek = this.dailyStepsPerWeek(id, day).reduce((acc, steps) => {
      return acc + steps;
    }, 0);
    return Math.round(stepsPerWeek * user.strideLength / 5280);
  }

  minutesAveragedByWeek(id, day) {
    let array = this.consumerInfo(id);
    let dayThing = array.filter((obj) => obj.date === day);
    let index = array.indexOf(dayThing[0]);
    let minutesByWeek = array.slice(index, 8).map((obj) => obj.minutesActive);
    let minAddition = minutesByWeek.reduce((acc, el) => {
      return  acc + el;
    }, 0);
    return minAddition / minutesByWeek.length;
  }

  stepGoalDay(id, day, data) {
    let steps = this.consumerInfo(id).find((obj) => obj.date === day).numSteps;
    let stepGoal = data.find((obj) => id === obj.id).dailyStepGoal;
    if ( steps > stepGoal) {
      return true;
    } else {
      return false;
    }
  }

  exceededStepGoal(id, data) {
    let user = this.consumerInfo(id);
    let goalStep = data.find((obj) => id === obj.id).dailyStepGoal;
    let filterWinner = user.filter((obj) => obj.numSteps > goalStep);
    let dates = filterWinner.map((obj) => obj.date);
    return dates;
  }

  climbingRecord(id) {
    let filterFlights = this.consumerInfo(id).map((obj) => {
      return obj.flightsOfStairs;
    });
    return Math.max(...filterFlights);
  }

  wklyStepsChallenge(id, day) {
    let friendsFound = userData.find((obj) => id === obj.id).friends;
    friendsFound.unshift(id);
    let friendObjs = userData.filter(user => friendsFound.includes(user.id));
    return friendObjs.map(person => {
        let personWklySteps = {};
        personWklySteps.id = person.id;
        personWklySteps.name = person.name.split(' ')[0];
        personWklySteps.wklyStepTotal = this.dailyStepsPerWeek(person.id, day).reduce((acc, steps) => {
          return acc + steps;
        }, 0);
        return personWklySteps;
      });
    }

  averageActivity(day, el) {
    let findDay = this.activityData.filter((obj) => obj.date === day);
    let findElementArr = findDay.map((obj) => obj[el]);
    let sumTotal = findElementArr.reduce((acc, el) => {
      return acc + el;
    }, 0);
    return Math.round(sumTotal / findElementArr.length);
  }
} 

if (typeof module !== 'undefined') {
  module.exports = Activity; 
}