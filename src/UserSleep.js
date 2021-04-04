var calcAverage = require("./helpers/calcAverage");
var formatDataByDate = require("./helpers/formatDataByDate");
var retrieveAllUserDataByWeek = require("./helpers/retrieveDataByWeek");

class UserSleep {
  constructor(id, allSleepData) {
    this.id = id;
    this.sleepData = allSleepData.filter(dataPoint => dataPoint.userID === this.id);
  }

  calcAvgSleep(property) {
    const avg = calcAverage(this.sleepData, property);
    return avg
  }

  calcSleepByDate(date, property) {
    const sleepDate = this.sleepData.find(dataPoint => dataPoint.date === date);
    return sleepDate[property]
  }

  calcSleepOverWeek(date, property) {
    const sleepData = retrieveAllUserDataByWeek(this.sleepData, date);
    const formattedData = formatDataByDate(sleepData, property);
    return formattedData
  }
}

if (typeof module !== 'undefined') {
  module.exports = UserSleep;
}
