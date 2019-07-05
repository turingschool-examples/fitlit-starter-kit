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

  milesWalkedInDay(day, data) {
    let currentDay = this.activityData.find((date) => date.date === day);
    let y = data.find((x) => x.id === currentDay.userID);
    let calculatedMiles = (currentDay.numSteps * y.strideLength) / 5280;
    return Math.round(calculatedMiles);
  }

  minutesActive(id, day) {
    return this.consumerInfo(id).find((obj) => day === obj.date).minutesActive;
  }

  minutesAveragedByWeek(id, day) {
    let array = this.consumerInfo(id);
    let dayThing = array.filter((obj) => obj.date === day);
    let index = array.indexOf(dayThing[0]);
    let y = array.slice(index, 8).map((obj) => obj.minutesActive);
    let o = y.reduce((acc, el) => {
      return  acc + el;
    }, 0);
    return o / y.length;
  }

  stepGoalDay(id, day, data) {
    let x = this.consumerInfo(id).find((obj) => obj.date === day).numSteps;
    let y = data.find((obj) => id === obj.id).dailyStepGoal;
    if ( x > y) {
      return true;
    } else {
      return false;
    }
  }

  exceededStepGoal(id, data) {
    let x = this.consumerInfo(id);
    let y = data.find((obj) => id === obj.id).dailyStepGoal;
    let o = x.filter((obj) => obj.numSteps > y );
    let dates = o.map((obj) => obj.date);
    return dates;
  }

  climbingRecord(id) {
    let filterFlights = this.consumerInfo(id).map((obj) => {
      return obj.flightsOfStairs;
    });
    return Math.max(...filterFlights);
  }

  averageStairsClimbed(day) {
    let x = this.activityData.filter((obj) => obj.date === day);
    let xo = x.map((obj) => obj.flightsOfStairs);
    let y = xo.reduce((acc, el) => {
      return acc + el;
    }, 0);
    return Math.round(y / xo.length);
  }
} 

if (typeof module !== 'undefined') {
  module.exports = Activity; 
}