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
}



if (typeof module !== 'undefined') {
  module.exports = Hydration;
}