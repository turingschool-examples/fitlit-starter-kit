class Hydration {
    constructor(hydrationData, userId) {
      this.currentHydrationData = hydrationData;
      this.userID = userId;
      this.date = hydrationData.date;
      this.numOunces = hydrationData.numOunces;
    }
}

if (typeof module !== 'undefined') {
    module.exports = Hydration;
  };
