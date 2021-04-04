var formatDataByDate = require("./helpers/formatDataByDate");
var retrieveAllUserDataByWeek = require("./helpers/retrieveDataByWeek");

class Hydration {
  constructor(id, data) {
    this.id = id;
    this.hydrationData = data.filter(dataPoint => dataPoint.userID === this.id);
  }

  //calculating average
  calculateDailyWater() {
    const totalOzDrank = this.hydrationData.reduce((total, num) => {
      return total +num.numOunces;
    }, 0);
    const totalDays = this.hydrationData.length;
    const avgOzDrank = totalOzDrank / totalDays;
    return avgOzDrank;
  }

  ozDrankOnDate(date) {
    const drinkDate = this.hydrationData.find(dataPoint => dataPoint.date === date);
    const ozDrankOnDate = drinkDate.numOunces;
    return ozDrankOnDate;
  }

  dailyDrinkDuringWeek(date, property) {
    const hydrationData = retrieveAllUserDataByWeek(this.hydrationData, date);
    const formattedData = formatDataByDate(hydrationData, property);
    return formattedData
  }
}

if (typeof module !== "undefined") {
  module.exports = Hydration;
}
