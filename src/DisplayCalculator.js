class DisplayCalculator {
  calculateAvgWaterPerDay(userID, hydrationStats) {
    const numOuncesData = hydrationStats.filter(water => (water.userID === userID));
    const waterConsumed = numOuncesData.map(water => water.numOunces);
    const avgWaterConsumed = (waterConsumed.reduce((a, b) => a + b, 0)) / waterConsumed.length;
    return avgWaterConsumed;
  }
  calculateTotalWaterPerDay(hydrationStats, userID, date) {
    const userWater = hydrationStats.filter(water => water.userID === userID);
    const waterOnDay = userWater.find(waterDrank => (waterDrank.date === date));
    return waterOnDay.numOunces;
  }
}
module.exports = DisplayCalculator;
