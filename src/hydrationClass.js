const hydration = require('../data/hydration.js');

class Hydration {
  constructor(hydrationData, userID) {
    this.hydrationData = hydrationData;
    this.userID = userID;
  }

  calculateAverageWaterIntake() {
    let sumWaterIntake = this.hydrationData.reduce((totalWater, numOunces) => {
      return totalWater += numOunces.numOunces;
    }, 0);
    return Math.round(sumWaterIntake / this.hydrationData.length);
  }

  //method to return how many fluid ounces of water they consumed for a specific day
  waterConsumedThatDay(date) {
    var numOunces = this.hydrationData.find(element => {
      if (this.userID === element.userID && date === element.date) {
        return element.numOunces;
     }
    });
    return numOunces.numOunces;
  }
  //method to return how many fluid ounces of water they consumed over a course of a week (7 days) - return amount for each day
}



if (typeof module !== 'undefined') {
  module.exports = Hydration;
}