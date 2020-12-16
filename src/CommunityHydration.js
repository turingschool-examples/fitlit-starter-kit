// const chai = require('chai');
// const expect = chai.expect;
//
// const Hydration = require('../src/Hydration');

class CommunityHydration {
  constructor(data = []) {
    this.hydrations = data.map(hydration => new Hydration(hydration))
  }
  convertDateString(date) {
    return parseInt(date.split('/').join(''));
  }

  findUserWaterData(userID) {
      const userWater = this.hydrations.filter(water => water.userID === userID)
      return userWater;
  }

  calculateAvgWaterPerDay(userID) {
    const userWater = this.hydrations.filter(water => (water.userID === userID));
    const waterConsumed = userWater.map(water => water.numOunces);
    const avgWaterConsumed = (waterConsumed.reduce((a, b) => a + b, 0)) / waterConsumed.length;
    return Math.round(avgWaterConsumed * 10) / 10
  }

  calculateTotalWaterOnDay(userID, date) {
    const userWater = this.hydrations.find(water => water.userID === userID && water.date === date);
    return userWater.numOunces;
  }

  calculateTotalWeek(userID, startDate, endDate){//refactor to truncate long decimal numbers
    const weekWaterTotals = [];
    const startDateNumber = this.convertDateString(startDate);
    const endDateNumber = this.convertDateString(endDate);
    const userWater = this.findUserWaterData(userID);

    const waterDates = userWater.filter(water => {
      const waterDateToNumber = this.convertDateString(water.date)
      if(waterDateToNumber >= startDateNumber && waterDateToNumber <= endDateNumber) {
        weekWaterTotals.push(water);
      }
    })
    return weekWaterTotals;
  }
}
// module.exports = CommunityHydration;
