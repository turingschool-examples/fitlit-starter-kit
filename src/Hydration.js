class Hydration {
  constructor(hydrationData) {
    this.userID = hydrationData.userID;
    this.date = hydrationData.date;
    this.numOunces = hydrationData.numOunces;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}

// For a user, how many fluid ounces they consumed for a specific day (identified by a date)
