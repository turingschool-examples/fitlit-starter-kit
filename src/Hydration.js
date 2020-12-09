class Hydration {
  constructor(hydrationForUser) {
    this.userID = hydrationForUser.userID;
    this.date = hydrationForUser.date;
    this.numOunces = hydrationForUser.numOunces;
  }
  calculateAvgPerDay(hydrationStats) {
    const numOuncesData = hydrationStats.filter(water => water.numOunces);
  }
}
module.exports = Hydration;
