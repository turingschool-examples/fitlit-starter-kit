if (typeof module !== 'undefined') {
  const calcAverage = require("./helpers/calcAverage");
  const formatDataByDate = require("./helpers/formatDataByDate");
  const retrieveAllUserDataByWeek = require("./helpers/retrieveDataByWeek");
}

class Hydration {
  constructor(id, data) {
    this.id = id;
    this.hydrationData = data.filter(dataPoint => dataPoint.userID === this.id);
  }

  mostRecentDayData() {
    return this.hydrationData[this.hydrationData.length - 1];
  }

  calcAvgDailyWater(property) {
    const avg = calcAverage(this.hydrationData, property)
    return avg
  }

  calcByDate(date) {
    const drinkDate = this.hydrationData.find(dataPoint => dataPoint.date === date);
    const ozDrankOnDate = drinkDate.numOunces;
    return ozDrankOnDate;
  }

  calcOverWeek(date, property) {
    const hydrationData = retrieveAllUserDataByWeek(this.hydrationData, date);
    const formattedData = formatDataByDate(hydrationData, property);
    return formattedData
  }
}

if (typeof module !== "undefined") {
  module.exports = Hydration;
}
