var calcAverage = require("./helpers/calcAverage");
var formatDataByDate = require("./helpers/formatDataByDate");
var retrieveAllUserDataByWeek = require("./helpers/retrieveDataByWeek");

class Hydration {
  constructor(id, data) {
    this.id = id;
    this.hydrationData = data.filter(dataPoint => dataPoint.userID === this.id);
  }

  calcAvgDailyWater(property) {
    const avg = calcAverage(this.hydrationData, property)
    return avg
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
