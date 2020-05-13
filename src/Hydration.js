class Hydration {
  constructor(hydrationData) {
    //if(hydrationData === undefined) throw 'Cannot construct';
    this.userID = hydrationData.userID;
    this.date = hydrationData.date;
    this.numOunces = hydrationData.numOunces;
  }

  getDailyWater() {
    return this.numOunces;
  }
}

if (typeof module !== 'undefined') {
  module.exports = Hydration;
}

// For a user, how many fluid ounces of water consumed each day over the course of a week (7 days) - return the amount for each day
