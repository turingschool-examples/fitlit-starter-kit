class Hydration {
  constructor(hydrationForUser) {
    this.userID = hydrationForUser.userID;
    this.date = hydrationForUser.date;
    this.numOunces = hydrationForUser.numOunces;
  }
  calculateAvgPerDay(hydrationStats) {
    const numOuncesData = hydrationStats.filter(water => (water.userID === this.userID));
    const waterConsumed = numOuncesData.map(water => water.numOunces);
    const totalWaterConsumed = (waterConsumed.reduce((a, b) => a + b, 0)) / waterConsumed.length;
    return totalWaterConsumed;
  }
}
module.exports = Hydration;
