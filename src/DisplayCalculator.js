class DisplayCalculator {
  calculateAvgPerDay(userID, hydrationStats){
    const numOuncesData = hydrationStats.filter(water => (water.userID === userID));
    const waterConsumed = numOuncesData.map(water => water.numOunces);
    const avgWaterConsumed = (waterConsumed.reduce((a, b) => a + b, 0)) / waterConsumed.length;
    return avgWaterConsumed;
  }
}
module.exports = DisplayCalculator;
