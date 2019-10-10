class Hydration {
  constructor(hydrationData) {
    this.id = hydrationData.userID;
    this.date = hydrationData.date;
    this.numOunces = hydrationData.numOunces;
  }
  findDailyHydration(date) {
    
  }
}

module.exports = Hydration;
