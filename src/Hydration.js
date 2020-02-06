class Hydration {
  constructor(hydrationData) {
    this.userID = hydrationData.userID;
    this.date = hydrationData.date;
    this.numOunces = hydrationData.numOunces;
  }

  fluidConsumedByDate() {

  }

  fluidConsumededWeekly () {

  }
}

if(typeof module !== 'undefined') {
  module.exports = Hydration;
};
