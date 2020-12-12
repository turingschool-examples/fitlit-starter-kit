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

  convertDateString(date) {
    return parseInt(date.split('/').join(''));
  }

  calculateTotalWeek(userID, startDate, endDate){
    const weekWaterTotals = [];
    const startDateNumber = this.convertDateString(startDate);
    const endDateNumber = this.convertDateString(endDate);
    const userWater = this.hydrations.filter(water => water.userID === userID)
    const userWaterStrings = userWater.map(hydration => {
      const waterStrings = this.convertDateString(hydration.date);
      return waterStrings;
    })
    const waterWithinWeek = userWaterStrings.filter(waterDate => waterDate >= startDateNumber && waterDate <= endDateNumber);
    const waterWithinWeekSorted = waterWithinWeek.sort((startDateNumber, endDateNumber) => startDateNumber - endDateNumber);
    const waterWeek = waterWithinWeekSorted.forEach(element => {
      const waterWeekFiltered = this.hydrations.filter(water => {
        let dateString = this.convertDateString(water.date)
        if(dateString === element){
          weekWaterTotals.push(water.numOunces);
        }
       })
    })
    return weekWaterTotals;
  }
}
module.exports = CommunityHydration;
