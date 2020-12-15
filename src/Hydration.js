class Hydration {
  constructor(hydrationForUser) {
    this.userID = hydrationForUser.userID;
    this.date = hydrationForUser.date;
    this.numOunces = hydrationForUser.numOunces;
  }
}
module.exports = Hydration;
