class Sleep {
  constructor(sleepData) {
    this.sleepData = sleepData;
  }
  calcAvgSleepHrTotalDays(userID) {
    let filteredSleep = this.sleepData.filter(userEntry => userEntry.userID === userID);
    let sum = filteredSleep.reduce(function(total, curVal) {
      return total + curVal.hoursSlept;
    }, 0);
    return sum / filteredSleep.length;
  }
  calcAvgSleepQualityTotalDays(userID) {
    let filteredSleepQuality = this.sleepData.filter(userEntry => userEntry.userID === userID);
    let sum = filteredSleepQuality.reduce(function(total, curVal) {
      return total + curVal.sleepQuality;
    }, 0);
    return sum / filteredSleepQuality.length;
  }
  getDailySleep(userID,date){
        let filteredSleep = this.sleepData.filter(userEntry => userEntry.userID === userID);
        return filteredSleep.find(day => day.date ===date).hoursSlept;
  }
  getDailySleepQuality(userID,date){
    let filteredSleepQuality = this.sleepData.filter(userEntry => userEntry.userID === userID);
    return filteredSleepQuality.find(day => day.date ===date).sleepQuality;
  }


}

if (typeof module !== 'undefined') {
  module.exports = Sleep;
}
