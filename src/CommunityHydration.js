const Hydration = require('../src/Hydration');

class CommunityHydration {
  constructor(data = []) {
    this.hydrations = data.map(user => new Hydration(user))
  }

  calculateAvgWaterPerDay(userID) {
    const userWater = this.hydrations.filter(water => (water.userID === userID));
    const waterConsumed = userWater.map(water => water.numOunces);
    const avgWaterConsumed = (waterConsumed.reduce((a, b) => a + b, 0)) / waterConsumed.length;
    return avgWaterConsumed;
  }

  calculateTotalWaterPerDay(userID, date) {
    const userWater = this.hydrations.find(water => water.userID === userID && water.date === date);
    return userWater.numOunces;
  }

  calculateTotalWeek(userID, startDate, endDate){
    const userWater = this.hydrations.filter(water => water.userID === userID)
    const userWaterDateConversion = userWater.map(hydration => {
      parseInt(hydration.date.split('/').join(''))
    const waterWithinWeek = this.hydration.filter( water.date >=  startDate && water.date <= endDate);

    //.find date and add 1 to each day? to create a new array? or sort?
    //what if the year runs out or dates run into next month?
    //.getDate()? ++
    //.slice() date

    // calculateTotalWeekTrial(20, 20191226, 20191231)
  }
}
