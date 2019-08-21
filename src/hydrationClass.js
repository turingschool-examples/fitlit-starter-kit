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

  waterConsumedThatDay(date) {
    let dayOunces = this.hydrationData.find(element => {
      if (this.userID === element.userID && date === element.date) {
        return element.numOunces;
     }
    });
    return dayOunces.numOunces;
  }
  
  waterConsumedThatWeek() {
    let currentDay = this.hydrationData[this.hydrationData.length - 1]
    let currentDayIndex = this.hydrationData.indexOf(currentDay)
    let currentWeek = this.hydrationData.slice(-currentDayIndex)
    let currentWeekOunces = currentWeek.map(element => {
      return element.numOunces;
    })
    return currentWeekOunces;
  }
}

//

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}