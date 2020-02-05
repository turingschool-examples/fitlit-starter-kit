class Hydration {
  constructor(sleepData) {
    this.userID = sleepData.userID;
    this.date = sleepData.date;
    this.numOunces = sleepData.numOunces;
  }
}

if(typeof module !== 'undefined') {
  module.exports = Hyrdation;
};
