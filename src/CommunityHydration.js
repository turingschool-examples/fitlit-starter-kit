class CommunityHydration {
  constructor(data = []) {
    this.hydrations = data.map(user => new Hydration(user))
  }

  calculateAvgWaterPerDay(userID) {
    const numOuncesData = this.hydrations.filter(water => (water.userID === userID));
    const waterConsumed = numOuncesData.map(water => water.numOunces);
    const avgWaterConsumed = (waterConsumed.reduce((a, b) => a + b, 0)) / waterConsumed.length;
    return avgWaterConsumed;
  }
  calculateTotalWaterPerDay(userID, date) {
    const userWater = this.hydrations.filter(water => water.userID === userID);
    const waterOnDay = userWater.find(waterDrank => (waterDrank.date === date));
    return waterOnDay.numOunces;
  }
}
module.exports = DisplayCalculator;
