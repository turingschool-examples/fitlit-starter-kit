class Hydration {
  constructor(hydrationData) {
    this.id = hydrationData.userID;
    this.date = hydrationData.date;
    this.numOunces = hydrationData.numOunces;
  }
  findDailyHydration(date) {
    return this.numOunces;
  }
}

module.exports = Hydration;
