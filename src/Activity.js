if (typeof module !== 'undefined') {
  userData = require('../data/users');
}

class Activity {
  constructor(activityData, userData) {
    this.activityData = activityData;
    this.userData = userData;
  }

  milesWalkedInDay(day, data) {
    let currentDay = this.activityData.find((date) => date.date === day);
    let y = data.find((x) => x.id === currentDay.userID);
    let calculatedMiles = (currentDay.numSteps * y.strideLength) / 5280;
    return Math.round(calculatedMiles);
  }
} 

if (typeof module !== 'undefined') {
  module.exports = Activity; 
}