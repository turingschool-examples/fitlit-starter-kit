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