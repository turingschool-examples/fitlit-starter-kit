var formatDataByDate = require("./helpers/formatDataByDate");
var retrieveAllUserDataByWeek = require("./helpers/retrieveDataByWeek");

class UserSleep {
  constructor(id, allSleepData) {
    this.id = id;
    this.sleepData = allSleepData.filter(dataPoint => dataPoint.userID === this.id);
  }

  calcAvgSleep(property) {
    const total = this.sleepData.reduce((total, num) => {
      return total + num[property]
    }, 0)
    const avg = total / this.sleepData.length
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
