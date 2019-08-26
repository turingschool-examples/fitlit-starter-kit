// const hydration = require('../data/hydration.js');

class Hydration {
  constructor(hydrationData, userID) {
    this.hydrationData = hydrationData;
    this.userID = userID;
    this.singleUserData = []
  }

  extractSingleUser() {
    let userData = this.hydrationData.filter(user => {
      if (this.userID === user.userID) {
        return user;
      }
    });
    this.singleUserData = userData
    // return userData
  }
  
  calculateAverageWaterIntake() {
    let sumWaterIntake = this.hydrationData.reduce((totalWater, numOunces) => {
      return totalWater += numOunces.numOunces;
    }, 0);
    return Math.round(sumWaterIntake / this.hydrationData.length);
  }

calculateDailyWaterIntake() {
  let waterConsumed = this.singleUserData[this.singleUserData.length - 1];
  return waterConsumed.numOunces;
  }
  
  calculateWeeklyWaterIntake() {
    let currentDay = this.singleUserData[this.singleUserData.length - 1];
    let currentWeek = this.singleUserData.slice(-7);
    return currentWeek;
  }
}

//

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}