class Hydration {
  constructor(hydrationData) {
    this.userId = hydrationData.userID,
    this.date = hydrationData.date,
    this.numOunces = hydrationData.numOunces,
  }

  calculateAverageDailyConsumption() {

  }

  returnDailyConsumption() {

  }

  returnWeeklyConsumption() {

  }
}
if (typeof module !== 'undefined') {
  module.exports = Hydration;
}
