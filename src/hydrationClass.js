const hydration = require('../data/hydration.js');

class Hydration {
  constructor(hydroObj) {
    this.userID = hydroObj.userID;
    this.date = hydroObj.date;
    this.numOunces = hydroObj.numOunces;
  }

  calculateAverageWaterIntake() {
    
  }
}



if (typeof module !== 'undefined') {
  module.exports = Hydration;
}