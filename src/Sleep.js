class Sleep {
  constructor(sleepData) {
    this.sleepData = sleepData;
  }
  calcAvgSleepHrTotalDays(userID) {
    let filteredSleepItems = this.sleepData.filter(userEntry => userEntry.userID === userID);
    let sum = filteredSleepItems.reduce(function(total, curVal) {
      return total + curVal.hoursSlept;
    }, 0);
    return sum / filteredSleepItems.length;
  }
  calcAvgSleepQualityTotalDays(userID) {
    let filteredSleepQuality = this.sleepData.filter(userEntry => userEntry.userID === userID);
    let sum = filteredSleepQuality.reduce(function(total, curVal) {
      return total + curVal.sleepQuality;
    }, 0);
    return sum / filteredSleepQuality.length;
  }
  
}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}
